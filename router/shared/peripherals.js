const router = require('express').Router();
const { getAllPeripherals, addPeripherals, updatePeripherals, deletePeripherals } = require('../../controller/peripherals')

router.get('/getAll', getAllPeripherals);

router.post('/add', addPeripherals);

router.post('/update', updatePeripherals)

router.post('/delete', deletePeripherals)

module.exports = router;