class indexController {
    async index(req, res) {
        res.status(200).json('Main Page');
    }
}

module.exports = new indexController();