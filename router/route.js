const Router = require('express').Router;
const controller = require('../controllers/controller');
const router = new Router();

router.get('/test', controller.test);
router.get('/server-status', controller.serverStatus);
router.get('/disk-status', controller.diskStatus);
router.get('/add-user', controller.addUser);
router.get('/?', controller.help);

router.post('/create-db', controller.createDB)
module.exports = router;