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



app.listen(PORT, () => console.log(`Server running on port ${PORT}...`));