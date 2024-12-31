
var randomDice1 = Math.floor((Math.random()*6)+1);

var randomDICE1 = "dice"+randomDice1+".png";


document.querySelector("img.img1 ").setAttribute("src",randomDICE1);

let randomDice2 = Math.floor((Math.random()*6)+1);
let randomDICE2 = "dice"+randomDice2+".png";
document.querySelector("img.img2 ").setAttribute("src",randomDICE2);

if(randomDice1 > randomDice2){
    document.querySelector("h1").innerHTML = "Player 1 Wins!";
}
else if(randomDice2 > randomDice1){
    document.querySelector("h1").innerHTML = "Player 2 Wins!";
}
else if(randomDice1 === randomDice2){
    document.querySelector("h1").innerHTML = "Draw!";
}
