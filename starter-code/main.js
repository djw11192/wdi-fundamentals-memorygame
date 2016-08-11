var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";

/*if (cardTwo === cardFour){
	alert("You Found a Match!");
} else {
	alert("Sorry, try again.")
}*/

var cards = ['queen', 'queen', 'king', 'king'];

var getGameBoard = document.getElementById('game-board');

var createBoard = function(){

for(var i = 0; i < cards.length; i++){
  var newDivs = document.createElement('div');
  newDivs.className = 'card';
  getGameBoard.appendChild(newDivs);
}
};
  