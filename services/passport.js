const passport = require('passport');
const credentials = require('../config/keys');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const userService = require('../services/userService');

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser( async (id, done) => {
   const user = await userService.findUserById(id);
   if(user) {
       done(null, user);
   }
});

passport.use(
    new GoogleStrategy({
        clientID: credentials.google.id,
        clientSecret: credentials.google.secret,
        callbackURL: '/auth/google/callback',
        proxy: true
    }, async (accessToken, refreshToken, profile, done) => {
        const user = await userService.findOrCreateByGoogleAuth(profile);
        done(null, user);
    })
);