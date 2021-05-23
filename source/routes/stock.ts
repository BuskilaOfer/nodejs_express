import express from 'express';
import controller from '../controllers/controller';

const router = express.Router();

router.get('/addStockPrice', controller.addStockPrice);
router.get('/getStockPriceHistory', controller.getStockPriceHistory);

export = router;

