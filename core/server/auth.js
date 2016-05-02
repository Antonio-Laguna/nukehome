var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var bcrypt = require('bcrypt');
var User = require('../models/user');

module.exports = function(app) {
  app.use(passport.initialize());
  app.use(passport.session());

  passport.use(new LocalStrategy(
      function(email, password, done) {
        User.findOne({
          where: {
            'email': email
          }
        }).then(function(user) {
          if (user == null) {
            return done(null, false, { message: 'Incorrect credentials.' })
          }

          var hashedPassword = bcrypt.hashSync(password, user.salt);

          if (user.password === hashedPassword) {
            return done(null, user)
          }

          return done(null, false, { message: 'Incorrect credentials.' })
        });
      }
  ));

  passport.serializeUser(function(user, done) {
    done(null, user.id)
  });

  passport.deserializeUser(function(id, done) {
    User.findOne({
      where: {
        'id': id
      }
    }).then(function (user) {
      if (user == null) {
        done(new Error('Wrong user id.'))
      }

      done(null, user)
    })
  })
};
