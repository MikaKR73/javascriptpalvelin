    //muuttujamäärityksiä
    var myObj, myJSON, i, j, k=0, x = "";
    //määritellään myJSON-objekti joka on merkkijono eli stringi = alkaa heittomerkillä ' ja loppuu ';
    myJSON = '{"cars":[{"name":"Ford","model":"Mondeo","engine":"2.0TDCI","link":"www.ford.fi"},'+
     '{"name":"BMW","model":"X6","engine":"3.8 V8","link":"www.bmw.fi"},'+
     '{"name":"Audi","model":"A3","engine":"1.6 TD","link":"www.audi.fi"},'+
     '{"name":"Opel","model":"Insignia","engine":"1.7 Gasoline","link":"www.opel.fi"},'+
     '{"name":"Fiat","model":"Linea","engine":"1.4","link":"www.fiat.fi"}]}';
    //parseroidaan JSON-stringistä JavaScript-objekti, jota käytetään taulukon luontiin: 
    myObj = JSON.parse(myJSON);
    //JavaScript-funktio haeAutot alkaa...
    function haeAutot() { 
        //x-muuttujaan rakennetaan HTML-koodisto, jossa sekä taulukon ohjaustägejä, että myObj:ssa olevaa dataa
        x = "<table><tr><th>Merkki</th><th>Malli</th><th>Moottori</th><th>www-sivut</th></tr>"; //taulukon aloitus+otsikot
        for (i in myObj.cars) { //käsitellään kaikki JavaObjektissa myObj olevat rivit ja lisätään taulukkokoodit kunkin sarakkeen ympärille
            x += "<tr><td>" + myObj.cars[i].name + "</td>";
            x += "<td>" + myObj.cars[i].model + "</td>";
            x += "<td>" + myObj.cars[i].engine + "</td>";
            x += "<td><a href='http://" + myObj.cars[i].link + "' target=blank>" + myObj.cars[i].link + "</a></td></tr>";
        }
        x += "</table>"; //taulukon lopetus
        //sijoitetaan silmukassa luotu taulukko HTML-sivun kohtaan, jossa on merkintä id="autot"
        document.getElementById("autot").innerHTML = x;     
    }; //JavaScript-funktio haeAutot loppu...

    
