# Express Custom Rate Limiter

A customizable rate limiter middleware for Express applications that allows you to define rate limits based on a configurable time window and maximum number of requests. This package helps you control the traffic to your API endpoints, prevent abuse, and improve overall server performance.

## Features

- 🕒 Set custom time windows (in minutes) for rate limiting.
- 🚦 Define maximum requests allowed per time window.
- 🛑 Custom error messages for rate-limited responses.
- 🔄 Apply rate limiting globally or to specific routes, including nested routes.

## Installation

To use this package in your Express application, you need to install it via npm.

### **Install via npm**

```bash
npm install api_limiter    


**Usage**
## Basic Usage
Here's a simple example of how to use the express-custom-rate-limiter package in an Express application.

Code: 
const express = require('express');
const createRateLimiter = require('express-custom-rate-limiter');

const app = express();

// Apply the rate limiter globally with a 5-minute window and a maximum of 10 requests
const limiter = createRateLimiter({ minutes: 5, maxRequests: 10 });
app.use(limiter);

app.get('/', (req, res) => {
  res.send('Welcome to the home page!');
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});



**Applying Rate Limiter to Specific Routes**
To apply the rate limiter to specific routes only, you can create multiple instances of the limiter and use them where needed.

Code:
const express = require('express');
const createRateLimiter = require('express-custom-rate-limiter');

const app = express();

// Create different rate limiters for different routes
const globalLimiter = createRateLimiter({ minutes: 5, maxRequests: 100 });
const productLimiter = createRateLimiter({ minutes: 2, maxRequests: 20 });

// Apply the global limiter for all requests
app.use(globalLimiter);

// Apply the product limiter to /products and its nested routes
app.use('/products', productLimiter);

app.get('/products', (req, res) => {
  res.send('All products');
});

app.get('/products/:id', (req, res) => {
  res.send(`Product details for ID: ${req.params.id}`);
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});



**Advanced Usage: Applying to Nested Routes**
If you have nested routes, you can also apply the limiter to specific children routes

Code:
const express = require('express');
const createRateLimiter = require('express-custom-rate-limiter');

const app = express();

// Rate limiter for all requests to /products routes and its nested paths
const productLimiter = createRateLimiter({ minutes: 1, maxRequests: 5 });

app.use('/products', productLimiter);

app.get('/products', (req, res) => {
  res.send('Product list');
});

app.get('/products/:id', (req, res) => {
  res.send(`Product details for ID: ${req.params.id}`);
});

app.get('/products/:id/reviews', (req, res) => {
  res.send(`Reviews for product ID: ${req.params.id}`);
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});




