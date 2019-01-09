const passport = require('passport');
const credentials = require('../config/keys');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.use(
    new GoogleStrategy({
        clientID: credentials.google.id,
        clientSecret: credentials.google.secret,
        callbackURL: '/auth/google/callback'
    }, (accessToken, refreshToken, profile, done) => {
        console.log("Access token: " + accessToken);
        console.log("Refresh token: " + refreshToken);
        console.log("profile: " + profile.displayName);
    })
);