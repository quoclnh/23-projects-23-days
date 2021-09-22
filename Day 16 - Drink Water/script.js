/******************************************
 *  Author : Huu Quoc   
 *  Created On : Wed Sep 22 2021
 *******************************************/

const cups = document.querySelectorAll('.picker .cup');

cups.forEach((cup, idx) => {
    cup.addEventListener('click', () => {
        if (idx === 0 && cups[0].classList.contains('active') && !cups[1].classList.contains('active')) {
            updateSmallCups(-1);
            updateBigCup(-1);
        } else {
            updateSmallCups(idx);
            updateBigCup(idx);
        }
    });
});

function updateSmallCups(idx) {
    for (let i = 0; i < 8; i++) {
        if (i <= idx) {
            cups[i].classList.add('active');
        } else {
            cups[i].classList.remove('active');
        }
    }
}

function updateBigCup(idx) {
    const remaining = document.getElementById('remaining');
    const percentage = document.getElementById('percentage');
    const title1 = document.getElementById('title1');
    const title2 = document.getElementById('title2');
    const portion = 0.125 * (idx + 1);

    remaining.style.visibility = (portion === 1) ? 'hidden' : 'visible';
    percentage.style.visibility = (portion === 0) ? 'hidden' : 'visible';

    remaining.innerHTML = 2 - portion * 2 + 'l';
    percentage.innerHTML = 100 * portion + '%';

    remaining.style.height = 100 * (1 - portion) + '%';
    percentage.style.height = 100 * portion + '%';

    const level = (100 * portion + 30) / 1.7;
    title1.style.backgroundImage = title2.style.backgroundImage = `linear-gradient(to top, #37b9ff 0% ${level}%, #ffffff ${level}% 100%)`;
}