const express = require('express')
const path = require('path')

const app = express()
const router = express.Router()

app.set('view engine', 'ejs')
app.use(express.static('public'))


router.get("/", (req, res)=>{
    res.sendFile(path.join(__dirname + "/pages/index.html"))
})

router.get("/contato", (req, res)=>{
    res.sendFile(path.join(__dirname + "/pages/contato.html"))
})


app.use(router)

app.listen(4000, ()=>{
    console.log("SERVIDOR RODANDO")
})