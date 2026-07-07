const passport = require('passport');
const OAuth2Strategy = require('passport-auth0').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

const User = mongoose.model('User');

const callbackURL = process.env.AUTH0_CALLBACK_URL || 'http://localhost:4000/auth/google/callback';
const auth0ClientID = keys.auth0ClientID || keys.googleClientID;
const auth0ClientSecret = keys.auth0ClientSecret || keys.googleClientSecret;

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id).then(user => {
        done(null, user);
    });
});

passport.use(
    'auth0',
    new OAuth2Strategy(
        {
            callbackURL: 'http://localhost:4000/auth/google/callback',
            clientID: keys.auth0ClientID || keys.googleClientID,
            clientSecret: keys.auth0ClientSecret || keys.googleClientSecret,
            domain: keys.oAuthDomain || keys.googleDomain,
            proxy: true
        },
        async (accessToken, refreshToken, extraParams, profile, done) => {
            try {
                const existingUser = await User.findOne({ auth0Id: profile.id });
                if (existingUser) {
                    return done(null, existingUser);
                }
                const user = await new User({
                    auth0Id: profile.id,
                    displayName: profile.displayName
                }).save();
                done(null, user);
            } catch (err) {
                done(err, null);
            }
        }
    )
);
