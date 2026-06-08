import pool from '../config/database.js';
import slugify from 'slugify';

// Lấy danh sách bài viết (public - chỉ bài đã publish)
export const getBlogPosts = async (req, res) => {
    try {
        const { limit = 9, page = 1, category, tag } = req.query;
        const offset = (page - 1) * limit;

        let query = `
      SELECT bp.*, u.full_name as author_name
      FROM blog_posts bp
      LEFT JOIN users u ON bp.author_id = u.id
      WHERE bp.status = 'published'
    `;
        let params = [];
        let paramIndex = 1;

        if (category) {
            query += ` AND bp.category = $${paramIndex}`;
            params.push(category);
            paramIndex++;
        }

        if (tag) {
            query += ` AND bp.tags::text ILIKE $${paramIndex}`;
            params.push(`%${tag}%`);
            paramIndex++;
        }

        query += ` ORDER BY bp.published_at DESC LIMIT $${paramIndex} OFFSET $${paramIndex + 1}`;
        params.push(limit, offset);

        const { rows } = await pool.query(query, params);

        // Get total count
        let countQuery = "SELECT COUNT(*) FROM blog_posts WHERE status = 'published'";
        let countParams = [];
        if (category) {
            countQuery = "SELECT COUNT(*) FROM blog_posts WHERE status = 'published' AND category = $1";
            countParams.push(category);
        }
        const { rows: countRows } = await pool.query(countQuery, countParams);

        res.json({
            posts: rows,
            pagination: {
                page: parseInt(page),
                limit: parseInt(limit),
                total: parseInt(countRows[0].count)
            }
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Lấy chi tiết bài viết theo slug (public)
export const getBlogPostBySlug = async (req, res) => {
    try {
        const { slug } = req.params;
        const { rows } = await pool.query(
            `SELECT bp.*, u.full_name as author_name
       FROM blog_posts bp
       LEFT JOIN users u ON bp.author_id = u.id
       WHERE bp.slug = $1 AND bp.status = 'published'`,
            [slug]
        );

        if (rows.length === 0) {
            return res.status(404).json({ error: 'Blog post not found' });
        }

        // Tăng view count
        await pool.query('UPDATE blog_posts SET view_count = view_count + 1 WHERE id = $1', [rows[0].id]);

        res.json(rows[0]);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Tạo bài viết mới (admin)
// Tạo bài viết mới (admin)
export const createBlogPost = async (req, res) => {
    try {
        const {
            title,
            excerpt,
            content,
            featured_image,
            category,
            tags,
            status = 'draft'
        } = req.body;

        if (!title || !content) {
            return res.status(400).json({ error: 'Missing required fields: title, content' });
        }

        const slug = slugify(title, { lower: true, strict: true, locale: 'vi' });
        const author_id = req.user.id;
        const published_at = status === 'published' ? new Date() : null;

        // Chuyển đổi tags thành JSON string nếu là array
        let tagsJson = [];
        if (tags && Array.isArray(tags)) {
            tagsJson = tags;
        } else if (tags && typeof tags === 'string') {
            try {
                tagsJson = JSON.parse(tags);
            } catch (e) {
                tagsJson = [tags];
            }
        }

        const result = await pool.query(
            `INSERT INTO blog_posts (
                title, slug, excerpt, content, featured_image,
                author_id, category, tags, status, published_at
            ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8::jsonb, $9, $10)
            RETURNING *`,
            [title, slug, excerpt, content, featured_image,
                author_id, category, JSON.stringify(tagsJson), status, published_at]
        );

        res.status(201).json({
            success: true,
            message: 'Blog post created successfully',
            post: result.rows[0]
        });
    } catch (error) {
        console.error('Create blog error:', error);
        res.status(500).json({ error: error.message });
    }
};

// Cập nhật bài viết (admin)
export const updateBlogPost = async (req, res) => {
    try {
        const { id } = req.params;
        const {
            title,
            excerpt,
            content,
            featured_image,
            category,
            tags,
            status
        } = req.body;

        let updateFields = [];
        let params = [];
        let paramIndex = 1;

        if (title) {
            const slug = slugify(title, { lower: true, strict: true, locale: 'vi' });
            updateFields.push(`title = $${paramIndex}`, `slug = $${paramIndex + 1}`);
            params.push(title, slug);
            paramIndex += 2;
        }
        if (excerpt !== undefined) {
            updateFields.push(`excerpt = $${paramIndex}`);
            params.push(excerpt);
            paramIndex++;
        }
        if (content !== undefined) {
            updateFields.push(`content = $${paramIndex}`);
            params.push(content);
            paramIndex++;
        }
        if (featured_image !== undefined) {
            updateFields.push(`featured_image = $${paramIndex}`);
            params.push(featured_image);
            paramIndex++;
        }
        if (category !== undefined) {
            updateFields.push(`category = $${paramIndex}`);
            params.push(category);
            paramIndex++;
        }
        // Trong hàm updateBlogPost, tìm phần xử lý tags và thay bằng:
        if (tags !== undefined) {
            let tagsJson = [];
            if (Array.isArray(tags)) {
                tagsJson = tags;
            } else if (typeof tags === 'string') {
                try {
                    tagsJson = JSON.parse(tags);
                } catch (e) {
                    tagsJson = [tags];
                }
            }
            updateFields.push(`tags = $${paramIndex}::jsonb`);
            params.push(JSON.stringify(tagsJson));
            paramIndex++;
        }
        if (status !== undefined) {
            updateFields.push(`status = $${paramIndex}`);
            updateFields.push(`published_at = $${paramIndex + 1}`);
            params.push(status, status === 'published' ? new Date() : null);
            paramIndex += 2;
        }

        if (updateFields.length === 0) {
            return res.status(400).json({ error: 'No fields to update' });
        }

        params.push(id);
        const query = `
      UPDATE blog_posts 
      SET ${updateFields.join(', ')}, updated_at = CURRENT_TIMESTAMP
      WHERE id = $${paramIndex}
      RETURNING *
    `;

        const result = await pool.query(query, params);

        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Blog post not found' });
        }

        res.json({
            success: true,
            message: 'Blog post updated successfully',
            post: result.rows[0]
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Xóa bài viết (admin)
export const deleteBlogPost = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await pool.query('DELETE FROM blog_posts WHERE id = $1 RETURNING id', [id]);

        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Blog post not found' });
        }

        res.json({
            success: true,
            message: 'Blog post deleted successfully'
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Lấy danh sách categories (để filter)
export const getCategories = async (req, res) => {
    try {
        const { rows } = await pool.query(
            "SELECT DISTINCT category FROM blog_posts WHERE category IS NOT NULL AND status = 'published'"
        );
        const categories = rows.map(row => row.category);
        res.json({ categories });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};