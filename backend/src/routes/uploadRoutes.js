import express from 'express';
import {
    uploadSingleImage,
    uploadMultipleImages,
    handleUpload,
    handleMultipleUpload,
    deleteImage
} from '../controllers/uploadController.js';
import { protect, adminOnly } from '../middleware/authMiddleware.js';

const router = express.Router();

// Admin only routes
router.post('/single', protect, adminOnly, uploadSingleImage, handleUpload);
router.post('/multiple', protect, adminOnly, uploadMultipleImages, handleMultipleUpload);
router.delete('/delete', protect, adminOnly, deleteImage);

export default router;