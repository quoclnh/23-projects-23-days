/******************************************
 *  Author : Huu Quoc   
 *  Created On : Mon Sep 20 2021
 *******************************************/

const button = document.querySelector('button');
const nav = document.querySelector('nav');
const items = document.querySelectorAll('li');

console.log(items);

for (let i = 0; i < items.length - 1; i++) {
    let distanceFromEdge = ((items.length - 2) / 2 - Math.abs((items.length - 2) / 2 - i)) + 1;
    console.log(distanceFromEdge);
    items[i].style.transitionDelay = distanceFromEdge * 300 + 'ms';
    console.log(items[i].style.transitionDelay);
}

button.addEventListener('click', () => {
    nav.classList.toggle('hide');
});