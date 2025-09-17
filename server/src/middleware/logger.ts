import 'winston-daily-rotate-file';

import winston, { createLogger, transports } from 'winston';

import { config } from '../config';

const { combine, timestamp, json } = winston.format;

const logger = createLogger({
    level: config.node_env === 'production' ? 'info' : 'debug',
    format: combine(timestamp(), json()),
    transports: [
        new winston.transports.DailyRotateFile({
            level: 'info',
            filename: './logs/status-%DATE%.log',
            datePattern: 'YYYY-MM-DD',
            zippedArchive: true,
            maxSize: '20m',
            maxFiles: '14d',
        }),
        new winston.transports.DailyRotateFile({
            level: 'error',
            filename: './logs/error-%DATE%.log',
            datePattern: 'YYYY-MM-DD',
            zippedArchive: true,
            maxSize: '20m',
            maxFiles: '14d',
        }),
    ],
    exceptionHandlers: [
        new winston.transports.DailyRotateFile({
            level: 'error',
            filename: './logs/exceptions-%DATE%.log',
            datePattern: 'YYYY-MM-DD',
            zippedArchive: true,
            maxSize: '20m',
            maxFiles: '14d',
        }),
    ],
});

logger.add(
    new transports.Console({
        format: combine(timestamp(), json()),
    }),
);

export { logger };
