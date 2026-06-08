import express from 'express';
import {
    getBlogPosts,
    getBlogPostBySlug,
    createBlogPost,
    updateBlogPost,
    deleteBlogPost,
    getCategories
} from '../controllers/blogController.js';
import { protect, adminOnly } from '../middleware/authMiddleware.js';

const router = express.Router();

// Public routes
router.get('/', getBlogPosts);
router.get('/categories', getCategories);
router.get('/:slug', getBlogPostBySlug);

// Admin only routes
router.post('/', protect, adminOnly, createBlogPost);
router.put('/:id', protect, adminOnly, updateBlogPost);
router.delete('/:id', protect, adminOnly, deleteBlogPost);

export default router;