// birthDate: Date,
// firstName: String,
// lastName: String,
// gender: Boolean,
// title: String,
// email: String,
// children: [{
//     type: Schema.Types.ObjectId,
//     ref: 'Children'
// }]

// firstName: String,
// lastName: String,
// gender: Boolean,
// birthDate: Date(),
// relationship: Boolean

const Employee = require('../models/Employee')
const Child = require('../models/Child')

const jamesFranko = new Child({
    firstName: "James",
    lastName: "Franko",
    gender: true,
    birthDate: new Date('April 17, 1982 03:24:00'),
    relationship: true
})

const julieFranko = new Child({
    firstName: "Julie",
    lastName: "Franko",
    gender: false,
    birthDate: new Date('November 19, 1996 03:24:00'),
    relationship: false
})

const mollyKim = new Child({
    firstName: "Molly",
    lastName: "Kim",
    gender: false,
    birthDate: new Date('April 16, 2016 03:24:00'),
    relationship: false
})

const taylorSmith = new Child({
    firstName: "Taylor",
    lastName: "Smith",
    gender: true,
    birthDate: new Date('July 09, 1998 03:24:00'),
    relationship: true
})

const benjaminSmith = new Child({
    firstName: "Benjamin",
    lastName: "Smith",
    gender: true,
    birthDate: new Date('March 24, 1992 03:24:00'),
    relationship: true
})

const lindaFranko = new Employee({
    birthDate: new Date('February 25, 1962 03:24:00'),
    firstName: "Linda",
    lastName: "Franko",
    gender: false,
    title: "CFO",
    email: "",
    children: [jamesFranko, julieFranko]
})

const jamesSmith = new Employee({
    birthDate: new Date('January 15, 1975 03:24:00'),
    firstName: "James",
    lastName: "Smith",
    gender: true,
    title: "CEO",
    email: "",
    children: [taylorSmith, benjaminSmith]
})

const catherineDodge = new Employee({
    birthDate: new Date('May 26, 1985 03:24:00'),
    firstName: "Catherine",
    lastName: "Dodge",
    gender: false,
    title: "Accountant",
    email: "",
    children: []
})

const davidKim = new Employee({
    birthDate: new Date('July 09, 1988 03:24:00'),
    firstName: "David",
    lastName: "Kim",
    gender: true,
    title: "programmer",
    email: "",
    children: [mollyKim]
})

const josephNorton = new Employee({
    birthDate: new Date('March 24, 1992 03:24:00'),
    firstName: "Joseph",
    lastName: "Norton",
    gender: true,
    title: "Designer",
    email: "",
    children: []
})

Employee.remove({})
.then(() => Child.remove({}))
.then(() => Employee.create([lindaFranko, jamesSmith, catherineDodge, davidKim, josephNorton]))
.then(() => Child.insertMany([jamesFranko, julieFranko, mollyKim, taylorSmith, benjaminSmith]))
.then(() => console.log('seeded successfully'))
.catch(err => console.log(err, 'error!'))