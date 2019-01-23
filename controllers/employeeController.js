const Employee = require('../models/Employee')
const Child = require('../models/Child')

const employeeController = {
    index: (req, res) => {
        Employee.find({})
        .then((employees) => res.send(employees))
    },
    show: (req, res) => {
        Employee.findById(req.params.employeeId).populate('children')
        .then((employee) => res.send(employee))
    },
    create: (req, res) => {
        Employee.create(req.body)
        .then((employee) => {
        employee.save()
        res.send(employee)
        })
    },
    update: (req, res) => {
        Employee.findByIdAndUpdate(req.params.employeeId, req.body, { new: true })
        .then((updatedEmployee) => {
            updatedEmployee.save()
            res.send(updatedEmployee)
        })
    },
    delete: (req, res) => {
        Employee.findByIdAndDelete(req.params.employeeId)
        .then(() => res.send(200))
    }
}

module.exports = employeeController