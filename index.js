import express from "express";
import ejs from "ejs";
import body from "body-parser";
import bodyParser from "body-parser";

const app=express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));
var array1=[];
var array2=[];

app.post("/",(req,res)=>{
    array1.push(req.body['work'])
    console.log(array1)
    res.render("todo.ejs" , {todo:array1})
})

app.get("/",(req,res)=>{
    console.log(req.body)
    res.render("todo.ejs",{todo:array1})
})

app.post("/work",(req,res)=>{
    array2.push(req.body['work'])
    console.log(array2)
    res.render("work.ejs" , {todowork:array2})
})

app.get("/work",(req,res)=>{
    res.render("work.ejs" ,{todowork:array2} )
})

app.listen(port,()=>{
    console.log("server listening on port:"+port);
})