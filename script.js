// nav bar function 
const burgericon = document.querySelector('#icon');
const navMenu = document.querySelector('#nav-menu')
burgericon.addEventListener('click', function() {
    navMenu.classList.toggle('show');
    console.log('hi');
})