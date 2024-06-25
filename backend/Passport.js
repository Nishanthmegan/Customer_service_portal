const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const User = require('../models/User');
const keys = require('../config/keys');

passport.use(new GoogleStrategy({
  clientID: keys.googleClientID,
  clientSecret: keys.googleClientSecret,
  callbackURL: '/auth/google/callback'
}, (accessToken, refreshToken, profile, done) => {
  // Check if user already exists in our DB
  User.findOne({ googleId: profile.id }).then(existingUser => {
    if (existingUser) {
      // User exists
      done(null, existingUser);
    } else {
      // Create new user
      new User({
        googleId: profile.id,
        name: profile.displayName,
        email: profile.emails[0].value
      }).save().then(user => done(null, user));
    }
  });
}));

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    done(null, user);
  });
});
