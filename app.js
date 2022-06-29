//Iport framework Express
const express = require("express");

const app = express();

//Configure folder where resources will be stored (img, css, html, etc.)
app.use(express.static('public'))
app.use(express.static('views'))

//localhost:3000
app.get("/", (req, res) => {
    console.log("Ruta principal", __dirname)
    //res.send()
    res.sendFile(__dirname + '/views/index.html')
})

app.get("/about-page", (req, res) => {
    res.sendFile(__dirname + '/views/about-page.html')
})

app.get("/works", (req, res) => {
    res.sendFile(__dirname + '/views/works.html')
})

app.get("/photo-gallery", (req, res) => {
    res.sendFile(__dirname + '/views/photo-gallery.html')
})

app.listen("3000", () => {
    console.log("working server")
})

