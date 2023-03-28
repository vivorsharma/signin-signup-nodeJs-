const dotenv = require('dotenv');
const mongoose = require('mongoose');
const express = require('express');
const app = express();


dotenv.config({path:'./config.env'})

require('./db/conn');
// const User = require('./model/userSchema');


app.use(express.json());


// we link the router files to make our route easy
app.use(require('./router/auth'));

const PORT = process.env.PORT;


// middleware

const middleware = (req,res, next) => {
    console.log(`hello my middleware`);
    next();
}

// middleware();


// app.get('/', (req, res) => {
//     res.send('hello from the server');
// });

app.get('/listyourproperty',middleware, (req, res) => {
    res.send('hello ListyourProperty page  from the server');
});

app.get('/AllProperties', (req, res) => {
    res.send('hello AllProperties page from the server');
});

app.get('/signin', (req, res) => {
    res.send('hello signin page from the server');
});

app.get('/signup', (req, res) => {
    res.send('hello signup page from the server');
});

app.listen(PORT, () => {

    console.log(`server is running at port no ${PORT}`);

});

