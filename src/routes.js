/**
 * @file Express router defining counter-related endpoints.
 */

const express = require('express');
const router = express.Router();
const counter = require('./counter');
const logger = require('./logger');

/**
 * GET /counter-increase
 * Increments the counter and returns the new value.
 *
 * @route GET /counter-increase
 * @returns {Object} JSON object containing the updated count.
 */
router.get('/counter-increase', (req, res) => {
  logger.info(`[ENDPOINT] GET '/counter-increase'`);
  const value = counter.increase();
  res.json({ count: value });
});

/**
 * GET /counter-read
 * Reads the current counter value.
 *
 * @route GET /counter-read
 * @returns {Object} JSON object containing the current count.
 */
router.get('/counter-read', (req, res) => {
  logger.info(`[ENDPOINT] GET '/counter-read'`);
  const value = counter.read();
  res.json({ count: value });
});

/**
 * GET /counter-reset
 * Resets the counter to zero.
 *
 * @route GET /counter-reset
 * @returns {Object} JSON object containing the reset count (always 0).
 */
router.get('/counter-reset', (req, res) => {
  logger.info(`[ENDPOINT] GET '/counter-reset'`);
  const value = counter.reset();
  res.json({ count: value });
});

module.exports = router;

