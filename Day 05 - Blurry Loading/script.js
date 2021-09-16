/******************************************
 *  Author : Huu Quoc   
 *  Created On : Sat Sep 11 2021
 *******************************************/

const loading = document.getElementById('loading');
const background = document.getElementById('background');
let percent = 0;

var run = setInterval(load, 10);

function load() {
    percent++;
    loading.innerHTML = percent + '%';
    background.style.filter = 'blur(' + (20 - (percent / 5)) + 'px)';
    clearInterval(run);

    if (percent < 100) {
        run = setInterval(load, percent);
    } else {
        loading.style.color = 'rgb(255, 187, 109)';
        loading.style.opacity = '0';
    }
}