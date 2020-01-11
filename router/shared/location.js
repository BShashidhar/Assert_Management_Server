const router = require('express').Router();
const { getAllLocation, addLocation, updateLocation, deleteLocation } = require('../../controller/location')

router.get('/getAll', getAllLocation);

router.post('/add', addLocation);

router.post('/update', updateLocation)

router.post('/delete', deleteLocation)

module.exports = router;