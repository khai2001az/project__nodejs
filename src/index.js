const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser')
const handlebars = require('express-handlebars')
const path = require('path');
const app = express();

const route = require('./routes');

const db=require('./config/db')

//connect to db
db.connect();

//http logger
app.use(morgan('combined'));

//public
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());


//templae engine
app.engine('hbs', handlebars({
  extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resource/views'));

//Router
route(app);


//listent port
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`App listening at http://localhost:${PORT}`)
})