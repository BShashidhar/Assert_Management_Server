const router = require('express').Router()
const employeeRouter = require('./employee')
const managementRouter = require('./management')

router.use('/employee', employeeRouter)
router.use('/management', managementRouter)

module.exports = router     