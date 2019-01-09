require('./services/passport');
const express = require('express');
const app = express();
const authRoutes = require('./routes/authRoutes');

authRoutes(app);

// Heroku will override this value when deploying
const PORT = process.env.PORT || 5000;

app.listen(PORT);