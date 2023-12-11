require('./models/db')
const express = require('express');
const bodyparser = require('body-parser');
const app = express();
const PORT = 8080

const route = require('./router')

app.use(bodyparser.json());
app.use('/', route)

app.listen(PORT, () => console.log(`App listen on Port : ${PORT}`))

process.on('uncaughtException', (error) => {
    console.log(error)
})