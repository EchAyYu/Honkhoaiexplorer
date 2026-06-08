import express from 'express';
import {
    createBooking,
    getBookings,
    getBookingById,
    updateBookingStatus,
    getBookingsByEmail
} from '../controllers/bookingController.js';
import { protect, adminOnly } from '../middleware/authMiddleware.js';

const router = express.Router();

// Public routes
router.post('/', createBooking);
router.get('/track/:email', getBookingsByEmail);

// Protected routes (require authentication)
router.get('/', protect, adminOnly, getBookings);
router.get('/:id', protect, getBookingById);
router.put('/:id/status', protect, adminOnly, updateBookingStatus);

export default router;