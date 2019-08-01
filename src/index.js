const AWS = require('aws-sdk');

const { App } = require('./app');
require('dotenv').config();

const port = 8080;
const app = App();

app.listen(port, () => {
    /* eslint-disable-next-line */
    console.log(`App listening on port ${port}!`)
});
