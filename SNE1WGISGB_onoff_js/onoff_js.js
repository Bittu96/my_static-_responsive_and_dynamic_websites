function on() {
    document.getElementById("img").src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-on-img.png";
    document.getElementById("cat").src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-img.png";
    document.getElementById("off").style.backgroundColor = "red";
    document.getElementById("on").style.backgroundColor = "lightgrey";
    document.getElementById("status").textContent = "Switched On";
    console.log("on")
}

function off() {
    document.getElementById("img").src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-off-img.png";
    document.getElementById("cat").src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-eyes-img.png";
    document.getElementById("on").style.backgroundColor = "lightgreen";
    document.getElementById("off").style.backgroundColor = "lightgrey";
    document.getElementById("status").textContent = "Switched Off";
    console.log("off")
}