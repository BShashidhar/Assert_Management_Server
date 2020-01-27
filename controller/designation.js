const Designation = require('../model/designation');

function addDesignation(req, res) {
    Designation.create({
        name: req.body.designation_name
    }).then(() => {
        getAllDesignation(req, res)
    }).catch(err => {
        res.status(500).json({ result: err })
    })
}

function getAllDesignation(req, res) {
    Designation.findAll({
        where: { delete_flag: false }
    }).then(result => {
        res.status(200).json({ result: result })
    }).catch(err => {
        res.status(500).json({ result: err })
    })
}

function updateDesignation(req, res) {
    Designation.update(
        { name: req.body.designation_name },
        { where: { id: req.body.designation_id } }
    ).then(() => {
        getAllDesignation(req, res)
    }).catch(err => {
        res.status(500).json({ result: err })
    })
}

function deleteDesignation(req, res) {
    Designation.update({
        delete_flag: true
    }, {
        where: { id: req.body.designation_id }
    }).then(() => {
        getAllDesignation(req, res)
    }).catch(err => {
        res.status(500).json({ result: err })
    })
}

module.exports = {
    addDesignation: addDesignation,
    getAllDesignation: getAllDesignation,
    updateDesignation: updateDesignation,
    deleteDesignation: deleteDesignation
}