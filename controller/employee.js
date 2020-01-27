const Employee = require('../model/employee');

function addEmployee(req, res) {
    var { employee_id, employee_name, username, password, department, designation } = req.body
    Employee.findOne({
        where: { emp_id: employee_id }
    }).then(result => {
        if (result && result.id) {
            Employee.update({
                emp_id: employee_id,
                name: employee_name,
                username: username,
                password: password,
                department_id: department,
                designation_id: designation,
                delete_flag: false
            },
                { where: { id: result.id } }
            ).then((result) => {
                getAllEmployee(req, res)
            }).catch(err => {
                res.status(500).json({ result: err })
            })
        }
        else {
            Employee.create({
                emp_id: employee_id,
                name: employee_name,
                username: username,
                password: password,
                department_id: department,
                designation_id: designation
            }).then(() => {
                getAllEmployee(req, res)
            }).catch(err => {
                res.status(500).json({ result: err })
            })
        }
    }).catch(err => {
        res.status(500).json({ result: err })
    })
}

function getAllEmployee(req, res) {
    Employee.findAll({
        where: { delete_flag: false }
    }).then(result => {
        res.status(200).json({ result: result })
    }).catch(err => {
        res.status(500).json({ result: err })
    })
}

function updateEmployee(req, res) {
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
    ).then(() => {
        getAllEmployee(req, res)
    }).catch(err => {
        res.status(500).json({ result: err })
    })
}

function deleteEmployee(req, res) {
    Employee.update({
        delete_flag: true
    }, {
        where: { id: req.body.id }
    }).then(() => {
        getAllEmployee(req, res)
    }).catch(err => {
        res.status(500).json({ result: err })
    })
}


module.exports = {
    addEmployee: addEmployee,
    getAllEmployee: getAllEmployee,
    updateEmployee: updateEmployee,
    deleteEmployee: deleteEmployee
}