require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT||3000;
const expressLayouts = require('express-ejs-layouts');

//EJS - template engine
app.set('view engine', 'ejs');
app.use(expressLayouts);


//Routers
app.use('/', require('./routes/index'));
app.use('/users', require('./routes/user'));

app.listen(PORT, () => console.log(`Server is listening at ${PORT}`));