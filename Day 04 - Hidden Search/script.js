/******************************************
 *  Author : Huu Quoc   
 *  Created On : Fri Sep 10 2021
 *******************************************/

const button = document.querySelector('button');
const container = document.querySelector('.container');

button.addEventListener('click', () => {
    if (container.classList.contains('active')) {
        container.classList.remove('active');
    } else {
        container.classList.add('active');
    }
});