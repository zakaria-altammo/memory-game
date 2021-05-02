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
//Create images tags inside divs using for loop.
function gameStart() {
    shuffleArray(imgDuble);
    gameboard.innerHTML = "";
    for (var i = 0; i <= (imgDuble.length) - 1; i++) {
        gameboard.innerHTML += '<div><img id="img ' + i + '" src="images/bg.png" onclick="compare(\'' + imgDuble[i] + '\',\'' + i + '\',this);" class="imgStyle"></div>';
    }
}

//Compared images if there is a match keep the images flipped.
function compare(imgSrc, num, imgTag) {
    if (cardsFlippedOver < 2 && lastCardPicked != num) {
        flipArray[cardsFlippedOver] = imgDuble[num];
        flipArray[(cardsFlippedOver + 2)] = imgTag.id;
        cardsFlippedOver++;
        imgTag.src = imgDuble[num];
        console.log(imgSrc);
        if (cardsFlippedOver == 2) {
            if (flipArray[0] == flipArray[1]) {
                console.log('Match Found');
                nav.innerHTML = 'Score : ' + Score++;
                choseAgain();
            } else {
                timer = setInterval(hideImg, 2000);
                console.log('Match Not Found');
            }
        }
        lastCardPicked = num;
    }
}

//Clear game action.
function choseAgain() {
    cardsFlippedOver = 0;
    flipArray = [];
    clearInterval(timer);
}


//After comparing the two images there is a difference return image flip over and chose again.
function hideImg() {
    if (flipArray[2]) {
        document.getElementById(flipArray[2]).src = "images/bg.png";
    }
    if (flipArray[3]) {
        document.getElementById(flipArray[3]).src = "images/bg.png";
    }
    choseAgain();
}

//Shuffling the images each time loading.
function shuffleArray(d) {
    for (var c = d.length - 1; c > 0; c--) {
        var b = Math.floor(Math.random() * (c + 1));
        var a = d[c];
        d[c] = d[b];
        d[b] = a;
    }
    return d;
}