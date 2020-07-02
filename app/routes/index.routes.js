const router = require('express').Router();
const userRouter = require('./users.routes');
const questionRouter = require('./question.routes');
router.use('/users', userRouter);
router.use('/questions', questionRouter);


module.exports = router;