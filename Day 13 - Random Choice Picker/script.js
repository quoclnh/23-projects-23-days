/******************************************
 *  Author : Huu Quoc   
 *  Created On : Sun Sep 19 2021
 *******************************************/

const container = document.querySelector('.choice-container');
const textarea = document.getElementById('input');

textarea.focus();

input.addEventListener('keyup', (event) => {
    if (event.key === 'Enter') {
        roll();
        event.target.value = '';
    } else {
        updateChoices(event.target.value);
    }
});

function updateChoices(input) {
    const choices = input.split(',').map(choice => choice.trim()).filter(choice => choice !== '');
    container.innerHTML = '';
    choices.forEach(choice => {
        const tag = document.createElement('p');
        tag.classList = 'choice';
        tag.innerHTML = choice;
        container.appendChild(tag);
    });
}

function roll() {
    const choices = document.querySelectorAll('.choice');
    var currentChoice = 0;
    const time = 30;
    const duration = 150;

    const interval = setInterval(function() {
        var newChoice = Math.floor(Math.random() * choices.length);

        while (newChoice === currentChoice) {
            newChoice = Math.floor(Math.random() * choices.length);
        }

        unhighlight(choices[currentChoice]);
        highlight(choices[newChoice]);
        currentChoice = newChoice;

    }, duration);

    setTimeout(() => {
        clearInterval(interval);
        blink(choices[currentChoice]);
    }, duration * time);
}

function highlight(choice) {
    choice.classList.add('highlight');
}

function unhighlight(choice) {
    choice.classList.remove('highlight');
}

function blink(choice) {
    const interval = setInterval(function() {
        unhighlight(choice);
        setTimeout(function() {
            highlight(choice);
        }, 100);
    }, 200);

    setTimeout(function() {
        clearInterval(interval);
    }, 1000);
}