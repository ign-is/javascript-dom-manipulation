const inputRed = document.getElementById('red');
const inputGreen = document.getElementById('green');
const inputBlue = document.getElementById('blue');
const textRed = document.querySelector('.red-text');
const textGreen = document.querySelector('.green-text');
const textBlue = document.querySelector('.blue-text');

let red = inputRed.value;
let green = inputGreen.value;
let blue = inputBlue.value;

textRed.textContent = red;
textGreen.textContent = green;
textBlue.textContent = blue;

function colorUpdate(red, green, blue) {
    const colorRGB = `rgb(${red}, ${green}, ${blue})`;
    document.body.style.backgroundColor = colorRGB;
} 

inputRed.addEventListener('input', (e) => {
    red = e.target.value;
    textRed.textContent = red;
    colorUpdate(red, green, blue);
});

inputGreen.addEventListener('input', (e) => {
    green = e.target.value;
    textGreen.textContent = green;
    colorUpdate(red, green, blue);
});

inputBlue.addEventListener('input', (e) => {
    blue = e.target.value;
    textBlue.textContent = blue;
    colorUpdate(red, green, blue);
});