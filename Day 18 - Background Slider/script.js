/******************************************
 *  Author : Huu Quoc   
 *  Created On : Fri Sep 24 2021
 *******************************************/

const background = document.querySelector('.background');
const translateDistance = -1366;
const backgroundLength = document.querySelectorAll('img').length;
const leftArrow = document.getElementById('left-arrow');
const rightArrow = document.getElementById('right-arrow');

let currentActive = 0;

leftArrow.addEventListener('click', moveLeft);
rightArrow.addEventListener('click', moveRight);
window.addEventListener('keyup', (event) => {
    if (event.key === "ArrowLeft") moveLeft();
    if (event.key === "ArrowRight") moveRight();
});

function moveLeft() {
    if (--currentActive < 0) {
        currentActive = backgroundLength - 1;
    }
    moveto(currentActive);
}

function moveRight() {
    if (++currentActive === backgroundLength) {
        currentActive = 0;
    }
    moveto(currentActive);
}

function moveto(position) {
    background.style.transform = `translateX(${translateDistance * position}px)`;
}