const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const apiRouter = require('./router')

const app = express()
const PORT= 2020

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors())

app.use('/api', apiRouter)

app.use(function (err, req, res, next) {
    console.error("Error := ",err.stack)
    res.status(500).send('Server Error. Try again..!')
})

app.listen(PORT, (err) => {/*  */
    if(err)
    console.error('Unable start server : ',err)
    else
    console.log(`server running on the port : ${PORT}`)
})