import http from 'http';
import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import stockRoutes from './routes/stock';

export default function createServer() {
    const router = express();

    // Loging  the api requst using  middleware
    router.use(morgan(':method :url :status :res[content-length] - :response-time ms'));

    // parse the requst  (parsing the URL-encoded data with the querystring library (when false) or the qs library (when true)
    router.use(bodyParser.urlencoded({ extended: false }));

    /** Routes go here */
    router.use('/api/stock', stockRoutes);

    /** Error handling */
    router.use((req, res, next) => {
        const error = new Error('Not found');
        res.status(404).json({
            message: error.message
        });
    });

    const httpServer = http.createServer(router);
    return httpServer
}
