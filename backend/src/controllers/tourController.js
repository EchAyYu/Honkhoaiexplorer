import pool from '../config/database.js';

// GET /api/tours - Get all tours (public)
export const getTours = async (req, res) => {
    try {
        const { limit = 9, page = 1, location, minPrice, maxPrice } = req.query;
        const offset = (page - 1) * limit;

        let query = 'SELECT * FROM tours WHERE status = $1';
        let params = ['published'];
        let paramIndex = 2;

        if (location) {
            query += ` AND location ILIKE $${paramIndex}`;
            params.push(`%${location}%`);
            paramIndex++;
        }

        if (minPrice) {
            query += ` AND price >= $${paramIndex}`;
            params.push(minPrice);
            paramIndex++;
        }

        if (maxPrice) {
            query += ` AND price <= $${paramIndex}`;
            params.push(maxPrice);
            paramIndex++;
        }

        query += ` ORDER BY created_at DESC LIMIT $${paramIndex} OFFSET $${paramIndex + 1}`;
        params.push(limit, offset);

        const { rows } = await pool.query(query, params);

        // Get total count
        const countQuery = 'SELECT COUNT(*) FROM tours WHERE status = $1';
        const { rows: countRows } = await pool.query(countQuery, ['published']);

        res.json({
            tours: rows,
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

// GET /api/tours/:slug - Get single tour
export const getTourBySlug = async (req, res) => {
    try {
        const { slug } = req.params;
        const { rows } = await pool.query(
            'SELECT * FROM tours WHERE slug = $1 AND status = $2',
            [slug, 'published']
        );

        if (rows.length === 0) {
            return res.status(404).json({ error: 'Tour not found' });
        }

        // Increase view count
        await pool.query('UPDATE tours SET view_count = view_count + 1 WHERE id = $1', [rows[0].id]);

        res.json(rows[0]);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
// Tạo tour mới (admin)
export const createTour = async (req, res) => {
    try {
        const {
            title, description, price, duration_days, location,
            featured_image, images, included, excluded, itinerary,
            available_from, available_to, max_people, status
        } = req.body;

        const slug = slugify(title, { lower: true, strict: true, locale: 'vi' });

        const result = await pool.query(
            `INSERT INTO tours (
                title, slug, description, price, duration_days, location,
                featured_image, images, included, excluded, itinerary,
                available_from, available_to, max_people, status
            ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15)
            RETURNING *`,
            [title, slug, description, price, duration_days, location,
             featured_image, images || [], included || [], excluded || [], itinerary || [],
             available_from, available_to, max_people || 10, status || 'draft']
        );

        res.status(201).json({ success: true, tour: result.rows[0] });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Cập nhật tour (admin)
export const updateTour = async (req, res) => {
    try {
        const { id } = req.params;
        const updates = req.body;
        
        let updateFields = [];
        let params = [];
        let paramIndex = 1;

        for (const [key, value] of Object.entries(updates)) {
            if (value !== undefined) {
                updateFields.push(`${key} = $${paramIndex}`);
                params.push(value);
                paramIndex++;
            }
        }

        if (updateFields.length === 0) {
            return res.status(400).json({ error: 'No fields to update' });
        }

        params.push(id);
        const result = await pool.query(
            `UPDATE tours SET ${updateFields.join(', ')}, updated_at = CURRENT_TIMESTAMP
             WHERE id = $${paramIndex} RETURNING *`,
            params
        );

        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Tour not found' });
        }

        res.json({ success: true, tour: result.rows[0] });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Xóa tour (admin)
export const deleteTour = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await pool.query('DELETE FROM tours WHERE id = $1 RETURNING id', [id]);
        
        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Tour not found' });
        }
        
        res.json({ success: true, message: 'Tour deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
