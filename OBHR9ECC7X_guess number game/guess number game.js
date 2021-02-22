let target = Math.ceil(Math.random() * 100);
console.log(target);
let guess = document.getElementById("userInput");
let result = document.getElementById("gameResult");

function report(msg, des = "blue") {
    result.textContent = msg;
    result.style.backgroundColor = des;
}

function checkGuess() {
    response = "you entered " + guess.value
    console.log(response);
    if (parseInt(guess.value) === target) {
        report("Congo! You are right!", "green");
    } else if (guess.value > target) {
        report("Your number is large");
    } else if (guess.value < target) {
        report("Your number is small");
    } else {
        report("Enter a valid number", "red");
    }
}