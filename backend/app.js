const express = require('express');
const passport = require('passport');
const session = require('express-session');
const mongoose = require('mongoose');
const authRoutes = require('./routes/auth');
const requestRoutes = require('./routes/requests');
require('./services/passport-setup');
require('dotenv').config();

const app = express();

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

// Middleware
app.use(express.json());
app.use(session({ secret: 'secretKey', resave: false, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

// Routes
app.use('/auth', authRoutes);
app.use('/api', requestRoutes);

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});

