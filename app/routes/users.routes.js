const { route } = require('./index.routes');

const router = require('express').Router();
const controller = require('../controllers/users');
router.post('/signup', controller.createUser);

module.exports = router;