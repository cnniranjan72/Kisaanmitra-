// In your server.js or app.js
const express = require('express');
const connectDB = require('./config/db'); // Your DB connection

const app = express();

// Connect Database
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));

// Define Routes
app.use('/api/users', require('./routes/users')); // Example existing route
app.use('/api/auth', require('./routes/auth'));   // Example existing route
app.use('/api/sustainability', require('./routes/sustainability')); // Add this line

// Make the 'uploads' folder public
app.use('/uploads', express.static('uploads'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
export default app;