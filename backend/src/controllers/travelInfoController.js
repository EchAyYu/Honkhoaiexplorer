import pool from '../config/database.js';

// Lấy danh sách travel info (public)
export const getTravelInfo = async (req, res) => {
    try {
        const { rows } = await pool.query(
            'SELECT * FROM travel_info WHERE is_active = true ORDER BY order_index ASC'
        );
        res.json({ travelInfo: rows });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Cập nhật travel info (admin)
export const updateTravelInfo = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, content, icon, order_index, is_active } = req.body;
        
        const result = await pool.query(
            `UPDATE travel_info 
             SET title = COALESCE($1, title),
                 content = COALESCE($2, content),
                 icon = COALESCE($3, icon),
                 order_index = COALESCE($4, order_index),
                 is_active = COALESCE($5, is_active),
                 updated_at = CURRENT_TIMESTAMP
             WHERE id = $6 RETURNING *`,
            [title, content, icon, order_index, is_active, id]
        );
        
        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Travel info not found' });
        }
        
        res.json({ success: true, travelInfo: result.rows[0] });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};