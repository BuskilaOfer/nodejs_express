import { NextFunction, Request, Response } from 'express';

type StockInfo = { time: number; value: number; yieldSpread: number; change: number; volume: number };

let stocksMap: Map<number, StockInfo[]> = new Map<number, StockInfo[]>();

const addStockPrice = (req: Request, res: Response) => {
    try {
        let responseMessage: string = '';
        let stockId: number = Number(req.params.id);
        let newStockInfo = {
            time: Number(req.query.time),
            value: Number(req.query.value),
            yieldSpread: Number(req.query.yieldSpread),
            change: Number(req.query.change),
            volume: Number(req.query.volume)
        };

        // Check if stock exist
        if (!stocksMap.has(stockId)) {
            responseMessage = responseMessage.concat('New Stock! \n');
            stocksMap.set(stockId, []);
        }
        //Add new stock info
        let singelStockInfo = stocksMap.get(stockId);

        if (singelStockInfo) { // if it return true  "singelStockInfo" is NOT undefined
            let stockInfoArr: StockInfo[] = singelStockInfo; // "! - becuse we sure that the type of map value is :  StockInfo[]"
            stockInfoArr.push(newStockInfo);
            responseMessage = responseMessage.concat('Successfully add new stock info \n');
            return res.status(200).json({
                message: responseMessage
            });
        }
        return res.status(200).json({
            message: 'Error!'
        });

    } catch (exception_var) {
        return res.status(503).json({
            message: 'Error!'
        });
    }
};

const getBestStock = (req: Request, res: Response) => {

};

const getStockPriceHistory = (req: Request, res: Response) => {
    try {
        let stockId: number = Number(req.params.id);

        // Check if stock exist
        if (stocksMap.has(stockId)) {
            let stockInfoArr: StockInfo[] = stocksMap.get(stockId)!; // "!"" - becuse we sure that the type of map value is :  StockInfo[]
            return res.status(200).json({
                message: stockInfoArr
            });
        } else {
            return res.status(200).json({
                message: 'Cent find stock by id ' + stockId
            });
        }
    } catch (exception_var) {
        return res.status(200).json({
            message: 'Error!'
        });
    }
};

export default {
    addStockPrice,
    getStockPriceHistory,
    getBestStock
};
