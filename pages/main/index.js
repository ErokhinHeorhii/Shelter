// Burger menu 

const burger =document.querySelector('.header-burger')
const burgersLines = document.querySelectorAll('.burger-line')
const navList = document.querySelector('.nav-list')

function toggleBurgerMenu() {
burgersLines.forEach(item=> item.classList.toggle('active-burger-line'))
}
burger.addEventListener('click' , toggleBurgerMenu);
burger.addEventListener('click' , toggleNavMenu);


function toggleNavMenu() {
    navList.classList.toggle('active-nav-list')
}


function closeMenu(event) {
    if(event.target. classList.contains('nav-link')){
        burgersLines.forEach(item=> item.classList.remove('active-burger-line'))
        navList.classList.remove('active-nav-list')
    }
}

navList.addEventListener('click', closeMenu)