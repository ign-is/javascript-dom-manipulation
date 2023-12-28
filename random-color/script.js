const color = document.querySelector('h1');
const button = document.querySelector('button');
 
function generateHex() {
    let digits = '0123456789abcdef';
    let color = '#';

    for(let i = 0; i < 6; i++) {
        let randomIndex = Math.floor(Math.random() * 16);
        color += digits[randomIndex];
    }

    return color;
}

button.addEventListener('click', () => {
    let randomHex = generateHex();
    color.textContent = randomHex;
    color.style.color = randomHex;
    document.body.style.backgroundColor = randomHex;
})