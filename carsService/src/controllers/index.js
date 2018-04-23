const jsonData = require('../../data/MOCK_DATA.json');

const controller = (server, logger) => {
    server.get('/', (req, res) => {
        logger.info('requesting all cars');
        res.json(jsonData);
    });
};

module.exports = controller;
