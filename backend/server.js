const express = require('express');
var cors = require('cors');
const routes = require('./Routes')
const API_PORT = 3001;
const mongoose = require('mongoose')
const app = express();
app.use(cors());
var bodyParser = require('body-parser')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));


const dbRoute = 'mongodb+srv://Taiga:69Dragons@otakus-dqrcl.azure.mongodb.net/test?retryWrites=true&w=majority';

mongoose.connect(dbRoute, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false
});

let db = mongoose.connection;

db.once('open', () => console.log('connected to the database'));
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use('/', routes)

app.listen(API_PORT, () => console.log(`LISTENING ON PORT ${API_PORT}`));
