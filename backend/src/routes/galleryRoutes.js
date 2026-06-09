import express from 'express';
import { getGallery, addToGallery, deleteFromGallery } from '../controllers/galleryController.js';
import { protect, adminOnly } from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/', getGallery);
router.post('/', protect, adminOnly, addToGallery);
router.delete('/:id', protect, adminOnly, deleteFromGallery);

export default router;