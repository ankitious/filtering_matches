const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');


const app = express();
const port = process.env.PORT || 5000;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.resolve('client/build')));

//Routes
app.use(require('./routes/routes'));

const server = app.listen(port, () => console.log(`Listening on port ${port}`));

module.exports = server;

