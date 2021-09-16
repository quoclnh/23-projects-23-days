/******************************************
 *  Author : Huu Quoc   
 *  Created On : Mon Sep 13 2021
 *******************************************/

const containers = document.querySelectorAll('.container');

for (let i = 0; i < 2; i++) {
    containers[i].addEventListener('mouseenter', () => {
        containers[i].classList.add('hovered');
        containers[1 - i].classList.add('unhovered');
    });
    containers[i].addEventListener('mouseleave', () => {
        containers[i].classList.remove('hovered');
        containers[1 - i].classList.remove('unhovered');
    });
}