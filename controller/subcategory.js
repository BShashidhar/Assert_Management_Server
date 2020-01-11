const SubCategory = require('../model/subcategory');

module.exports = {
    addSubCategory: (req, res) => {
        SubCategory.create({
            name: req.body.subcategory_name,
            key: req.body.key,
            category_id: req.body.category_id
        }).then(row => {
            SubCategory.findAll().then(data => {
                res.status(200).json({ result: data })
            })
        }).catch(err => {
            res.status(500).json({ result: err })
        })
    },

    getAllSubCategory: (req, res) => {
        SubCategory.findAll()
            .then(result => {
                res.status(200).json({ result: result })
            })
            .catch(err => {
                res.status(500).json({ result: err })
            })
    },

    updateSubCategory: (req, res) => {
        SubCategory.update({
            name: req.body.subcategory_name,
            key: req.body.key,
            category_id: req.body.category_id
        },
            { where: { id: req.body.subcategory_id } }
        ).then(count => { return SubCategory.findAll() }).then(result => {
            res.status(200).json({ result: result })
        }).catch(err => {
            res.status(500).json({ result: err })
        })
    },

    deleteSubCategory: (req, res) => {
        SubCategory.destroy({
            where: { id: req.body.subcategory_id }
        }).then(result => {
            SubCategory.findAll().then(data => { res.status(200).json({ result: data }) })
        }).catch(err => {
            res.status(500).json({ result: err })
        })
    }
}