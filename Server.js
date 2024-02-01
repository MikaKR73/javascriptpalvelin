const express = require('express')
const app = express()
const cors = require('cors')
const vaatteet = require('./vaatteet.json')
const path = require('path')
const fs = require('fs').promises

app.use(cors())

app.get('/api/login', async (red, res) => {
try {
    const savePin = await fs.readFile('./pin.txt', 'utf-8')
    res.send(savePin)
} catch (error){
    console.error('error reading file:', error)
    res.status(500).send('International Server Error')
 }
}
)

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
    console.log("Vaate pyyntö tuli")
    //res.send("Hello world! Im Express web server!")
    }
    )

// Palvelin kuuntelee porttia 3000
app.listen('3000', () => 
    console.log("Server is up on port 3000")
    )
