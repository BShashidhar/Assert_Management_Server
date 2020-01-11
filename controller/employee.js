const Employee = require('../model/employee');

module.exports = {

    addEmployee: (req, res) => {
        var { employee_id, employee_name, username, password, department, designation } = req.body
        // if (username == "") username = null;
        // if (username == "") pa = null;
        Employee.create({
            emp_id: employee_id,
            name: employee_name,
            username: username,
            password: password,
            department_id: department,
            designation_id: designation
        }).then(row => {
            Employee.findAll().then(data => {
                res.status(200).json({ result: data })
            })
        }).catch(err => {
            res.status(500).json({ result: err })
        })
    },

    getAllEmployee: (req, res) => {
        Employee.findAll()
            .then(result => {
                res.status(200).json({ result: result })
            })
            .catch(err => {
                res.status(500).json({ result: err })
            })
    },

    updateEmployee: (req, res) => {
        const { id, employee_id, employee_name, username, password, department, designation } = req.body
        Employee.update({
            emp_id: employee_id,
            name: employee_name,
            username: username,
            password: password,
            department_id: department,
            designation_id: designation
        },
            { where: { id: id } }
        ).then(count => { return Employee.findAll() }).then(result => {
            res.status(200).json({ result: result })
        }).catch(err => {
            res.status(500).json({ result: err })
        })
    },

    deleteEmployee: (req, res) => {
        Employee.destroy({
            where: { id: req.body.id }
        }).then(result => {
            Employee.findAll().then(data => { res.status(200).json({ result: data }) })
        }).catch(err => {
            res.status(500).json({ result: err })
        })
    }
}