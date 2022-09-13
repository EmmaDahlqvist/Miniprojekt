//valt nummer
let correctNumber = 30;

//input
var ps = require("prompt-sync");
var prompt = ps();

console.log("Guess the number between 0 - 100");

//10 gissningar, i representerar liv kvar
for(let i = 9; i >= 0; i--){
    //input
    var input = prompt();

    //rätt gissning
    if(input == correctNumber){
        console.log("You guessed " + correctNumber + " correctly!");
        break; //bryt loopen

        //fel - fram tills 1 liv kvar
    } else if (i > 0){
        if(input > correctNumber){
            console.log("Try a lower number. Lives left: " + i); //för högt
        } else if(input < correctNumber){
            console.log("Try a higher number. Lives left: " + i); //för lågt
        } else {
            console.log("Wrong. Lives left: " + i);
        }

        //0 liv kvar
    } else {
        console.log("Game over! Better luck next time")
    }
}