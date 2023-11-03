const Router = require('express').Router;
const controller = require('../controllers/controller');
const router = new Router();

router.get('/login', controller.login);

module.exports = router;