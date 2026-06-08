import express from 'express';
import {
    getTestimonials,
    submitTestimonial,
    getAllTestimonials,
    updateTestimonialStatus,
    deleteTestimonial
} from '../controllers/testimonialController.js';
import { protect, adminOnly } from '../middleware/authMiddleware.js';

const router = express.Router();

// Public routes
router.get('/', getTestimonials);
router.post('/', submitTestimonial);

// Admin only routes
router.get('/all', protect, adminOnly, getAllTestimonials);
router.put('/:id', protect, adminOnly, updateTestimonialStatus);
router.delete('/:id', protect, adminOnly, deleteTestimonial);

export default router;