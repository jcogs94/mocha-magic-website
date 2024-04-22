const express = require('express');
const app = express();
app.use(express.static('public')); 
const data = require('./assets/data');


app.get('/', (req, res) => {
    res.render('home.ejs', {data: data.companyData})
});


app.get('/staff', (req, res) => {
    res.render('staff.ejs', {data: data.companyData})
});


app.get('/staff/:id', (req, res) => {
    let employee = {};
    
    console.dir(data)
    
    for (let i = 0; i < data.companyData.employees.length; i++) {
        console.log('i:', i, typeof(i));
        console.log('req.params.id:', req.params.id, typeof(req.params.id));
        if (data.companyData.employees[i].id === parseInt(req.params.id)) {
            employee = data.companyData.employees[i];
        }
    }

    res.render('staff-employee.ejs', {
        data: data.companyData,
        employee: employee
    });
});


app.get('/contactus', (req, res) => {
    res.render('contact-us.ejs', {data: data.companyData})
});


app.get('/links', (req, res) => {
    res.render('links.ejs', {data: data.companyData})
});

app.get('/menu', (req, res) => {
    res.render('menu.ejs', {data: data.companyData})
});


app.listen(3000, () => {
    console.log('We are listening to port 3000');
});
