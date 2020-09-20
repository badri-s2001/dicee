var randomNumber1 = Math.random();
randomNumber1=Math.floor(randomNumber1*6)+1;
var randomDiceImage1 = "images/dice"+randomNumber1+".png";

var randomNumber2 = Math.random();
randomNumber2=Math.floor(randomNumber2*6)+1;
var randomDiceImage2 = "images/dice"+randomNumber2+".png";

document.querySelectorAll('img')[0].setAttribute("src",randomDiceImage1);
document.querySelectorAll('img')[1].setAttribute("src",randomDiceImage2);

if(randomDiceImage1>randomDiceImage2)
  document.querySelector("h1").textContent="Player 1 Wins";

if(randomDiceImage1<randomDiceImage2)
  document.querySelector("h1").textContent="Player 2 Wins";

if(randomDiceImage1==randomDiceImage2)
  document.querySelector("h1").textContent="Draw";
