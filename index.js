const express = require('express');
const passport = require('passport');
const bodyParser = require('body-parser')
const cookieSession = require('cookie-session');
const app = express();
const mongoose = require('mongoose');
const { database, cookie } = require('./config/keys');

// import models
require('./models/User');
require('./models/Survey');
require('./services/passport');

const authRoutes = require('./routes/authRoutes');
const billingRoutes = require('./routes/billingRoutes');
const surveyRoutes = require('./routes/surveyRoutes');

mongoose.connect(database.host);

app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days expiration
        keys: [cookie.key]
    })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

authRoutes(app);
billingRoutes(app);
surveyRoutes(app);

if (process.env.NODE_ENV === 'production') {
    // Express will serve up production assets
    // like out main.js file, or main.css file!
    app.use(express.static('client/build'));

    // Expire will server up the index.html file if
    // it doesn't know the routes
    const path = require('path');
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    });
}

app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.send({
        message: err.message,
    });
});

// Heroku will override this value when deploying
const PORT = process.env.PORT || 5000;
app.listen(PORT);