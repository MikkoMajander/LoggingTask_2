/**
 * @file Winston logger configuration.
 * Exports a preconfigured logger instance with console and file transports.
 */

const { createLogger, transports, format } = require('winston');

/**
 * Winston logger instance.
 *
 * @type {import('winston').Logger}
 */
const logger = createLogger({
  level: 'info',
  format: format.combine(
    format.timestamp(),
    format.json()
  ),
  transports: [
    new transports.Console(),
    new transports.File({ filename: 'logs/error.log', level: 'error' }),
    new transports.File({ filename: 'logs/combined.log' })
  ]
});

module.exports = logger;

