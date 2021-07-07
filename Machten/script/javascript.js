var getalx = prompt("Vul getal X in. (tussen de 1 en 10)")
while (getalx < 1 || getalx > 10) {
    alert("ERROR! Getal X mag niet kleiner zijn dan 1 en niet groter dan 10.")
    var getalx = prompt("Vul getal X in. (tussen de 1 en 10)")

}
document.write("<p>Getal X is " + getalx + ".</p>")

var getaly = prompt("Vul getal Y in. (niet kleiner dan 2)")
while (getaly < 2) {
    alert("ERROR! Getal Y mag niet kleiner zijn dan 2.")
    var getaly = prompt("Vul getal Y in. (niet kleiner dan 2)")

}
document.write("<p>Getal Y is " + getaly + ".</p>")
var uitkomst = Math.pow(getalx,getaly)
document.write("<p>" + getalx + " tot de macht van " + getaly + "= " + uitkomst)