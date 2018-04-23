const Express = require('express');
const ip = require('ip');
const compression = require('compression');
const helmet = require('helmet');
const minify = require('express-minify');
const path = require('path');
const cors = require('cors');

const logger = require('./libs/logger');

const server = new Express();

// Set prod mode
if (server.settings.env === 'production') {
    server.prod = true;
    server.appName = process.env.APP_NAME;
}

// server.set('trust proxy', true);

const corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200,
};

server.use(cors());
server.use(compression()); // Better performance
server.use(minify());
server.use(helmet()); // Better security

server.listen(8080, () => {
    logger.info(`Started server: http://${ip.address()}:8080`);
});

require('./controllers')(server, logger);

module.exports = server;
