/******************************************
 *  Author : Huu Quoc   
 *  Created On : Thu Sep 09 2021
 *******************************************/

const list = document.querySelectorAll('li');
let i = 0;
list.forEach(item => {
    item.style.marginLeft = 15 * (i++) + 'px';
    item.style.transform = 'translateX(' + (-100 * i) + '%)';
});

const showBtn = document.getElementById('show');
const hideBtn = document.getElementById('hide');
const content = document.querySelector('.content');
const circle = document.querySelector('.circle-container');

showBtn.addEventListener('click', () => {
    content.classList.add('show-nav');
    circle.classList.add('show-nav');
});

hideBtn.addEventListener('click', () => {
    content.classList.remove('show-nav');
    circle.classList.remove('show-nav');
});