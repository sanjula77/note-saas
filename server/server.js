require('./otel'); // must come first

// Imports
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const swaggerDocs = require('./swagger'); // 🆕 Add this

// Init
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: "*" }));

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
    })
  )
  .catch((error) => console.log(error));
