
var randonNumber1 = Math.floor(Math.random() * 6)+ 1; //1-6

var randomDiceeImage = "dice" + randonNumber1 + ".png";

var randomImagesource = src="images/" + randomDiceeImage ;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src",randomImagesource);

var randonNumber2 = Math.floor(Math.random()*6) + 1 ;

var randomImagesource2 = "images/dice" + randonNumber2 + ".png" ;

document.querySelectorAll("img")[1].setAttribute("src", randomImagesource2);


if(randonNumber1 > randonNumber2){
   document.querySelector("h1").innerHTML = "Player 1 wins!"
}else if (randonNumber2 > randonNumber1) {
    document.querySelector ("h1").innerHTML = "Player 2 wins!"
} else {
    document.querySelector("h1").innerHTML = "Its a draw!"
}


