let jwt = require('jsonwebtoken'),
    user = require('../models/user')

require('dotenv').config()

module.exports = {
  verify: function(req,res, next) {
    jwt.verify(req.headers.token, process.env.SECRET_KEY, function (err, decoded) {
        if(decoded) {
          user.findOne({username: decoded.username}, function(err, result) {
            if(err || result == null) {
              res.send('failed to connect')
            } else {
              next()
            }
          })
          // res.send(decoded)
        } else {
          res.send(err);
        }
      })
  }
};