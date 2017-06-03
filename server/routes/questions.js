let routes = require('express').Router(),
    controlQ = require('../controllers/questionController'),
    controlA = require('../controllers/answerController'),
    auth = require('../helpers/authHelp')

//get all
routes.get('/',controlQ.getQuestion)

//get one
routes.get('/:id',controlQ.getOneQuestion)

//post new question
routes.post('/',auth.verify,controlQ.postQuestion)

//delete question
routes.delete('/:id',auth.verify,controlQ.deleteQuestion)

//post new answer
routes.post('/answers/:id',auth.verify,controlA.postAnswer)

//upvote
routes.put('/answers/upvotes/:id', auth.verify,controlA.upvoteAnswer)
routes.put('/upvotes/:id', auth.verify,controlQ.upvoteQuestion)

//downvote
routes.put('/answers/downvotes/:id',auth.verify, controlA.downvoteAnswer)
routes.put('/downvotes/:id',auth.verify, controlQ.downvoteQuestion)

//edit
routes.put('/:id',auth.verify,controlQ.editQuestion)


module.exports = routes;