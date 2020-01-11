const router = require('express').Router();
const { getAllVendor, addVendor, updateVendor, deleteVendor } = require('../../controller/vendor')

router.get('/getAll', getAllVendor);

router.post('/add', addVendor);

router.post('/update', updateVendor)

router.post('/delete', deleteVendor)

module.exports = router;