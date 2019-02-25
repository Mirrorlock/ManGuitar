const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const app = express();
const PORT = 3000;


//css
app.use(express.static('public'));

//VIEWS
app.use(expressLayouts);
app.set("view engine", "ejs");

//ROUTES
app.use('/', require('./routes/welcome'));
app.use('/catalog', require('./routes/catalog'));
app.use('/about-us', require('./routes/about_us'));
app.use('/your-cart', require('./routes/your_cart'));
app.use('/contacts', require('./routes/contacts'));



app.listen(PORT, () => console.log(`Server running on port ${PORT}...`));