
var readlineSync = require('readline-sync') 
var day = readlineSync.question('enter the day? ');
if(day=="monday"){console.log("puri")}
else if(day=="tuesday"){console.log("chole")}
else if(day=="wednesday"){console.log("khree")}
else if(day=="thrusday"){console.log("gulab jamun")}
else if(day=="friday"){console.log("rajma")}
else if (day=="saturday"){console.log("rice")}
else if (day=="sunday"){console.log("egg curry")}
else{console.log("not in menu")}