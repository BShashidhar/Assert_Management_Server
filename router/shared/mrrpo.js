const router = require('express').Router();
const { addGrcir } = require('../../controller/mrrpo')

router.post('/add', addGrcir);


module.exports = router;