const server = require('../server');
exports.handler = require('serverless-http')(server);