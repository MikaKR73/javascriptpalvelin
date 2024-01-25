const express = require('express')
const app = express()
const vaatteet = require('./vaatteet.json')
const path = require('path')

// Tehdään polkumääritys frontend kansioon
const frontendpolku = path.join(__dirname, './frontend')

// Sanotaan että em. polussa on tiedostotiältöä
// jotta palvelin käyttää kun saa http requestin
app.use(express.static(frontendpolku))

// Lähettää viestin
app.get('/api', (req, res) => {
    console.log("Pyyntö tuli")
    res.send("Hello world! Im Express web server!")
    }
    )

// Vaatedatan lähetys
app.get('/vaatteet', (req, res) => {
    res.json(vaatteet)
    console.log("Pyyntö tuli")
    res.send("Hello world! Im Express web server!")
    }
    )

// Palvelin kuuntelee porttia 3000
app.listen('3000', () => 
    console.log("Server is up on port 3000")
    )
