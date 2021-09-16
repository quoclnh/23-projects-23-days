/******************************************
 *  Author : Huu Quoc   
 *  Created On : Wed Sep 15 2021
 *******************************************/

const buttons = document.querySelectorAll('button');
const audios = document.querySelectorAll('audio');

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', () => {
        stopAll();
        audios[i].play();
    });
}

function stopAll() {
    audios.forEach(audio => {
        audio.pause();
        audio.currentTime = 0;
    });
}