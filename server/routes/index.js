let routes = require('express').Router(),
    user = require('../controllers/userController')

routes.post('/login', user.login)


module.exports = routes;