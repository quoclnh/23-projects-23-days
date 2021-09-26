/******************************************
 *  Author : Huu Quoc   
 *  Created On : Sun Sep 26 2021
 *******************************************/

const button = document.querySelector('button');

button.addEventListener('click', (event) => {
    const x = event.clientX - button.offsetLeft;
    const y = event.clientY - button.offsetTop;

    const circle = document.createElement('span');
    circle.classList.add('ripple');
    button.appendChild(circle);

    circle.style.left = x + 'px';
    circle.style.top = y + 'px';

    setTimeout(() => { circle.remove() }, 750);
});