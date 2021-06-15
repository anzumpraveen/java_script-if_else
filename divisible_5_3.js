var readlineSync = require('readline-sync') 
var num = parseInt(readlineSync.question('tell me your lucky number? '));
if (num%3==0 & num%5==0 ){
    console.log("chocolate")
}
else if (num%5==0){
    console.log("late")
}
else if (num%3==0){
    console.log("choco")
}