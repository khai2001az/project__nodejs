const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser')
const handlebars = require('express-handlebars')
const path = require('path');
const app = express();

//http logger
app.use(morgan('combined'));

//templae engine
app.engine('hbs', handlebars({
  extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resource/views'));

app.get('/', (req, res) => {
  res.render('home');
})


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})