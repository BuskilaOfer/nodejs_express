import http from 'http';
import express from 'express';
import bodyParser from 'body-parser';
import config from './config/config';
import morgan from 'morgan';
import sampleRoutes from './routes/sample';

const router = express();
const NAMESPACE = 'Server';

// Loging  the api requst using  middleware
    //combined = Standard Apache combined log output.
    //:remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] ":referrer" ":user-agent"
router.use(morgan('combined'));


// parse the requst  (parsing the URL-encoded data with the querystring library (when false) or the qs library )
router.use(bodyParser.urlencoded({extended: false}))

/** Routes go here */
router.use('/api/sample', sampleRoutes);

/** Error handling */
router.use((req, res, next) => {
    const error = new Error('Not found');

    res.status(404).json({
        message: error.message
    });
});

const httpServer = http.createServer(router);

httpServer.listen(config.server.port, () => console.log( `Server is running ${config.server.hostname}:${config.server.port}`));