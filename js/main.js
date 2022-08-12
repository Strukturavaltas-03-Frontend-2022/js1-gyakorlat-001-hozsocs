'use strict';
    

function handleClick(i=0) {
    let elements = document.querySelectorAll('.button');
        elements[i].addEventListener('click', function () {
            console.log (elements[i].textContent); 
        })
}

for (let i = 0; i < elements.length; i ++) {
    handleClick(i);
}




