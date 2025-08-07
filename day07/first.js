const express=require('express');
const app=express();

const bookstore = [
    {id:1, name:"harry potter", price:500, author:"jk rowling"},
    {id:2, name:"the alchemist", price:300, author:"paulo coelho"},
    {id:3, name:"the monk who sold his ferrari", price:400, author:"robin sharma"},
    {id:4, name:"the power of now", price:350, author:"eckhart tolle"},
    {id:5, name:"the subtle art of not giving a f*ck", price:450, author:"mark manson"},

];

app.get("/book",(req,res)=>{
    res.send(bookstore);
})


app.listen(5000,()=>{
    console.log("listning at port 5000");
})

