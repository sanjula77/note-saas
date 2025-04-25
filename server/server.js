require('./otel'); // Initialize tracing (must come first)

// Imports
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const swaggerDocs = require('./swagger'); // 🆕 Add this
const prometheusMiddleware = require('express-prometheus-middleware'); // 🆕 Add Prometheus middleware

// Init
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: "*" }));

// Add Prometheus metrics endpoint
app.use(
  prometheusMiddleware({
    metricsPath: '/metrics', // Expose metrics at /metrics
    collectDefaultMetrics: true,
    requestDurationBuckets: [0.1, 0.5, 1, 1.5], // Buckets for request duration
  })
);

// Routes
const routes = require("./routes/routes");
app.use(routes);

// Swagger Docs
swaggerDocs(app); // 🆕 Mount Swagger at /api-docs

// Connect to DB
mongoose
  .connect(process.env.dbURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(process.env.PORT || 3000, '0.0.0.0', () => {
      console.log("Connected to MongoDB");
      console.log("Server running on http://localhost:3000");
    })
  )
  .catch((error) => console.log(error));
