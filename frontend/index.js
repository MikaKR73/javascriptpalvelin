let pvm1 = new Date()
var pvm2 = pvm1.toLocaleDateString('fi-FI')
let pvmstring = "<p>"+pvm2+"</p>"
document.getElementById("footer").innerHTML = pvmstring