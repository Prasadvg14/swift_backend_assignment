"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const winston_1 = require("winston");
const { combine, timestamp, printf, colorize } = winston_1.format;
const logFormat = printf(({ level, message, timestamp }) => {
    return `${timestamp} ${level}: ${message}`;
});
const logger = (0, winston_1.createLogger)({
    level: 'info',
    format: combine(colorize(), timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }), logFormat),
    transports: [
        new winston_1.transports.Console(),
        new winston_1.transports.File({ filename: 'logs/server.log' }),
    ],
});
exports.default = logger;
