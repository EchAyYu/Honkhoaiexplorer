import pool from '../config/database.js';

// Gửi liên hệ mới (public)
export const submitContact = async (req, res) => {
    try {
        const { name, email, phone, subject, message } = req.body;

        // Validate required fields
        if (!name || !email || !message) {
            return res.status(400).json({
                error: 'Missing required fields: name, email, message'
            });
        }

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return res.status(400).json({ error: 'Invalid email format' });
        }

        // Create contact submission
        const result = await pool.query(
            `INSERT INTO contact_submissions (name, email, phone, subject, message, status)
       VALUES ($1, $2, $3, $4, $5, 'unread')
       RETURNING *`,
            [name, email, phone || null, subject || null, message]
        );

        res.status(201).json({
            success: true,
            message: 'Contact form submitted successfully',
            contact: result.rows[0]
        });
    } catch (error) {
        console.error('Submit contact error:', error);
        res.status(500).json({ error: error.message });
    }
};

// Lấy danh sách liên hệ (admin)
export const getContacts = async (req, res) => {
    try {
        const { limit = 20, page = 1, status } = req.query;
        const offset = (page - 1) * limit;

        let query = 'SELECT * FROM contact_submissions';
        let params = [];
        let paramIndex = 1;

        if (status) {
            query += ` WHERE status = $${paramIndex}`;
            params.push(status);
            paramIndex++;
        }

        query += ` ORDER BY created_at DESC LIMIT $${paramIndex} OFFSET $${paramIndex + 1}`;
        params.push(limit, offset);

        const { rows } = await pool.query(query, params);

        // Get total count
        let countQuery = 'SELECT COUNT(*) FROM contact_submissions';
        let countParams = [];
        if (status) {
            countQuery += ' WHERE status = $1';
            countParams.push(status);
        }
        const { rows: countRows } = await pool.query(countQuery, countParams);

        res.json({
            contacts: rows,
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

// Lấy chi tiết 1 liên hệ (admin)
export const getContactById = async (req, res) => {
    try {
        const { id } = req.params;
        const { rows } = await pool.query(
            'SELECT * FROM contact_submissions WHERE id = $1',
            [id]
        );

        if (rows.length === 0) {
            return res.status(404).json({ error: 'Contact submission not found' });
        }

        res.json(rows[0]);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Cập nhật trạng thái liên hệ (admin)
export const updateContactStatus = async (req, res) => {
    try {
        const { id } = req.params;
        const { status } = req.body;

        const validStatuses = ['unread', 'read', 'replied'];
        if (!validStatuses.includes(status)) {
            return res.status(400).json({ error: 'Invalid status. Must be: unread, read, replied' });
        }

        const result = await pool.query(
            'UPDATE contact_submissions SET status = $1 WHERE id = $2 RETURNING *',
            [status, id]
        );

        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Contact submission not found' });
        }

        res.json({
            success: true,
            message: `Contact status updated to ${status}`,
            contact: result.rows[0]
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Xóa liên hệ (admin)
export const deleteContact = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await pool.query(
            'DELETE FROM contact_submissions WHERE id = $1 RETURNING id',
            [id]
        );

        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Contact submission not found' });
        }

        res.json({
            success: true,
            message: 'Contact submission deleted successfully'
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};