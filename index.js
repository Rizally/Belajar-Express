const express = require('express')

const app = express()
const port = 2345

app.get('/',(req,res) =>{
    res.send("Siapa namanya, dimana rumahnya")
})

app.post('/',(req,res) =>{
    res.send("my honest reaction to that information")
})
app.listen(port,() => console.log(`Server running on port ${port}`))
