const router = require('express').Router();
const { getAllDivision, addDivision, updateDivision, deleteDivision } = require('../../controller/division')

router.get('/getAll', getAllDivision);

router.post('/add', addDivision);

router.post('/update', updateDivision)

router.post('/delete', deleteDivision)

module.exports = router;