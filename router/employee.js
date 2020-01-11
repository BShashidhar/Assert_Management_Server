const router = require('express').Router()
const { Op } = require('sequelize')

const Employee = require('../model/employee')
const Status = require('../model/status')
const IndentDetails = require('../model/indent_details')

router.post('/login', (req, res) => {
    const { username, password } = req.body
    Employee.findOne({
        attributes: ['id', 'emp_id', 'username', 'name', 'flag', 'department_id', 'designation_id'],
        where: {
            username: username,
            password: password
        }
    }).then(result => {
        if (result) res.status(200).send(result)
        else res.status(401).send("Unauthorized")
    }).catch(err => {
        res.status(500).send(err)
    })
})


router.post('/changePassword', (req, res) => {
    var { username, currentpass, newpass } = req.body
    Employee.findOne({
        attributes: ['id'],
        where: {
            username: username,
            password: currentpass
        }
    }).then(result => {
        if (result) {
            Employee.update(
                {
                    password: newpass,
                    flag: 1
                },
                { where: { id: result.id } }
            ).then(updated => {
                res.status(200).send(result)
            }).catch(err => {
                res.status(500).send(err)
            })
        }
        else res.status(401).send("Unauthorized")
    }).catch(err => {
        res.status(500).send(err)
    })
})

router.post('/addIndent', (req, res) => {
    try {
        const { indent_no, budget_year, project_id, employee_id, material_desc,
            quantity, price, manufacturer, suggested_vendors, remarks, status_id } = req.body;

        IndentDetails.findAndCountAll({
            attributes: ["indent_no"],
            where: { indent_no: { [Op.like]: indent_no + "%" } }
        }).then(result => {
            let tempid = result.count + 1;
            let indentNo = indent_no + '/' + tempid;
            let indent = {
                indent_no: indentNo,
                budget_year: budget_year,
                project_id: project_id,
                employee_id: employee_id,
                material_desc: material_desc,
                quantity: quantity,
                price: price,
                manufacturer: manufacturer,
                suggested_vendors: suggested_vendors,
                remarks: remarks,
                status_id: status_id
            }

            IndentDetails.create(indent).then(data => {
                res.status(200).send(data);
            }).catch(err => {
                res.status(500).send(err);
            })
        }).catch(err => {
            res.status(500).send(err);
        })
    }
    catch (err) {
        res.status(500).send(err);
    }
});

router.post('/getIndentByEmployeeId', (req, res) => {
    IndentDetails.findAll({
        where: { "employee_id": req.body.employee_id }
    }).then(data => {
        res.status(200).send(data);
    }).catch(err => {
        res.status(500).send(err);
    });
});

router.post('/submitIndent', (req, res) => {
    IndentDetails.update(
        { flag: 1 },
        { where: { "id": req.body.id } }
    ).then(data => {
        res.status(200).send(data);
    }).catch(err => {
        res.status(500).send(err);
    });
});

router.post('/deleteIndent', (req, res) => {
    IndentDetails.destroy(
        { where: { "id": req.body.id } }
    ).then(data => {
        res.status(200).send(data);
    }).catch(err => {
        res.status(500).send(err);
    });
});


router.get('/getStatus', isAuthorized, (req, res) => {
    Status.findAll().then((err, result) => {
        if (err)
            res.status(500).send(err);
        else
            res.status(200).send(result);
    })
})

function isAuthorized(req, res, next) {
    var id = req.headers.authorization;
    if (id) {
        Employee.findOne({
            where: {
                id: id
            }
        }).then(result => {
            if (result) next()
            else res.status(401).send("Unauthorized")
        })
    }
    else res.status(401).send("Unauthorized")
}

module.exports = router