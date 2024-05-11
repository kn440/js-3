'use strict'
const express =require('express');



const fs = require('fs');
const path = require('path');

const app = express();


const pathToFileHome = path.join(__dirname, 'userCountHome.json');
const countLink = JSON.parse(fs.readFileSync(pathToFileHome, 'utf-8'));
console.log(pathToFileHome);
app.get('/', (req, res) => {
   
   countLink.counthome = countLink.counthome + 1;
    fs.writeFileSync(pathToFileHome, JSON.stringify(countLink.counthome, null, 2));
    res.send(`<h1>countHome</h1><p>Просмотров: ${countLink.counthome}</p><a href="/about">About</a>`);
});

app.get('/about',(req,res)=>{
    countLink.countabout = countLink.countabout + 1;
    fs.writeFileSync(pathToFileHome, JSON.stringify(countLink.countabout, null, 2));
    res.send(`<H1>About</H1><p>Просмотров: ${countLink.countabout}</p><a href="/">Home page</a>`);
});
const port ='8080';
app.listen(port, ()=> console.log('Start'));