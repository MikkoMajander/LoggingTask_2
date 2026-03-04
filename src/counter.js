/**
 * @file Simple in-memory counter module.
 * Provides functions to read, increase, and reset a numeric counter.
 */

const logger = require('./logger');

let count = 0;

/**
 * Reads the current counter value.
 *
 * @returns {number} The current counter value.
 */
function read() {
  logger.info(`[COUNTER] read ${count}`);
  return count;
}

/**
 * Increases the counter by 1.
 *
 * @returns {number} The updated counter value.
 */
function increase() {
  count += 1;
  logger.info(`[COUNTER] increase ${count}`);
  return count;
}

/**
 * Resets the counter to zero.
 *
 * @returns {number} The reset counter value (0).
 */
function reset() {
  count = 0;
  logger.info(`[COUNTER] zeroed ${count}`);
  return count;
}

module.exports = { read, increase, reset };

