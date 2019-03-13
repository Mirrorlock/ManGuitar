const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const app = express();
const PORT = process.env.PORT || '3000';
const body_parser = require("body-parser");
const db = require("./config/database");


//css
app.use(express.static('public'));

//VIEWS
app.use(expressLayouts);
app.set("view engine", "ejs");

//ROUTES
app.use(body_parser.urlencoded());

app.use('/', require('./routes/welcome'));
app.use('/catalog', require('./routes/catalog'));
app.use('/about-us', require('./routes/about_us'));
app.use('/your-cart', require('./routes/your_cart'));
app.use('/contacts', require('./routes/contacts'));
app.use('/catalog/:id', require('./routes/catalog'));


app.listen(PORT, () => console.log(`Server running on port ${PORT}...`));