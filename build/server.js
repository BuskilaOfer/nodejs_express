"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = __importDefault(require("http"));
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
var config_1 = __importDefault(require("./config/config"));
var morgan_1 = __importDefault(require("morgan"));
var sample_1 = __importDefault(require("./routes/sample"));
var router = express_1.default();
var NAMESPACE = 'Server';
// Loging  the api requst using  middleware
//combined = Standard Apache combined log output.
//:remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] ":referrer" ":user-agent"
router.use(morgan_1.default('tiny'));
// parse the requst  (parsing the URL-encoded data with the querystring library (when false) or the qs library )
router.use(body_parser_1.default.urlencoded({ extended: false }));
/** Routes go here */
router.use('/api/sample', sample_1.default);
/** Error handling */
router.use(function (req, res, next) {
    var error = new Error('Not found');
    res.status(404).json({
        message: error.message
    });
});
var httpServer = http_1.default.createServer(router);
httpServer.listen(config_1.default.server.port, function () { return console.log("Server is running " + config_1.default.server.hostname + ":" + config_1.default.server.port); });
