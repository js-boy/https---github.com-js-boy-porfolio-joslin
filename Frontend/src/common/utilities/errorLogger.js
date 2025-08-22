/**
 * Logs errors to the console in development mode
 * In production, you might want to send these to an error tracking service
 * @param {string} message - Error message
 * @param {Error} error - Error object
 */
export const logError = (message, error) => {
  if (process.env.NODE_ENV !== 'production') {
    // In development, log to console
    console.error(message, error);
  } else {
    // In production, you can implement error tracking service here
    // Example: sendToErrorTrackingService(message, error);
  }
};

export default logError;
