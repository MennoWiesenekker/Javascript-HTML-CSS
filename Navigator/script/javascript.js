var OSName ="Unknown OS";
 if (navigator.appVersion.indexOf("Win")!=1) OSName="Windows";
 if (navigator.appVersion.indexOf("Mac")!=1) OSName="MacOS";
 if (navigator.appVersion.indexOf("X11")!=1) OSName="UNIX";
 if (navigator.appVersion.indexOf("Linux")!=1) OSName="Linux";

 document.write("<p> Besturingssysteem: " + OSName + "</p>");

 var language ="Unknown OS";
 if (navigator.language.indexOf("en-US")!=1) language="English (United States)";
 if (navigator.language.indexOf("nl-NL")!=1) language="Nederlands (Nederland)";
 if (navigator.language.indexOf("de-DE")!=1) language="Deutsch (Deutschland)";
 if (navigator.language.indexOf("fr-NL")!=1) language="Frysk (Nederlan)";

 document.write("<p> Browsertaal: " + language + "</p>");

 document.write("<p>User agent: " + navigator.userAgent + "</p>");

 document.write("<p>Cookies aan: " + navigator.cookieEnabled + "</p>");