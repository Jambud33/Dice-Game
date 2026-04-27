var player1 =prompt("Enter Player 1 Name");
var player2 =prompt("Enter Player 2 Name");

document.querySelector(".p1").innerHTML= player1;
document.querySelector(".p2").innerHTML= player2;

var randomNumber1 = Math.floor(Math.random()*6)+1;
var randomNumber2 = Math.floor(Math.random()*6)+1;

document.querySelector(".img1").setAttribute("src", "./images/dice" +randomNumber1+".png");
document.querySelector(".img2").setAttribute("src", "./images/dice" +randomNumber2+".png");

if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML= "🚩" +player1+ " Wins!";
} else if(randomNumber2>randomNumber1){
    document.querySelector("h1").innerHTML= player2+" Wins!🚩";
} else {
   document.querySelector("h1").innerHTML="🚩Everybody Wins!🚩"; 
}

