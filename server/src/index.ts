import app from './app';
import { config } from './config';
import logger from './middleware/logger';

const server = app.listen(parseInt(config.port), () => {
    logger.log('info', `Server is running on Port: ${config.port}, env:${config.node_env}`);
});

process.on('SIGTERM', () => {
    logger.info('SIGTERM signal received.');
    logger.info('Closing http server.');
    server.close((err) => {
        logger.info('Http server closed.');
        process.exit(err ? 1 : 0);
    });
});
