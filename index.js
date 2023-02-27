const express = require('express');
const app = express();
const homeRoutes = require('./routes/home')
const aboutMeRoutes = require('./routes/aboutMe')
const contactRoutes = require('./routes/contact')


require('dotenv').config({path: './config/.env'});

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


//MIDDLEWARES for routes.

app.use('/', homeRoutes);
app.use('/aboutme', aboutMeRoutes);
app.use('/contact', contactRoutes);


app.listen(process.env.PORT, ()=>{
    console.log(`Server is running on ${process.env.PORT}, you better catch it!`)
})   