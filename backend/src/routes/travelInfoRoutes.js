import express from 'express';
import { getTravelInfo, updateTravelInfo } from '../controllers/travelInfoController.js';
import { protect, adminOnly } from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/', getTravelInfo);
router.put('/:id', protect, adminOnly, updateTravelInfo);

export default router;