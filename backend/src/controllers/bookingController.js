import pool from '../config/database.js';

// Tạo booking mới
export const createBooking = async (req, res) => {
    try {
        const {
            tour_id,
            customer_name,
            customer_email,
            customer_phone,
            number_of_people,
            start_date,
            special_requests
        } = req.body;

        // Validate required fields
        if (!tour_id || !customer_name || !customer_email || !number_of_people || !start_date) {
            return res.status(400).json({
                error: 'Missing required fields: tour_id, customer_name, customer_email, number_of_people, start_date'
            });
        }

        // Check if tour exists
        const tourCheck = await pool.query('SELECT id, price FROM tours WHERE id = $1', [tour_id]);
        if (tourCheck.rows.length === 0) {
            return res.status(404).json({ error: 'Tour not found' });
        }

        // Calculate total price
        const tourPrice = parseFloat(tourCheck.rows[0].price);
        const totalPrice = tourPrice * number_of_people;

        // Create booking
        const result = await pool.query(
            `INSERT INTO bookings (
        tour_id, customer_name, customer_email, customer_phone,
        number_of_people, start_date, total_price, special_requests, status
      ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, 'pending')
      RETURNING *`,
            [tour_id, customer_name, customer_email, customer_phone,
                number_of_people, start_date, totalPrice, special_requests]
        );

        res.status(201).json({
            success: true,
            message: 'Booking created successfully',
            booking: result.rows[0]
        });
    } catch (error) {
        console.error('Create booking error:', error);
        res.status(500).json({ error: error.message });
    }
};

// Lấy danh sách bookings (admin)
export const getBookings = async (req, res) => {
    try {
        const { limit = 10, page = 1, status } = req.query;
        const offset = (page - 1) * limit;

        let query = `
      SELECT b.*, t.title as tour_title, t.slug as tour_slug
      FROM bookings b
      LEFT JOIN tours t ON b.tour_id = t.id
    `;
        let params = [];
        let paramIndex = 1;

        if (status) {
            query += ` WHERE b.status = $${paramIndex}`;
            params.push(status);
            paramIndex++;
        }

        query += ` ORDER BY b.created_at DESC LIMIT $${paramIndex} OFFSET $${paramIndex + 1}`;
        params.push(limit, offset);

        const { rows } = await pool.query(query, params);

        // Get total count
        let countQuery = 'SELECT COUNT(*) FROM bookings';
        let countParams = [];
        if (status) {
            countQuery += ' WHERE status = $1';
            countParams.push(status);
        }
        const { rows: countRows } = await pool.query(countQuery, countParams);

        res.json({
            bookings: rows,
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

// Lấy booking theo ID
export const getBookingById = async (req, res) => {
    try {
        const { id } = req.params;
        const { rows } = await pool.query(
            `SELECT b.*, t.title as tour_title, t.slug as tour_slug
       FROM bookings b
       LEFT JOIN tours t ON b.tour_id = t.id
       WHERE b.id = $1`,
            [id]
        );

        if (rows.length === 0) {
            return res.status(404).json({ error: 'Booking not found' });
        }

        res.json(rows[0]);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Cập nhật trạng thái booking (admin)
export const updateBookingStatus = async (req, res) => {
    try {
        const { id } = req.params;
        const { status } = req.body;

        const validStatuses = ['pending', 'confirmed', 'cancelled', 'completed'];
        if (!validStatuses.includes(status)) {
            return res.status(400).json({ error: 'Invalid status' });
        }

        const result = await pool.query(
            'UPDATE bookings SET status = $1, updated_at = CURRENT_TIMESTAMP WHERE id = $2 RETURNING *',
            [status, id]
        );

        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Booking not found' });
        }

        res.json({
            success: true,
            message: `Booking status updated to ${status}`,
            booking: result.rows[0]
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Lấy bookings theo email (cho khách hàng tra cứu)
export const getBookingsByEmail = async (req, res) => {
    try {
        const { email } = req.params;
        const { rows } = await pool.query(
            `SELECT b.*, t.title as tour_title, t.slug as tour_slug
       FROM bookings b
       LEFT JOIN tours t ON b.tour_id = t.id
       WHERE b.customer_email = $1
       ORDER BY b.created_at DESC`,
            [email]
        );

        res.json({
            count: rows.length,
            bookings: rows
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};