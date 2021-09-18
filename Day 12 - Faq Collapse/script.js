/******************************************
 *  Author : Huu Quoc   
 *  Created On : Sat Sep 18 2021
 *******************************************/

const contents = document.querySelectorAll('.content');

contents.forEach(content => {
    var button = document.createElement('button');
    var icon = document.createElement('i');

    content.appendChild(button);
    button.appendChild(icon);

    button.classList.add('toggle');
    icon.classList.add('fas', 'fa-chevron-down');

    button.addEventListener('click', () => {
        content.classList.toggle('active');
        if (content.classList.contains('active')) {
            icon.classList.add('fa-chevron-up');
            icon.classList.remove('fa-chevron-down');
        } else {
            icon.classList.add('fa-chevron-down');
            icon.classList.remove('fa-chevron-up');
        }
    });
});