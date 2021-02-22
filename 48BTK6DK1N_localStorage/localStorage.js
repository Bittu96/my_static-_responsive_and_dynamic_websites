let userText = document.getElementById('userInput');
let infoBox = document.getElementById('infoBox');
let storedDataElement = document.getElementById('storedDataBox');

let getData = localStorage.getItem('mydata');
storedDataElement.value = getData;
infoBox.textContent = 'Submitted!'

function submit() {
    let inputValue = {
        name: userInput.value,
        id: 2
    };
    let setString = JSON.stringify(inputValue);
    localStorage.setItem('mydata', setString);

    let getData = localStorage.getItem('mydata');
    storedDataElement.value = getData;
    infoBox.textContent = 'Submitted!'
}

function clearall() {
    localStorage.clear();
    userText.value = '';
    infoBox.textContent = 'Cleared!'
}