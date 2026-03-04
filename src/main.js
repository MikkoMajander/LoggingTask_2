/**
 * @file Main application entry point.
 * Initializes the Express server, registers routes, and starts listening.
 */

const express = require('express');
const routes = require('./routes');
const logger = require('./logger');

const app = express();

logger.info('[MAIN] Starting');

/**
 * Register application routes.
 */
app.use('/', routes);

/**
 * Start the HTTP server.
 * @param {number} port - Port number the server listens on.
 */
app.listen(3000, () => {
  logger.info('[MAIN] Listening on port 3000');
});
