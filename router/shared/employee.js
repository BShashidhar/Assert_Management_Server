const router = require('express').Router();
const { getAllEmployee, addEmployee, updateEmployee, deleteEmployee } = require('../../controller/employee')

router.get('/getAll', getAllEmployee);

router.post('/add', addEmployee);

router.post('/update', updateEmployee);

router.post('/delete', deleteEmployee);

module.exports = router;