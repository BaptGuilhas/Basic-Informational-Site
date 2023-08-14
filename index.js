const express = require("express")
const port = 8080;

const app = express();

app.get("/", (req,res)=> {
    res.sendFile(process.cwd() + "/index.html")
})
app.get("/about", (req,res)=> {
    res.sendFile(process.cwd() + "/about.html")
})
app.get("/contact", (req,res)=> {
    res.sendFile(process.cwd() + "/contact.html")
})

app.listen(port, ()=>{
    console.log(`Server running at port ${port}`)
})