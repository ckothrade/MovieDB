const http = require('http');
const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const adminRoutes = require('./routes/admin');
const bookRoutes = require('./routes/book');


const app = express();

app.set('view engine', 'ejs'); // For setting template engine
app.set('views', 'views'); // Done by default, added for to show concept

app.use(bodyParser.urlencoded({extended: false})); // Registers parser
app.use(express.static(path.join(__dirname, 'public'))); // Serves static files


app.use('/admin', adminRoutes);
app.use(bookRoutes);

app.listen(8088);