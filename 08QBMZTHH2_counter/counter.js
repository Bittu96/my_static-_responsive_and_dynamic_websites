let counter = document.getElementById("value");

function color(val) {
    if (val > 0) {
        counter.style.color = "lightgreen";
    } else if (val < 0) {
        counter.style.color = "red";
    } else {
        counter.style.color = "black";
    }
}

function reset() {
    counter.textContent = 0;
    color(parseInt(counter.textContent));
}

function inc() {
    counter.textContent = parseInt(counter.textContent) + 1;
    color(parseInt(counter.textContent));
}

function dec() {
    counter.textContent = parseInt(counter.textContent) - 1;
    color(parseInt(counter.textContent))
}