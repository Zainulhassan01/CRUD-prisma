const express = require('express')
const app = express()
const apiRoutes = require('./routes')
const listEndpoints = require('express-list-endpoints')
const bodyParser = require('body-parser')

app.use(bodyParser.json({urlExtended:true}))

app.use('/api', apiRoutes);

console.log(listEndpoints(app))

app.listen('3000', () =>{
    console.log('Listnening');
})