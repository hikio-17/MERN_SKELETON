const express = require('express');
const cookieParser = require('cookie-parser');
const compress = require('compression');
const cors = require('cors');
const bodyParser = require('body-parser');
const helmet = require('helmet');

const Template = require('../template');

const app = express();

// middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(helmet());
app.use(compress());
app.use(cors());

app.get('/', (err, res) => {
   res.status(200).send(Template());
});

module.exports = app;