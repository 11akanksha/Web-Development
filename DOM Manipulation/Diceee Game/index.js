var randomNo1 = Math.floor(Math.random() * 6) + 1;
var newImg1 = "images/dice" + randomNo1 + ".png";
document.querySelectorAll("img")[0].setAttribute("src", newImg1);

var randomNo2 = Math.floor(Math.random() * 6) + 1;
var newImg2 = "images/dice" + randomNo2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", newImg2);

document.querySelector("h1").style.fontSize = "6rem";

if (randomNo1 > randomNo2) {
    document.querySelector("h1").textContent = "🚩 Player 1 wins!";
} else if (randomNo1 < randomNo2) {
    document.querySelector("h1").textContent = "Player 2 wins! 🚩";
} else {
    document.querySelector("h1").textContent = "Draw!";
}