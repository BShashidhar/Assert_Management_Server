const Division = require('../model/division');

function addDivision(req, res) {
    Division.create({
        name: req.body.division_name
    }).then(() => {
        getAllDivision(req, res)
    }).catch(err => {
        res.status(500).json({ result: err })
    })
}

function getAllDivision(req, res) {
    Division.findAll({
        where: { delete_flag: false }
    }).then(result => {
        res.status(200).json({ result: result })
    }).catch(err => {
        res.status(500).json({ result: err })
    })
}

function updateDivision(req, res) {
    Division.update(
        { name: req.body.division_name },
        { where: { id: req.body.division_id } }
    ).then(() => {
        getAllDivision(req, res)
    }).catch(err => {
        res.status(500).json({ result: err })
    })
}

function deleteDivision(req, res) {
    Division.update({
        delete_flag: true
    }, {
        where: { id: req.body.division_id }
    }).then(() => {
        getAllDivision(req, res)
    }).catch(err => {
        res.status(500).json({ result: err })
    })
}

module.exports = {
    addDivision: addDivision,
    getAllDivision: getAllDivision,
    updateDivision: updateDivision,
    deleteDivision: deleteDivision
}