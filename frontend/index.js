//const { response } = require("express")

// Tarkistetaan onko käyttäjä login
let saveUser = localStorage.getItem("loggedUser")
if (saveUser == "true"){
     document.getElementById("tuotenappi").disabled = false
     document.getElementById("pin").value = ""
     document.getElementById("login").style.visibility = "hidden"
     document.getElementById("logout").style.visibility = "visible"
}

let pvm1 = new Date()
var pvm2 = pvm1.toLocaleDateString('fi-FI')
let pvmstring = "<p>© Mika "+pvm2+"</p>"
document.getElementById("footer").innerHTML = pvmstring

// Logout
function logout() {
    document.getElementById("tuotenappi").disabled = true
    document.getElementById("pin").value = ""
    document.getElementById("root").innerHTML = " ---- "
    document.getElementById("login").style.visibility = "visible"
    document.getElementById("logout").style.visibility = "hidden"
    localStorage.clear()
}
// Login
async function login() {
    const pin = document.getElementById("pin").value
    const response = await fetch("http://localhost:3000/api/login")
    const correctPin = await response.json()
    //console.log(pin)
    //console.log(correctPin)
    if (pin == correctPin) {
        document.getElementById("tuotenappi").disabled = false
        document.getElementById("pin").value = ""
        document.getElementById("login").style.visibility = "hidden"
        document.getElementById("logout").style.visibility = "visible"
        localStorage.setItem("loggedUser", "true")
    }else {
        document.getElementById("pin").value = ""
    }
}

async function getVaatteet() {
    document.getElementById("root").innerHTML = "<h4>Ladataan ...</h4>"
    let tabel = `<table><tr><th>nimike</th><th>kategoria</th><th>hinta</th></tr>`
    const response = await fetch("http://localhost:3000/vaatteet")
    const vaatteet = await response.json() // jeason muutetaan javascriptiksi
// Vaatteet käydään läpi silmukassa ja jokaiselle lisätään taulukkorivi
await vaatteet.map(v => tabel += `<tr><td>${v.nimike}</td><td>${v.kategoria}</td>
<td>${v.hinta}</td></tr>`)
tabel += `</tabel>`
document.getElementById("root").innerHTML = tabel
}
