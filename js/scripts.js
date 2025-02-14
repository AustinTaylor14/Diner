const hamburgerElement = document.querySelector('#myButton');
const navElement = document.querySelector('.menuLinks');

console.log(hamburgerElement, navElement);  

hamburgerElement.addEventListener('click', () => {
    hamburgerElement.classList.toggle('open');
    navElement.classList.toggle('open');
});