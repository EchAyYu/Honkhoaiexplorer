import express from 'express';
import { getTours, getTourBySlug } from '../controllers/tourController.js';

const router = express.Router();

router.get('/', getTours);
router.get('/:slug', getTourBySlug);

export default router;