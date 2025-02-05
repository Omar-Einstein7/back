const express = require('express');
const connectDB = require('../config/db');
const authRoutes = require('../routes/authRoutes');
const exampleRoutes = require('../routes/exampleRoutes');
require('dotenv').config();

const app = express();
app.use(express.json());

// Connect to MongoDB
connectDB();

// Routes
app.use('/api/auth', authRoutes);
app.use('/api', exampleRoutes); // Example routes

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

module.exports = app;