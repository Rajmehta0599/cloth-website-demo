const express=require('express');
const app=express();
const bodyParser=require('body-parser');
const mongoose=require('mongoose');
const { Db } = require('mongodb');

//connect Mongo DB with nodejs
mongoose.connect("mongodb://127.0.0.1:27017/cloth_factory");
var db=mongoose.connection;
db.on('error',console.log.bind('error',console));
db.once('open',(err)=>{
    console.log('DB connected');
});

// Convert data in json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

// Registration page API
app.post('/register',(req,res)=>{
    var fname=req.body.firstName;
    var lname=req.body.secondName;
    var p_no=req.body.phoneNo;
    var email=req.body.email;
    var password=req.body.password;
    var gender=req.body.Gender;

    const dataInsert={
        "First Name":fname,
        "Last Name":lname,
        "Phone No":p_no,
        "Email":email,
        "Password":password,
        "Gender":gender,
    }

    db.collection('user data').insertOne(dataInsert,(err)=>{
        if(err) throw err;
        res.status(200).redirect('/login');
    })
})


// Registration page API Close

// Login Page API
app.post('/login',async(req,res)=>{
    const email=req.body.email;
    const passw=req.body.passw;

    //save the collection in varriable
    const cl=db.collection('user data');
    //find the document in the collection
    const user=await cl.findOne({'Email':email});
    try{
        if (user.Password==passw){
            res.status(200).redirect('/shirt');
        }
        else{
            res.status(404).redirect('/login');
        }
    }
    catch{
        res.status(404).redirect('/login');
    }
});

// Login Page API Close

//userbuy page API
app.post('/userbuy',(req,res)=>{
    const email=req.body.inputEmail4;
    const name=req.body.inputname4;
    const add1=req.body.inputAddress;
    const add2=req.body.inputAddress2;
    const city=req.body.inputCity;
    const zip=req.body.inputZip;
    const pmethod=req.body.inputMethod;

    // data store in json
    const dataInsert={
        "Email":email,
        "Name":name,
        "Address1":add1,
        "Address2":add2,
        "City":city,
        "Zip code":zip,
        // "Payment Method":pmethod
    }

    db.collection('order').insertOne(dataInsert,(err)=>{
        if(err) throw err;
        res.status(200).redirect('/thankyou');
    });
});

//userbuy page Api close

//create a server
app.listen('8857',(err)=>{
    console.log('server start');
});