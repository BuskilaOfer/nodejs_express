"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var serverHealthCheck = function (req, res, next) {
    return res.status(200).json({
        message: 'pong'
    });
};
exports.default = { serverHealthCheck: serverHealthCheck };
