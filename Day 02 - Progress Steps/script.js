/******************************************
 *  Author : Huu Quoc   
 *  Created On : Wed Sep 08 2021
 *******************************************/

const circles = document.querySelectorAll('.circle');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const progress = document.getElementById('progress');

let current = 1;

prev.addEventListener('click', () => {
    if (--current === 1) {
        prev.disabled = true;
    }
    circles[current].classList.remove('active');
    next.disabled = false;
    progress.style.width = (current - 1) / (circles.length - 1) * 100 + '%';
});

next.addEventListener('click', () => {
    circles[current].classList.add('active');
    if (++current === circles.length) {
        next.disabled = true;
    }
    prev.disabled = false;
    progress.style.width = (current - 1) / (circles.length - 1) * 100 + '%';
});