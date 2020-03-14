require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT||3000;
const expressLayouts = require('express-ejs-layouts');
const mongoose = require('mongoose');


// Database Config MongoDB
const db = require('./configs/keys').mongoURI; // use https://cloud.mongodb.com

// Database Connect to MongoDB
mongoose.connect(db, {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => console.log("Database connected!"))
.catch(err => console.log("err"));


//EJS - template engine
app.set('view engine', 'ejs');
app.use(expressLayouts);


//Routers
app.use('/', require('./routes/index'));
app.use('/users', require('./routes/user'));

app.listen(PORT, () => console.log(`Server is listening at ${PORT}`));