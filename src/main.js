const express = require('express');
const routes = require('./routes');
const logger = require('./logger');

const app = express();

logger.info('[MAIN] Starting');

app.use('/', routes);

app.listen(3000, () => {
  logger.info('[MAIN] Listening on port 3000');
});
