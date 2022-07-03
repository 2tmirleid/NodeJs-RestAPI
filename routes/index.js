const {Router} = require('express');
const bookRouter = require('../routes/bookRouter');
const router = new Router();

router.use('/books', bookRouter);

module.exports = router;