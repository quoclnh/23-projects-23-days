/******************************************
 *  Author : Huu Quoc   
 *  Created On : Thu Sep 16 2021
 *******************************************/

const quote = document.getElementById('quotes');
const author = document.getElementById('author');
const button = document.getElementById('getBtn');

button.addEventListener('click', generateQuote);

async function generateQuote() {
    const res = await fetch('https://api.quotable.io/random');
    const data = await res.json();

    quote.innerHTML = data.content;
    author.innerHTML = data.author;
}