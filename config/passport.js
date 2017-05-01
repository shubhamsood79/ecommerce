Skip to content
This repository
Search
Pull requests
Issues
Gist
 @shubhamsood79
 Sign out
 Watch 0
  Star 0
  Fork 0 shubhamsood79/ecommerce
 Code  Issues 0  Pull requests 0  Projects 0  Wiki  Pulse  Graphs  Settings
Browse files
Delete passport.js
 master
1 parent 7837d7a commit 6999f56eeb6b82eae5d370cbc2d7fbb2f095e4a8 @shubhamsood79 shubhamsood79 committed on GitHub 2 days ago
Unified Split
Showing  1 changed file  with 0 additions and 43 deletions.
View  
43  config/passport.js
@@ -1,43 +0,0 @@
 -var passport = require('passport');
 -var LocalStrategy = require('passport-local').Strategy;
 -var User = require('../models/user');
 -
 -// serialize and deserialize
 -passport.serializeUser(function(user, done) {
 -  done(null, user._id);
 -});
 -
 -passport.deserializeUser(function(id, done) {
 -  User.findById(id, function(err, user) {
 -    done(err, user);
 -  });
 -});
 -
 -
 -//Middleware
 -passport.use('local-login', new LocalStrategy({
 -  usernameField: 'email',
 -  passwordField: 'password',
 -  passReqToCallback: true
 -}, function(req, email, password, done) {
 -  User.findOne({ email: email}, function(err, user) {
 -    if (err) return done(err);
 -
 -    if (!user) {
 -      return done(null, false, req.flash('loginMessage', 'No user has been found'));
 -    }
 -
 -    if (!user.comparePassword(password)) {
 -      return done(null, false, req.flash('loginMessage', 'Oops! Wrong Password pal'));
 -    }
 -    return done(null, user);
 -  });
 -}));
 -
 -//custom function to validate
 -exports.isAuthenticated = function(req, res, next) {
 -  if (req.isAuthenticated()) {
 -    return next();
 -  }
 -  res.redirect('/login');
 -}
 Lock conversation
0 comments on commit 6999f56
@shubhamsood79
  
            
 
Write  Preview

Leave a comment
Attach files by dragging & dropping,  Choose Files selecting them, or pasting from the clipboard.
 Styling with Markdown is supported
Comment on this commit
   Subscribe  You’re not receiving notifications from this thread.
Contact GitHub API Training Shop Blog About
© 2017 GitHub, Inc. Terms Privacy Security Status Help
