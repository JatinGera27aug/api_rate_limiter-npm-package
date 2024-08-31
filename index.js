const rateLimit = require('express-rate-limit');

function createRateLimiter(options) {
    const { minutes = 15, maxRequests = 100 } = options;

    return rateLimit({
        windowMs: minutes * 60 * 1000, // Convert minutes to milliseconds
        max: maxRequests, // Limit each IP to maxRequests per windowMs
        message: options.message || "Too many requests, please try again later."
    });
}

module.exports = createRateLimiter;
