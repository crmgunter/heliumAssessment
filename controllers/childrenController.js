const Employee = require('../models/Employee')
const Child = require('../models/Child')

const childrenController = {
    index: (req, res) => {
        Employee.findById(req.params.employeeId).populate('children')
        .then((employee) => res.send(employee.children))
    }
}

module.exports = childrenController