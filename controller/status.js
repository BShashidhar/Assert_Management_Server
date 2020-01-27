const Status = require('../model/status');

function addStatus(req, res) {
    Status.create({
        name: req.body.status_name
    }).then(() => {
        getAllStatus(req, res)
    }).catch(err => {
        res.status(500).json({ result: err })
    })
}

function getAllStatus(req, res) {
    Status.findAll({
        where: { delete_flag: false }
    }).then(result => {
        res.status(200).json({ result: result })
    }).catch(err => {
        res.status(500).json({ result: err })
    })
}

function updateStatus(req, res) {
    Status.update(
        { name: req.body.status_name },
        { where: { id: req.body.status_id } }
    ).then(() => {
        getAllStatus(req, res)
    }).catch(err => {
        res.status(500).json({ result: err })
    })
}

function deleteStatus(req, res) {
    Status.update({
        delete_flag: true
    }, {
        where: { id: req.body.status_id }
    }).then(result => {
        getAllStatus(req, res)
    }).catch(err => {
        res.status(500).json({ result: err })
    })
}

module.exports = {
    addStatus: addStatus,
    getAllStatus: getAllStatus,
    updateStatus: updateStatus,
    deleteStatus: deleteStatus
}