const Department = require('../model/department');


function addDepartment(req, res) {
    Department.create({
        name: req.body.department_name
    }).then(() => {
        getAllDepartment(req, res)
    }).catch(err => {
        res.status(500).json({ result: err })
    })
}

function getAllDepartment(req, res) {
    Department.findAll({
        where: { delete_flag: false }
    }).then(result => {
        res.status(200).json({ result: result })
    }).catch(err => {
        res.status(500).json({ result: err })
    })
}

function updateDepartment(req, res) {
    Department.update(
        { name: req.body.department_name },
        { where: { id: req.body.department_id } }
    ).then(() => {
        getAllDepartment(req, res)
    }).catch(err => {
        res.status(500).json({ result: err })
    })
}

function deleteDepartment(req, res) {
    Department.update({
        delete_flag: true
    }, {
        where: { id: req.body.department_id }
    }
    ).then(() => {
        getAllDepartment(req, res)
    }).catch(err => {
        res.status(500).json({ result: err })
    })
}

module.exports = {
    addDepartment: addDepartment,
    getAllDepartment: getAllDepartment,
    updateDepartment: updateDepartment,
    deleteDepartment: deleteDepartment
}