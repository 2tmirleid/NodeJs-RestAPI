const {Router} = require('express');
const indexController = require('../controllers/indexController');
const bookRouter = require('../routes/bookRouter');
const router = new Router();


router.get('/', indexController.index)

module.exports = router;