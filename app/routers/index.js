module.exports = (function () {
  var router = require('express')
    .Router(),
    usersController = require('../controllers/users');
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
    .get(modelsController.findModels)
    .post(modelsController.createModel);
  router
    .route('/models/:model_id')
    .get(modelsController.findModel)
    .put(modelsController.updateModel)
    .delete(modelsController.deleteModel);
  return router;
})();
