var date = new Date();
var nlmaanden = new Array("januari", "februari", "maart", "april", "mei", "juni", "juli", "augustus", "september", "oktober", "november", "december");
var nldagen = new Array("Zondag", "Maandag", "Dinsdag", "Woensdag", "Donderdag", "Vrijdag", "Zaterdag");

var fmaanden = new Array("jannewaris", "febrewaris", "maart", "april", "maaie", "juny", "july", "augustus", "septimber", "oktober", "novimber", "desimber");
var fdagen = new Array("snein", "moandei", "tiisdei", "woansdei", "tongersdei", "freed", "sneon");

var dumaanden = new Array("Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember");
var dudagen = new Array("Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag");


document.write("<p>Vandaag is: " + date + "</p>");
document.write("<p>Nederlands: " + nldagen[date.getDay()] + " " + date.getDate() + " " + nlmaanden[date.getMonth()] + " " + date.getFullYear() + "</p>");
document.write("<p>Fries: " + fdagen[date.getDay()] + " " + date.getDate() + " " + fmaanden[date.getMonth()] + " " + date.getFullYear() + "</p>");
document.write("<p>Duits: " + dudagen[date.getDay()] + " " + date.getDate() + " " + dumaanden[date.getMonth()] + " " + date.getFullYear() + "</p>");