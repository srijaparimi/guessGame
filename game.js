const $message = document.getElementById("message");
const $lives = document.getElementById("lives");



function root() {
    var guessNumber = Math.round(Math.random() * 10)
    console.log(guessNumber)
    var lives = 10;
    var message;
    let userInput = document.getElementById('number-input').value;
    lives--;
    if (userInput == guessNumber) {
        location.href = "win.html";
    } else if (lives == 0) {
        location.href = "lose.html";
    } else if (userInput > guessNumber) {
        alert('OOps!! your guess is too high !!');

    } else if (userInput < guessNumber)
        alert('Guess too low');



}