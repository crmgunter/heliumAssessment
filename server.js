const express = require('express')
const app = express()
const router = require('./routes/index')

// express's version of body-parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api', router)

const PORT = process.env.PORT || 3001

app.listen(PORT, () => console.log(`listening on port ${PORT}`))