const express = require('express');
const app = express();

const noteRoutes = require('./routes/notes');
const swaggerDocs = require('./swagger');

app.use(express.json());
app.use('/api/notes', noteRoutes);

// Swagger UI
swaggerDocs(app);

module.exports = app;
