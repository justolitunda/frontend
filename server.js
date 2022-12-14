const express = require("express");
const { dirname } = require("path");
const path = require("path");


const app1 = express();
app1.use("/static", express.static(path.resolve(__dirname,"static")));



app1.get ("/*",(req,res)=>{
res.sendFile(path.resolve("index.html"));
});
app1.listen(process.env.PORT||8080, () =>console.log('Server running....'));