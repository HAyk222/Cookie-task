const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const cookieSession = require('cookie-session');
const routes = require('./routes');

const app = express()

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.set('view engine', 'pug');
app.use(cookieParser());
app.use(cookieSession({
    name: 'session',
    keys: ['secretKey'],
    maxAge: 24 * 60 * 60 * 1000,
}));
app.use(express.static('public'));

app.use(routes);



const server = app.listen(3000, function () {
	console.log('Server running at http://localhost:' + server.address().port)
})