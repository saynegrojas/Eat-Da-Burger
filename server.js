//Dependencies

const express = require('express');
const exphbs = require('express-handlebars');
require('dotenv').config();

//instance of app
const app = express();

//port
const PORT = process.env.PORT || 6060;

//serve content for app from public
app.use(express.static('public'));

//middleware body parser
app.use(express.urlencoded({extended: true}));
app.use(express.json());

//express-handlebars body parser
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');


//routes
const routes = require('./controllers/burgersController.js');
app.use(routes);

app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
    
})