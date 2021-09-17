/******************************************
 *  Author : Huu Quoc   
 *  Created On : Fri Sep 17 2021
 *******************************************/

const values = document.querySelectorAll('.info .value');

window.addEventListener('keydown', (event) => {
    values[0].innerHTML = event.key;
    values[1].innerHTML = event.keyCode;
    values[2].innerHTML = event.code;

    if (event.keyCode === 32) {
        values[0].innerHTML = 'Space';
    }
});