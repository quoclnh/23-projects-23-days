/******************************************
 *  Author : Huu Quoc   
 *  Created On : Sat Sep 25 2021
 *******************************************/

const button = document.querySelector('button');
const html = document.querySelector('html');
button.addEventListener('click', () => {
    html.classList.toggle('light-mode');
});

const hourNeedle = document.querySelector('.needle.hour');
const minuteNeedle = document.querySelector('.needle.minute');
const secondNeedle = document.querySelector('.needle.second');

setInterval(setTime, 1000);

function setTime() {
    const mapMonth = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const mapWeekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    const dateTime = new Date();
    const weekday = dateTime.getDay();
    const year = dateTime.getFullYear();
    const month = dateTime.getMonth();
    const day = dateTime.getDate();
    const hour24 = dateTime.getHours();
    const hour = hour24 > 12 ? hour24 % 12 : hour24;
    const minute = dateTime.getMinutes();
    const second = dateTime.getSeconds();
    const period = hour24 >= 12 ? 'PM' : 'AM';

    const time = document.querySelector('.time');
    time.innerHTML = `${hour}:` + (minute < 10 ? '0' : '') + `${minute} ${period}`;

    const date = document.querySelector('.date');
    date.innerHTML = `${mapWeekday[weekday]}, ${mapMonth[month]} ${day}, ${year}`;

    hourNeedle.style.transform = `translate(-50%, -100%) rotate(${circleScale(hour, 12, 360) + circleScale(minute, 60, 30) + circleScale(second, 60, 0.5)}deg)`;
    minuteNeedle.style.transform = `translate(-50%, -100%) rotate(${circleScale(minute, 60, 360) + circleScale(second, 60, 6)}deg)`;
    secondNeedle.style.transform = `translate(-50%, -100%) rotate(${circleScale(second, 60, 360)}deg)`;
}

function circleScale(value, max, maxDegree) {
    return value * maxDegree / max;
}