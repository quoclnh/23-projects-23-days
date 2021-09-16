/******************************************
 *  Author : Huu Quoc   
 *  Created On : Sun Sep 12 2021
 *******************************************/

const contents = document.querySelectorAll('.content');

checkView();

window.addEventListener('scroll', checkView);

function checkView() {

    contents.forEach(content => {
        const trigger = window.innerHeight - content.clientHeight / 3 * 2;
        const topContent = content.getBoundingClientRect().top;

        if (topContent < trigger) {
            content.classList.add('show');
        } else {
            content.classList.remove('show');
        }
    });
}