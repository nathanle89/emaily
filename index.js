// import models
require('./models/User');

require('./services/passport');
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');
const { database } = require('./config/keys');

authRoutes(app);

mongoose.connect(database.host);

// Heroku will override this value when deploying
const PORT = process.env.PORT || 5000;

app.listen(PORT);