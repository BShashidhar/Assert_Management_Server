const router = require('express').Router();
const { getAllStatus, addStatus, updateStatus } = require('../../controller/status')

router.get('/getAll', getAllStatus);

router.post('/add', addStatus);

router.post('/update', updateStatus)

module.exports = router;