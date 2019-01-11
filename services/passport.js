const passport = require('passport');
const credentials = require('../config/keys');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const User = require('mongoose').model('users');

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser( (id, done) => {
   User.findById(id).then( user => {
       if(user) {
           done(null, user);
       }
   })
});

passport.use(
    new GoogleStrategy({
        clientID: credentials.google.id,
        clientSecret: credentials.google.secret,
        callbackURL: '/auth/google/callback'
    }, (accessToken, refreshToken, profile, done) => {
        User.findOne({ googleId: profile.id })
            .then( (existingUser) => {
                if (existingUser) {
                    done(null, existingUser);
                } else {
                    new User({ googleId: profile.id })
                        .save()
                        .then(user => done(null, user));
                }
            });

    })
);