const {Router} = require('express');
const router = new Router();
const bookController = require('../controllers/bookController');


router.get('/all', bookController.getAllBooks);
router.get('/:id', bookController.getBookById);
router.post('/add', bookController.addNewBook);
router.delete('/delete', bookController.deleteBook);

module.exports = router;