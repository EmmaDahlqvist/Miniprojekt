//valt nummer
let number = 30;

//input
var ps = require("prompt-sync");
var prompt = ps();

//intro
console.log("Guess the number between 0 - 100");

//10 gissningar
for(let i = 10; i >= 0; i--){
    //input
    var input = prompt();

    //rätt gissning
    if(input == number){
        console.log("You guessed " + number + " correctly!");
        break; //bryt loopen
        //fram tills 1 liv kvar
    } else if (i > 0){
        console.log("Wrong. Lives left: " + i);
        //0 liv kvar
    } else {
        console.log("Game over! Better luck next time")
    }
}