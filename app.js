const express = require('express');
require('dotenv').config();
const sequelize = require('./postgreSQL/db');
const models = require('./models/models');
const cors = require('cors');
const mainRouter = require('./routes/index');
const bodyParser = require('body-parser');
const indexRouter = require('./routes/indexRouter');

const app = express();
const PORT = process.env.PORT || 5000;

const urlencodedParser = bodyParser.urlencoded({
    extended: true
});

app.use(cors());
app.use(urlencodedParser);
app.use(bodyParser.json());
app.use('/api', mainRouter);
app.use('/', indexRouter);

const connectDB = async () => {
    try {
        await sequelize.authenticate();
        await sequelize.sync();
    } catch(e) {
        console.log(`>_${e}`);
    }
    console.log(`>_Connection successful`);
}

function start() {
    try {
        connectDB();
        app.listen(PORT, () => {
            console.log(`>_Server has been started on port ${PORT}`);
        });
    } catch(e) {
        console.log(`>_${e}`);
    }
}

start();