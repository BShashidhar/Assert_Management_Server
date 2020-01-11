const Department = require('../model/department');

module.exports = {
    addDepartment: (req, res) => {
        Department.create({
            name: req.body.department_name
        }).then(row => {
            Department.findAll().then(data => {
                res.status(200).json({ result: data })
            })
        }).catch(err => {
            res.status(500).json({ result: err })
        })
    },

    getAllDepartment: (req, res) => {
        Department.findAll()
            .then(result => {
                res.status(200).json({ result: result })
            })
            .catch(err => {
                res.status(500).json({ result: err })
            })
    },

    updateDepartment: (req, res) => {
        Department.update(
            { name: req.body.department_name },
            { where: { id: req.body.department_id } }
        ).then(count => { return Department.findAll() }).then(result => {
            res.status(200).json({ result: result })
        }).catch(err => {
            res.status(500).json({ result: err })
        })
    },

    deleteDepartment: (req, res) => {
        Department.destroy({
            where: { id: req.body.department_id }
        }).then(result => {
            Department.findAll().then(data => { res.status(200).json({ result: data }) })
        }).catch(err => {
            res.status(500).json({ result: err })
        })
    }
}