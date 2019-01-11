const express = require('express');
const passport = require('passport');
const cookieSession = require('cookie-session');
const app = express();
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');
const { database, cookie } = require('./config/keys');

// import models
require('./models/User');
require('./services/passport');

mongoose.connect(database.host);

app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days expiration
        keys: [cookie.key]
    })
);

app.use(passport.initialize());
app.use(passport.session());

// Heroku will override this value when deploying
const PORT = process.env.PORT || 5000;

authRoutes(app);
app.listen(PORT);