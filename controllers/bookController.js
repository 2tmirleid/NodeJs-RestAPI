const {Books} = require('../models/models');

class bookController {
    
    async getAllBooks(req, res) {
        const allBooks = await Books.findAll({raw: true});

        res.status(200).json(allBooks);
    }

    async getBookById(req, res) {
        const {id} = req.params;
        const getBookId = await Books.findOne(
            {where: {id}}
        );

        return res.status(200).json(getBookId);
    }

    async addNewBook(req, res) {
        const {id, name, author, genre} = req.body;
        const addBook = await Books.create({id, name, author, genre});

        return res.status(200).json(addBook);        
    }

    async deleteBook(req, res) {
        const {id, name, author} = req.body;
        const delBook = await Books.destroy(
            {where: {id, name, author}}
        );

        return res.status(200).json(delBook);
    }
}

module.exports = new bookController();