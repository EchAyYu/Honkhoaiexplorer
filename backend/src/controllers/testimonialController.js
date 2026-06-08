import pool from '../config/database.js';

// Lấy danh sách testimonials (public - chỉ approved)
export const getTestimonials = async (req, res) => {
    try {
        const { limit = 6, is_featured = false } = req.query;

        let query = `
      SELECT t.*, tour.title as tour_title
      FROM testimonials t
      LEFT JOIN tours tour ON t.tour_id = tour.id
      WHERE t.status = 'approved'
    `;
        let params = [];
        let paramIndex = 1;

        if (is_featured === 'true') {
            query += ` AND t.is_featured = true`;
        }

        query += ` ORDER BY t.created_at DESC LIMIT $${paramIndex}`;
        params.push(limit);

        const { rows } = await pool.query(query, params);
        res.json({ testimonials: rows });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Gửi testimonial mới (public)
export const submitTestimonial = async (req, res) => {
    try {
        const { customer_name, customer_email, rating, content, tour_id } = req.body;

        // Validate
        if (!customer_name || !customer_email || !rating || !content) {
            return res.status(400).json({
                error: 'Missing required fields: customer_name, customer_email, rating, content'
            });
        }

        if (rating < 1 || rating > 5) {
            return res.status(400).json({ error: 'Rating must be between 1 and 5' });
        }

        const result = await pool.query(
            `INSERT INTO testimonials (
        customer_name, customer_email, rating, content, tour_id, status
      ) VALUES ($1, $2, $3, $4, $5, 'pending')
      RETURNING *`,
            [customer_name, customer_email, rating, content, tour_id || null]
        );

        res.status(201).json({
            success: true,
            message: 'Testimonial submitted successfully, pending approval',
            testimonial: result.rows[0]
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Lấy danh sách testimonials (admin)
export const getAllTestimonials = async (req, res) => {
    try {
        const { status, limit = 20, page = 1 } = req.query;
        const offset = (page - 1) * limit;

        let query = `
      SELECT t.*, tour.title as tour_title
      FROM testimonials t
      LEFT JOIN tours tour ON t.tour_id = tour.id
    `;
        let params = [];
        let paramIndex = 1;

        if (status) {
            query += ` WHERE t.status = $${paramIndex}`;
            params.push(status);
            paramIndex++;
        }

        query += ` ORDER BY t.created_at DESC LIMIT $${paramIndex} OFFSET $${paramIndex + 1}`;
        params.push(limit, offset);

        const { rows } = await pool.query(query, params);

        // Get total count
        let countQuery = 'SELECT COUNT(*) FROM testimonials';
        let countParams = [];
        if (status) {
            countQuery += ' WHERE status = $1';
            countParams.push(status);
        }
        const { rows: countRows } = await pool.query(countQuery, countParams);

        res.json({
            testimonials: rows,
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

// Cập nhật trạng thái testimonial (admin)
export const updateTestimonialStatus = async (req, res) => {
    try {
        const { id } = req.params;
        const { status, is_featured } = req.body;

        const validStatuses = ['pending', 'approved', 'rejected'];
        if (status && !validStatuses.includes(status)) {
            return res.status(400).json({ error: 'Invalid status' });
        }

        let updateFields = [];
        let params = [];
        let paramIndex = 1;

        if (status) {
            updateFields.push(`status = $${paramIndex}`);
            params.push(status);
            paramIndex++;
        }

        if (is_featured !== undefined) {
            updateFields.push(`is_featured = $${paramIndex}`);
            params.push(is_featured);
            paramIndex++;
        }

        if (updateFields.length === 0) {
            return res.status(400).json({ error: 'No fields to update' });
        }

        params.push(id);
        const result = await pool.query(
            `UPDATE testimonials SET ${updateFields.join(', ')}, updated_at = CURRENT_TIMESTAMP 
       WHERE id = $${paramIndex} RETURNING *`,
            params
        );

        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Testimonial not found' });
        }

        res.json({
            success: true,
            message: 'Testimonial updated successfully',
            testimonial: result.rows[0]
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Xóa testimonial (admin)
export const deleteTestimonial = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await pool.query('DELETE FROM testimonials WHERE id = $1 RETURNING id', [id]);

        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Testimonial not found' });
        }

        res.json({
            success: true,
            message: 'Testimonial deleted successfully'
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};