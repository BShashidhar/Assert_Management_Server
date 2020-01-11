const router = require('express').Router();
const { getAllDepartment, addDepartment, updateDepartment, deleteDepartment } = require('../../controller/department')

router.get('/getAll', getAllDepartment);

router.post('/add', addDepartment);

router.post('/update', updateDepartment);

router.post('/delete', deleteDepartment);

module.exports = router;