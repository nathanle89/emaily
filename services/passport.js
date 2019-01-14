const passport = require('passport');
const credentials = require('../config/keys');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const User = require('mongoose').model('users');

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser( async (id, done) => {
   const user = await User.findById(id);
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
        const existingUser = await User.findOne({ googleId: profile.id });

        if (existingUser) {
           return done(null, existingUser);
        }

        const user = await new User({ googleId: profile.id }).save();
        done(null, user);
    })
);