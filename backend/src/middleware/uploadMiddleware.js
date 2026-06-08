import multer from 'multer';
import { CloudinaryStorage } from 'multer-storage-cloudinary';
import cloudinary from '../config/cloudinary.js';

const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: 'honkhoai/tours',
        allowed_formats: ['jpg', 'jpeg', 'png', 'webp'],
        transformation: [{ width: 1200, height: 800, crop: 'limit' }]
    }
});

export const upload = multer({ storage: storage });

// Single image upload
export const uploadSingle = upload.single('image');

// Multiple images upload
export const uploadMultiple = upload.array('images', 10);