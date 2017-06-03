let routes = require('express').Router(),
    control = require('../controllers/userController'),
    controlQ = require('../controllers/questionController'),
    auth = require('../helpers/authHelp')

//get user
routes.get('/', control.getUser)
routes.get('/:id', control.getOneUser)
//getQuestion by id user
routes.get('/:iduser/panel',auth.verify, controlQ.getAllQuestionByUserId)
//post user
routes.post('/signup', control.postUser)
routes.post('/login', control.login)

module.exports = routes;
