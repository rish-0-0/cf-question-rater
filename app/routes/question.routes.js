const router = require('express').Router();
const controller = require('../controllers/questions');
router.post('/rate', controller.rateQuestion);

module.exports = router;