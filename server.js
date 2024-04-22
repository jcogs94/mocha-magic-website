const express = require('express');
const app = express();
app.use(express.static('public')); 
const data = require('./assets/data');


app.get('/', (req, res) => {
    res.render('home.ejs', {data: data.companyData})
});


app.get('/history', (req, res) => {
    res.render('history.ejs', {data: data.companyData})
});


app.get('/staff', (req, res) => {
    res.render('staff.ejs', {data: data.companyData})
});


app.get('/contactus', (req, res) => {
    res.render('contact-us.ejs', {data: data.companyData})
});


app.get('/links', (req, res) => {
    res.render('links.ejs', {data: data.companyData})
});


app.listen(3000, () => {
    console.log('We are listening to port 3000');
});
