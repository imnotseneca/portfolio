const express = require('express');
const app = express();
const homeRoutes = require('./routes/home')
const aboutMeRoutes = require('./routes/aboutMe')

require('dotenv').config({path: '.config/.env'});

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.use('/', homeRoutes)
app.use('/aboutme', aboutMeRoutes)

app.listen(3000, ()=>{
    console.log('Server is running, you better catch it!')
})   