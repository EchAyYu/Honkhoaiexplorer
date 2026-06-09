import pool from '../config/database.js';

// Lấy danh sách ảnh gallery (public)
export const getGallery = async (req, res) => {
    try {
        const { limit = 20, category } = req.query;
        let query = 'SELECT * FROM gallery';
        let params = [];
        
        if (category) {
            query += ' WHERE category = $1';
            params.push(category);
        }
        
        query += ' ORDER BY created_at DESC LIMIT $' + (params.length + 1);
        params.push(limit);
        
        const { rows } = await pool.query(query, params);
        res.json({ images: rows });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Thêm ảnh vào gallery (admin)
export const addToGallery = async (req, res) => {
    try {
        const { image_url, thumbnail_url, title, description, category, taken_date, is_featured } = req.body;
        const uploaded_by = req.user.id;
        
        const result = await pool.query(
            `INSERT INTO gallery (image_url, thumbnail_url, title, description, category, taken_date, is_featured, uploaded_by)
             VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *`,
            [image_url, thumbnail_url, title, description, category, taken_date, is_featured || false, uploaded_by]
        );
        
        res.status(201).json({ success: true, image: result.rows[0] });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Xóa ảnh khỏi gallery (admin)
export const deleteFromGallery = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await pool.query('DELETE FROM gallery WHERE id = $1 RETURNING id', [id]);
        
        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Image not found' });
        }
        
        res.json({ success: true, message: 'Image deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};