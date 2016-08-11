/*
var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";

if (cardTwo === cardFour){
	alert("You Found a Match!");
} else {
	alert("Sorry, try again.")
}*/
alert("Yay");

var cards = ['queen', 'queen', 'king', 'king'];
var cardsInPlay = [];

var getGameBoard = document.getElementById('game-board');

var createBoard = function(){
for(var i = 0; i < cards.length; i++){
  var cardDivs = document.createElement('div');
  cardDivs.className = 'card';
  cardDivs.setAttribute('data-card', cards[i]);
  cardDivs.addEventListener('click', isTwoCards);
  getGameBoard.appendChild(cardDivs);
}
};
 var isMatch = function(){
 	cardsInPlay[0] === cardsInPlay[1]; 
 }


var isTwoCards = function(){
  cardsInPlay.push(this.getAttribute('data-card'));
  console.log(this.getAttribute('data-card'));
  if (this.getAttribute('data-card') === 'king') {
    this.innerHTML = "<img src='http://i.imgur.com/bnuv5Im.png'>"; // king
  } else {
    this.innerHTML = "<img src='http://i.imgur.com/v6buNt2.png'>"; //queen
  }

  // if you have two cards in play check for a match
  if (cardsInPlay.length === 2) {

    // pass the cardsInPlay as an argument to isMatch function
    isMatch(cardsInPlay);

    // clear cards in play array for next try
    cardsInPlay = [];

  }

  createBoard();
