/******************************************
 *  Author : Huu Quoc   
 *  Created On : Tue Sep 28 2021
 *******************************************/

const canvas = document.getElementById('canvas');
const incBtn = document.getElementById('increase-size');
const decBtn = document.getElementById('decrease-size');
const sizeEl = document.getElementById('size');
const colorPicker = document.getElementById('color');
const clearBtn = document.getElementById('clear-frame');

const context = canvas.getContext('2d');

let size = 10;
sizeEl.innerHTML = size;

let color = colorPicker.value;
let isPressed = false;
let x, y;

canvas.addEventListener('mousedown', (event) => {
    isPressed = true;
    x = event.offsetX;
    y = event.offsetY;
    console.log(x, y);
});

document.addEventListener('mouseup', (event) => {
    isPressed = false;
    x = undefined;
    y = undefined;
});

canvas.addEventListener('mousemove', (event) => {
    if (isPressed) {
        const x0 = x;
        const y0 = y;
        x = event.offsetX;
        y = event.offsetY;

        drawCircle(x, y);
        drawLine(x0, y0, x, y);
    }
});

function drawCircle(x, y) {
    context.beginPath();
    context.arc(x, y, size, 0, Math.PI * 2);
    context.fillStyle = color;
    context.fill();
}

function drawLine(x0, y0, x, y) {
    context.beginPath();
    context.moveTo(x0, y0);
    context.lineTo(x, y);
    context.strokeStyle = color;
    context.lineWidth = size * 2;
    context.stroke();
}

incBtn.addEventListener('click', () => {
    size += 2;
    if (size > 50) size = 50;
    sizeEl.innerHTML = size;
});

decBtn.addEventListener('click', () => {
    size -= 2;
    if (size < 2) size = 2;
    sizeEl.innerHTML = size;
});

colorPicker.addEventListener('change', (event) => color = event.target.value);

clearBtn.addEventListener('click', () => context.clearRect(0, 0, canvas.width, canvas.height));