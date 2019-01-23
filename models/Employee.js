const mongoose = require('../db/connection')
const Schema = mongoose.Schema

// gender for now is boolean. This should be changed to enums.

const Employee = new Schema({
    birthDate: Date,
    firstName: String,
    lastName: String,
    gender: Boolean,
    title: String,
    email: String,
    children: [{
        type: Schema.Types.ObjectId,
        ref: 'Children'
    }]
})

module.exports = mongoose.model('Employee', Employee)