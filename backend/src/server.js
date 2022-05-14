'use strict'
const express = require('express')
const app = express()
const path = require('path')
const userRoute = require('./Routes/Users')
const quizzesRoute = require('./Routes/Quizzes')
const morgan = require('morgan')
const fs = require('fs')
require('dotenv').config()
const port = 6500 ;

const cors = require('cors');
const corsOpt = {
    origin: '*',
    credentials: true,
    methods: ['GET','POST','DELETE'],
    allowedHeaders: ['Content-Type', 'x-auth-token'],
    exposedHeaders: ['Content-Type', 'x-auth-token']
};
app.use(cors(corsOpt));

// Hosting Frontend
// Create a production build of the frontend and paste the files in the public folder
app.use(express.static(path.join(__dirname, '/public/')))

// Middleware
app.use(express.json())
app.use('/API/users', userRoute)
app.use('/API/quizzes', quizzesRoute)

app.use('*', (req, res) => {
	res.sendFile(path.join(__dirname, '/public/index.html'))
})
// Listening to APIs
app.listen(port, () =>
	console.log(`Server running on port: ${port}`)
)

module.exports = app