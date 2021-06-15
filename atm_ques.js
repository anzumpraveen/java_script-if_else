console.log("welcom to the Atm ")
console.log("insert your card")
console.log("Choose your transcation")
total_balance=50000
var readlineSync = require('readline-sync')
var pin= parseInt(readlineSync.question('enter the Atm pin'));
if (pin==9999){
    console.log("1.withdrawl\n2.deposite\n3.transfer money\n4.balance enquary\n5.quit")

    var readlineSync = require('readline-sync') 
    var option= readlineSync.question('which option you want to choose? ');
    if(option=="1"  ){
        var readlineSync = require('readline-sync') 
        var amount = parseInt(readlineSync.question('enter the amount'))
        var x=total_balance-amount
        console.log(amount,"current amount in bank",x)
    }

    else if(option==2 ){
        var readlineSync = require('readline-sync') 
        var amount = parseInt(readlineSync.question('how much you want deposite money'))
        var current_amount=total_balance+amount
        console.log(amount,"your current amount is",current_amount)
    }

    else if(option==3 ){
        var readlineSync = require('readline-sync') 
        var amount = parseInt(readlineSync.question('how much money you want to transf'))
        var left_amount=total_balance-amount
        console.log(amountl,"your current amount is",left_amount)
    }

    else if(option==4 ){
    console.log("account_balance",total_balance);
    console.log("complete the transaction")
    }

    else if(option==5 ){
        console.log("thank you for visit\U0001F929")
    }

    else{
        console.log("i am not able to understand what you want to do")
    }

}
else{console.log("your pin number is wrong")}