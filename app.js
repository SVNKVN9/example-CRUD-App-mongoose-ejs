require('./models/db')
const express = require('express');
const bodyparser = require('body-parser');
const app = express();
const PORT = 8080

const route = require('./router/index')

app.set('view engine', 'ejs');

app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());
app.use('/', route)

app.listen(PORT, () => console.log(`App listen on Port : ${PORT}`))