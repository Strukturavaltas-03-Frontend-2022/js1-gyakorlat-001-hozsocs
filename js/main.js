'use strict';
    
let elements = document.querySelectorAll('.button');
function handleClick(i=0) {
        elements[i].addEventListener('click', function () {
            console.log ('Item ' + elements[i].textContent); 
        })
}

for (let i = 0; i < elements.length; i ++) {
    handleClick(i);
}




