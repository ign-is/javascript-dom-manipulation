let btn = document.querySelector('button');
let quote = document.querySelector('.quote');
let author = document.querySelector('.author');

function generateRandomQuote(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min) + min);
}

function changeQuote() {
    let index = generateRandomQuote(0, quotes.length);
    quote.innerHTML = `<q>${quotes[index].texto}</q>`;
    author.textContent = `${quotes[index].autor}`;
}

let randomIndex = generateRandomQuote(0, quotes.length);

btn.addEventListener('click', changeQuote);

changeQuote();