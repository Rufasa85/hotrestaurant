const express = require("express");
const app = express();
const path = require("path");
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

const tablesArr = [
    {
        name:"Joe",
        email:"joe@joe.com"
    }
];
const waitlistArr = [
    {
        name:"Denis",
        email:"denis@fake.email"
    }
];

app.get('/',(req,res)=>{
    // will serve the homepage
    res.sendFile(path.join(__dirname, "views/index.html"));
})

app.get('/tables',(req,res)=>{
    // will serve tables page
    res.sendFile(path.join(__dirname, "views/tables.html"));
})

app.get('/reserve',(req,res)=>{
    //reservations form
    res.sendFile(path.join(__dirname, "views/reserve.html"));
})

app.get('/api/tables',(req,res)=>{
    //table data route
    res.json(tablesArr);
})

app.get('/api/waitlist',(req,res)=>{
    //waitlist data route
    res.json(waitlistArr);
})

app.post('/api/tables',(req,res)=>{
    //recieve data object, check if space in restuarnt, push to appropriate array
    const customer = req.body;
    if(tablesArr.length<5){
        tablesArr.push(customer);
        res.send("reserved");
    } else {
        waitlistArr.push(customer);
        res.send("waitlist");
    }
})

app.listen(PORT,function(){
    console.log('server listening!');
})