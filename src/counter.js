const logger = require('./logger');

let count = 0;

function read() {
  logger.info(`[COUNTER] read ${count}`);
  return count;
}

function increase() {
  count += 1;
  logger.info(`[COUNTER] increase ${count}`);
  return count;
}

function reset() {
  count = 0;
  logger.info(`[COUNTER] zeroed ${count}`);
  return count;
}

module.exports = { read, increase, reset };
