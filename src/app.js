const express = require('express');
const bodyParser = require('body-parser');
const uuid = require('uuid/v1');
const { errors } = require('celebrate');
const { test2Method } = require('./subfolder/test2');

const App = () => {
    const app = express();
    app.use(bodyParser.json());

    app.use('/test', (req, res) => {
        res.send(test2Method());
    });

    app.use(errors());

    return app;
};

module.exports = {
    App,
};
