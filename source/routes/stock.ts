import express from 'express';
import controller from '../controllers/controller';

const router = express.Router();

router.get('/:id/addStockPrice', controller.addStockPrice);
router.get('/:id/getStockPriceHistory', controller.getStockPriceHistory);
router.get('/getBestStock', controller.getBestStock);

export = router;
