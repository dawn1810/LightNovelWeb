import winston from 'winston';

const logger = winston.createLogger({
  level: 'info', // Set the minimum log level
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.json() // Use JSON format for logs
  ),
  transports: [
    new winston.transports.Console({
      format: winston.format.simple(), // Use simple format for console output
    }),
    // Add File transport for logging to a file (optional)
    // new winston.transports.File({ filename: 'error.log', level: 'error' }),
    // new winston.transports.File({ filename: 'combined.log' }),
  ],
});

export { logger };