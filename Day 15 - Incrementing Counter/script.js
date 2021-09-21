/******************************************
 *  Author : Huu Quoc   
 *  Created On : Tue Sep 21 2021
 *******************************************/

const counters = document.querySelectorAll('.counter');
const numberOfStep = 200;

counters.forEach(counter => {
    const target = counter.getAttribute('data-target');
    const step = target / numberOfStep;
    const count = 0;
    counter.innerHTML = count;

    increment(counter, count, target, step);
});

function increment(counter, count, target, step) {
    count = Math.ceil(count + step);
    const duration = Math.ceil(count * 40 / target);
    if (count < target) {
        counter.innerHTML = +count;
        setTimeout(() => { increment(counter, count, target, step) }, duration);
    } else {
        counter.innerHTML = +target;
    }
}