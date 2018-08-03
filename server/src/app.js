const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()
app
    .use(morgan('combined'))
    .use(bodyParser.json())
    .use(cors())
    .post('/register', (req, res) => {
        res.send({
            message: `Hello, ${req.body.email}. You successfully registered!`
        })
    })
    .listen(process.env.PORT || 8081)