let question = require('../models/question'),
    answ = require('../models/answer'),
    user = require('../models/user')

module.exports = {
  getQuestion: function(req, res) {
    question.find(function(err,results) {
      if(!err) {
        res.send(results)
      } else {
        res.send(err)
      }
    })
  },
  postQuestion: function(req, res){
    let newQuestion = new question({
      user: req.body.user,
      title: req.body.title,
      content: req.body.content
    })
    newQuestion.save(function(err,result) {
      if(!err) {
        res.send({success: true, msg:'insert question success', result})
      } else {
        res.send(err)
      }
    })
  },
  deleteQuestion: function(req, res) {
    question.findByIdAndRemove(req.params.id, function(err){
      if(!err) {
        res.send({success: true, msg:'Delete Sukses!'})
      } else {
        res.send(err)
      }
    })
  },
  upvoteQuestion: function(req, res) {
    question.findOne({
      '_id': req.params.id
    }, function(err, result) {
      if (!err) {
        let statusAdaDiUpVotes = result.upVotes.some(x => x == req.body.user)
        let statusAdaDiDownVotes = result.downVotes.some(x => x == req.body.user)
        if(statusAdaDiUpVotes) {
          res.send({success: false, msg:'user sudah pernah vote'})
        } else {
          if (statusAdaDiDownVotes) {
            question.update({
              '_id': req.params.id
            },{
              '$pullAll':{
                'downVotes': [req.body.user]
              }
            },function(err){
              if(!err){
                question.findOneAndUpdate({
                  '_id': req.params.id
                },{
                  '$push':{
                    'upVotes': req.body.user
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
              '_id': req.params.id
            },{
              '$push':{
                'upVotes': req.body.user
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
  downvoteQuestion: function(req, res) {
    question.findOne({
      '_id': req.params.id
    }, function(err, result) {
      if (!err) {

        let statusAdaDiUpVotes = result.upVotes.some(x => x == req.body.user)
        let statusAdaDiDownVotes = result.downVotes.some(x => x == req.body.user)
        if(statusAdaDiDownVotes) {
          res.send('user sudah pernah vote')
        } else {
          if(statusAdaDiUpVotes) {
            question.update({
              '_id': req.params.id
            },{
              '$pullAll':{
                'upVotes': [req.body.user]
              }
            },function(err){
              if(!err){
                question.findOneAndUpdate({
                  '_id': req.params.id
                },{
                  '$push':{
                    'downVotes': req.body.user
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
          }else {
            question.findOneAndUpdate({
              '_id': req.params.id
            },{
              '$push':{
                'downVotes': req.body.user
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
        res.send({success: false, msg:err})
      }
    })
  },
  getOneQuestion: function(req, res) {
    question.findOne({_id: req.params.id})
            .populate('user answers.user')
            .exec(function(err,result) {
              if(!err) {
                res.send({success:true, msg:'success' ,data:result})
              } else {
                res.send({success:false, msg:'failed to get data', data:null})
              }
            })
  },
  editQuestion: function(req, res) {
    question.findByIdAndUpdate(req.params.id,
      {
        title: req.body.title,
        content: req.body.content
      },
      function(err) {
      if(!err) {
        res.send({success:true, msg:'success'})
      } else {
        res.send({success:false, msg:err})
      }
    })
  },
  getAllQuestionByUserId: function(req, res) {
    question.find({user:req.params.iduser}, function(err, results) {
      if(!err) {
        res.send({success: true, data:results})
      } else {
        res.send({success:false, data:err})
      }

    })
  }

};
