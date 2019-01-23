const express = require('express')
const router = express.Router()
const employeeController = require('../controllers/employeeController')
const childrenController = require('../controllers/childrenController')

router.get('/employees', employeeController.index)
router.get('/employees/:employeeId', employeeController.show)
router.post('/employees', employeeController.create)
router.patch('/employees/:employeeId', employeeController.update)
router.delete('/employees/:employeeId', employeeController.delete)

router.get('/employees/:employeeId/children', childrenController.index)

module.exports = router