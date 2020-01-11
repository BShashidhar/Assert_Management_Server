const Designation = require('../model/designation');

module.exports = {
    addDesignation: (req, res) => {
        Designation.create({
            name: req.body.designation_name
        }).then(row => {
            Designation.findAll().then(data => {
                res.status(200).json({ result: data })
            })
        }).catch(err => {
            res.status(500).json({ result: err })
        })
    },

    getAllDesignation: (req, res) => {
        Designation.findAll()
            .then(result => {
                res.status(200).json({ result: result })
            })
            .catch(err => {
                res.status(500).json({ result: err })
            })
    },

    updateDesignation: (req, res) => {
        Designation.update(
            { name: req.body.designation_name },
            { where: { id: req.body.designation_id } }
        ).then(count => { return Designation.findAll() }).then(result => {
            res.status(200).json({ result: result })
        }).catch(err => {
            res.status(500).json({ result: err })
        })
    },

    deleteDesignation: (req, res) => {
        Designation.destroy({
            where: { id: req.body.designation_id }
        }).then(result => {
            Designation.findAll().then(data => { res.status(200).json({ result: data }) })
        }).catch(err => {
            res.status(500).json({ result: err })
        })
    }
}