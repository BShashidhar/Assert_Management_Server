const Category = require('../model/category');

module.exports = {
    addCategory: (req, res) => {
        Category.create({
            name: req.body.category_name
        }).then(row => {
            Category.findAll().then(data => {
                res.status(200).json({ result: data })
            })
        }).catch(err => {
            res.status(500).json({ result: err })
        })
    },

    getAllCategory: (req, res) => {
        Category.findAll()
            .then(result => {
                res.status(200).json({ result: result })
            })
            .catch(err => {
                res.status(500).json({ result: err })
            })
    },

    updateCategory: (req, res) => {
        Category.update(
            { name: req.body.category_name },
            { where: { id: req.body.category_id } }
        ).then(count => { return Category.findAll() }).then(result => {
            res.status(200).json({ result: result })
        }).catch(err => {
            res.status(500).json({ result: err })
        })
    },

    deleteCategory: (req, res) => {
        Category.destroy({
            where: { id: req.body.category_id }
        }).then(result => {
            Category.findAll().then(data => { res.status(200).json({ result: data }) })
        }).catch(err => {
            res.status(500).json({ result: err })
        })
    }
}