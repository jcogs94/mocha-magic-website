const express = require('express');
const app = express();
app.use(express.static('public')); 

    


    app.get('/home', (req, res) => {
        res.render('home.ejs')
    });


    app.get('/history', (req, res) => {
        res.render('history.ejs')
    });


    app.get('/staff', (req, res) => {
        res.render('staff.ejs')
    });


    app.get('/contactus', (req, res) => {
        res.render('contactus.ejs')
    });


    app.get('/links', (req, res) => {
        res.render('links.ejs')
    });



    
    app.listen(3000, () => {
        console.log('We are listening to port 3000');
    })