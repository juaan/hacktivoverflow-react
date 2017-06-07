var User = require('../models/user'),
    pwh = require('password-hash'),
    jwt = require('jsonwebtoken')

require('dotenv').config()
module.exports = {
  getUser: function(req, res) {
    User.find(function(err,results) {
      if(!err) {
        res.send(results)
      }
    })
  },
  getOneUser: function(req, res) {
    User.findOne({'_id':req.params.id}, function(err, user) {
      if(!err) {
        res.send({success:true, data:user.username })
      } else {
        res.send({success:false, msg:'user not found'});
      }
    })
  },
  login: function(req, res) {
    User.findOne({'username':req.body.username}, function(err,user) {
      if(err || user == null ) {
        res.send({success:false, msg:'username not found'})
      } else {
        if(pwh.verify(req.body.password,user.password)) {
          let newToken = jwt.sign({username: user.username}, process.env.SECRET_KEY)
          res.send({success: true, msg:'login success', token: newToken, username: user.username})
        } else {
          res.send({success: false, msg:'Wrong Password'})
        }
      }
    })
  },
  postUser: function(req, res) {
    let newUser = new User({
      email: req.body.email,
      username: req.body.username,
      password: pwh.generate(req.body.password)
    })

    newUser.save(function(err,user) {
      if(!err) {
        let newToken = jwt.sign({username: user.username}, process.env.SECRET_KEY)
        res.send({success: true, msg:'create user success', token: newToken, id: user._id})
      } else {
        res.send({success: false, msg:err})
      }
    })
  },
  logout: function(req, res) {
    res.send('logout sukses')
  }
};
