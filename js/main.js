'use strict';
    

const handleClick = () => {
    const elements = document.querySelectorAll(".button");
    elements.forEach((el) =>
      el.addEventListener("click", () => {
        console.log(el.innerHTML);
      })
    );
  };

for (let i = 0; i < elements.length; i ++) {
    handleClick(i);
}




