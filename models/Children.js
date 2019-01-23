const mongoose = require('../db/connection')
const Schema = mongoose.Schema

// gender for now is boolean. This should be changed to enums.

const Children = new Schema({
    firstName: String,
    lastName: String,
    gender: Boolean,
    birthDate: Date(),
    relationship: Boolean
})

module.exports = mongoose.model('Children', Children)