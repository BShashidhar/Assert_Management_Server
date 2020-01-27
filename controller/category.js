const Category = require('../model/category');

function addCategory(req, res) {
    Category.create({
        name: req.body.category_name
    }).then(() => {
        getAllCategory(req, res)
    }).catch(err => {
        res.status(500).json({ result: err })
    })
}

function getAllCategory(req, res) {
    Category.findAll(
        { delete_flag: false }
    ).then(result => {
        res.status(200).json({ result: result })
    }).catch(err => {
        res.status(500).json({ result: err })
    })
}

function updateCategory(req, res) {
    Category.update(
        { name: req.body.category_name },
        { where: { id: req.body.category_id } }
    ).then(() => {
        getAllCategory(req, res)
    }).catch(err => {
        res.status(500).json({ result: err })
    })
}

function deleteCategory(req, res) {
    Category.update({
        delete_flag: true
    }, {
        where: { id: req.body.category_id }
    }).then(() => {
        getAllCategory(req, res)
    }).catch(err => {
        res.status(500).json({ result: err })
    })
}

module.exports = {
    addCategory: addCategory,
    getAllCategory: getAllCategory,
    updateCategory: updateCategory,
    deleteCategory: deleteCategory
}