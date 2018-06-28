const flash = require('connect-flash');
const winston = require('winston');
const express = require('express');
const app = express();

require('./startup/logging')();
require('./startup/routes')(app);
require('./startup/config')();

app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.static('public'));
app.use(flash());

const port = process.env.PORT || 3000;
app.listen(port, () => winston.info(`Listening on port ${port}...`));