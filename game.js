var Score = 1;
//   Define images array.
var imgArray = ['images/a.png', 'images/b.png', 'images/c.png', 'images/d.png', 'images/e.png', 'images/f.png']

//   Doubling the images array.
var imgDuble = imgArray.concat(imgArray);

//  Set action game variables.
var cardsFlippedOver = 0;
var lastCardPicked = -1;
var flipArray = new Array();
var timer = '';


var gameboard = document.getElementById("gameboard");
var nav = document.getElementById("nav");

gameStart();