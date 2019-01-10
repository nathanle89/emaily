const passport = require('passport');
const credentials = require('../config/keys');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const User = require('mongoose').model('users');

passport.use(
    new GoogleStrategy({
        clientID: credentials.google.id,
        clientSecret: credentials.google.secret,
        callbackURL: '/auth/google/callback'
    }, (accessToken, refreshToken, profile, done) => {
        new User({ googleId: profile.id }).save();
    })
);