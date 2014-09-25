module.exports = (function () {
  var router = require('express').Router(),
    authController = require('../controllers/auth'),
    usersController = require('../controllers/users'),
    modelsController = require('../controllers/models');
  router.use(function (req, res, next) {
    console.log([req.method, req.url, req.body]);
    next();
  });
  router
    .route('/users')
    .post(usersController.createUser)
    .get(usersController.findUsers);
  router
    .route('/users/:user_id')
    .get(usersController.findUser)
    .put(usersController.updateUser)
    .delete(usersController.deleteUser);
  router
    .route('/models')
    .get(authController.isAuthenticated, modelsController.findModels)
    .post(authController.isAuthenticated, modelsController.createModel);
  router
    .route('/models/:model_id')
    .get(authController.isAuthenticated, modelsController.findModel)
    .put(authController.isAuthenticated, modelsController.updateModel)
    .delete(authController.isAuthenticated, modelsController.deleteModel);
  return router;
})();
