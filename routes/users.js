var express = require('express');
var validator = require('validator');
var gravatar = require('../core/server/utils/gravatar');

var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/avatar/:email', function(req, res, next) {
  var email = req.params.email;

  if (validator.isEmail(email)) {
    gravatar.lookup(email).then(function(avatar) {
      res.json({
        avatar: avatar
      });
    });
  } else {
    res.status(400).send('Bad Request');
  }
});


module.exports = router;
