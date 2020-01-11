const router = require('express').Router();
const { getAllDesignation, addDesignation, updateDesignation, deleteDesignation} = require('../../controller/designation')

router.get('/getAll', getAllDesignation);

router.post('/add', addDesignation);

router.post('/update', updateDesignation);

router.post('/delete', deleteDesignation);

module.exports = router;