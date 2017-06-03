let question = require('../models/question'),
    answ = require('../models/answer')

module.exports = {
  postAnswer: function(req, res) {
    question.findByIdAndUpdate(req.params.id, {
      $push: {
        answers: req.body
      }
    }, {'new': true},function(err,result) {
      if (!err) {
        res.send({success: true, msg:result})
      } else {
        res.send({success: false, msg:err});
      }
    })
  },
  upvoteAnswer: function(req, res) {
    question.findOne({
      '_id': req.params.id,
      'answers._id': req.body.answer
    },{'answers.$': 1}, function(err, result) {
      if (!err) {
        let statusAdaDiUpVotes = result.answers[0].upVotes.some(x => x == req.body.user)
        let statusAdaDiDownVotes = result.answers[0].downVotes.some(x => x == req.body.user)
        if(statusAdaDiUpVotes) {
          res.send({success: false, msg:'user sudah pernah vote'})
        } else {
          if(statusAdaDiDownVotes) {
            question.update({
              '_id': req.params.id,
              'answers._id' : req.body.answer
            },{
              '$pullAll':{
                'answers.$.downVotes': [req.body.user]
              }
            },function(err){
              if(!err){
                question.findOneAndUpdate({
                  '_id': req.params.id,
                  'answers._id' : req.body.answer
                },{
                  '$push':{
                    'answers.$.upVotes': req.body.user
                  }
                },function(err){
                  if(!err){
                    res.send({success: true, msg:'upvote berhasil!'});
                  } else {
                    res.send({success: false, msg:err});
                  }
                })
              } else {
                res.send({success: false, msg:err});
              }
            })

          } else {
            question.findOneAndUpdate({
              '_id': req.params.id,
              'answers._id' : req.body.answer
            },{
              '$push':{
                'answers.$.upVotes': req.body.user
              }
            },function(err){
              if(!err){
                res.send({success: true, msg:'upvote berhasil!'});
              } else {
                res.send({success: false, msg:err});
              }
            })
          }
        }
      } else {
        res.send({success: false, msg:err})
      }
    })
  },
  downvoteAnswer: function(req, res) {
    question.findOne({
      '_id': req.params.id,
      'answers._id': req.body.answer
    },{'answers.$': 1}, function(err, result) {
      if (!err) {

        let statusAdaDiUpVotes = result.answers[0].upVotes.some(x => x == req.body.user)
        let statusAdaDiDownVotes = result.answers[0].downVotes.some(x => x == req.body.user)

        if(statusAdaDiDownVotes) {
          res.send({success: false, msg:'user sudah pernah vote'})
        } else {
          if(statusAdaDiUpVotes) {
            question.update({
              '_id': req.params.id,
              'answers._id' : req.body.answer
            },{
              '$pullAll':{
                'answers.$.upVotes': [req.body.user]
              }
            },function(err){
              if(!err){
                question.findOneAndUpdate({
                  '_id': req.params.id,
                  'answers._id' : req.body.answer
                },{
                  '$push':{
                    'answers.$.downVotes': req.body.user
                  }
                },function(err){
                  if(!err){
                    res.send({success: true, msg:'downvote berhasil!'});
                  } else {
                    res.send({success: false, msg:err});
                  }
                })
              } else {
                res.send({success: false, msg:err});
              }
            })
          } else {
            question.findOneAndUpdate({
              '_id': req.params.id,
              'answers._id' : req.body.answer
            },{
              '$push':{
                'answers.$.downVotes': req.body.user
              }
            },function(err){
              if(!err){
                res.send({success: true, msg:'downvote berhasil!'});
              } else {
                res.send({success: false, msg:err});
              }
            })
          }

        }

      } else {
        res.send(err)
      }
    })
  },
  deleteAnswer: function(req, res) {

  }
};