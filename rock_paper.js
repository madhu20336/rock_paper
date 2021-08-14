function win(){
    console.log("You win! ")}
function lose(){
    console.log("")
}
function computers_choice(){
    let a = ["rock","paper","scissors"];
    let b = a[Math.floor(Math.random() * a.length)];
    return b
}
let readline = require("readline-sync")
player_choice = readline.question("What do you pick? (rock,paper,scissors)")
let computerChoice = computers_choice();
console.log(computerChoice);
if (player_choice == computerChoice){
    console.log ('Draw!')}
else if (player_choice == 'rock' && computerChoice == 'scissors'){
    win()}
else if (player_choice == 'paper' && computerChoice == 'scissors'){
    lose()}
else if (player_choice == 'scissors' && computerChoice == 'paper'){
    win()}
else if (player_choice == 'scissors' && computerChoice == 'rock'){
    lose()}
else if (player_choice == 'paper' && computerChoice == 'rock'){
    win()}
else if (player_choice == 'rock'  && computerChoice == 'paper'){
    lose()}
    // again = input('Do you want to play again? (yes or no) ').strip()
    // if again == 'no':
    //     print("Thanks for sharing time with us...") 
    //     break 
