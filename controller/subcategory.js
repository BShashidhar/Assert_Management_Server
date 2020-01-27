const SubCategory = require('../model/subcategory');

function addSubCategory(req, res) {
    SubCategory.create({
        name: req.body.subcategory_name,
        key: req.body.key,
        category_id: req.body.category_id
    }).then(() => {
        getAllSubCategory(req, res)
    }).catch(err => {
        res.status(500).json({ result: err })
    })
}

function getAllSubCategory(req, res) {
    SubCategory.findAll({
        where: { delete_flag: false }
    }).then(result => {
        res.status(200).json({ result: result })
    }).catch(err => {
        res.status(500).json({ result: err })
    })
}

function updateSubCategory(req, res) {
    SubCategory.update({
        name: req.body.subcategory_name,
        key: req.body.key,
        category_id: req.body.category_id
    }, { where: { id: req.body.subcategory_id } }
    ).then(() => {
        getAllSubCategory(req, res)
    }).catch(err => {
        res.status(500).json({ result: err })
    })
}

function deleteSubCategory(req, res) {
    SubCategory.update({
        delete_flag: true
    }, {
        where: { id: req.body.subcategory_id }
    }).then(result => {
        getAllSubCategory(req, res)
    }).catch(err => {
        res.status(500).json({ result: err })
    })
}

module.exports = {
    addSubCategory: addSubCategory,
    getAllSubCategory: getAllSubCategory,
    updateSubCategory: updateSubCategory,
    deleteSubCategory: deleteSubCategory
}