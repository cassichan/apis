//loads library and make available
const express = require('express')
//creating server
const app = express()
//Declare variable to specify port to connect
const port = 3001



//app - computer waiting for us to do something
//.listen  - listen for connections. returns a node http server with this app as its callback function. callback makes decisions/says what to do.
app.listen(port, () => {
    console.log(`started on port ${port}`)
})
