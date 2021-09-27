/******************************************
 *  Author : Huu Quoc   
 *  Created On : Mon Sep 27 2021
 *******************************************/

const item = document.getElementById('item');
const frames = document.querySelectorAll('.frame');

item.addEventListener('dragstart', () => {
    setTimeout(() => item.classList.add('onhold'), 0);
});

item.addEventListener('dragend', () => {
    item.classList.remove('onhold');
});

frames.forEach(frame => {
    frame.addEventListener('dragover', (event) => {
        event.preventDefault();
    });
    frame.addEventListener('dragenter', () => {
        frame.classList.add('hovered');
    });
    frame.addEventListener('dragleave', () => {
        frame.classList.remove('hovered');
        frame.classList.remove('active');
    });
    frame.addEventListener('drop', () => {
        frame.classList.remove('hovered');
        frame.classList.add('active');
        frame.append(item);
    });
});