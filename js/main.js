const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');
const navLink = document.querySelectorAll('.nav__link');
const sidebarToggle = document.getElementById('sidebar-toggle');
const sidebar = document.getElementById('sidebar');

/* OPEN AND CLOSE NAVIGATION MENU */
navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('nav__menu--open');

    // CLOSE THE SIDEBAR WHEN WE OPEN THE NAVIGATION MENU
    if( sidebar.classList.contains('sidebar--open')) {
        sidebar.classList.remove('sidebar--open');
    }

    changeToggleIcon(navMenu, 'nav__menu--open', navToggle, 'ri-menu-3-line', 'ri-close-line');
    changeToggleIcon(sidebar, "sidebar--open", sidebarToggle, 'ri-more-2-fill', 'ri-close-line');
})

navLink.forEach( link => {
    link.addEventListener('click', () => {
        if(navMenu.classList.contains('nav__menu--open')){
            navMenu.classList.remove('nav__menu--open');
        }
        changeToggleIcon(navMenu, 'nav__menu--open', navToggle, 'ri-menu-3-line', 'ri-close-line');
    })
})

/* OPEN AND CLOSE SIDEBAR */
sidebarToggle.addEventListener('click', () => {
    sidebar.classList.toggle('sidebar--open');

    // CLOSE THE MOBILE MENU WHEN WE OPEN THE SIDEBAR
    if(navMenu.classList.contains('nav__menu--open')){
        navMenu.classList.remove('nav__menu--open');
    }
    changeToggleIcon(navMenu, 'nav__menu--open', navToggle, 'ri-menu-3-line', 'ri-close-line');
    changeToggleIcon(sidebar, "sidebar--open", sidebarToggle, 'ri-more-2-fill', 'ri-close-line');
})

// CHANGE TOGGLE ICONS
function changeToggleIcon(element, elementClass, toggleIcon, openIcon, closeIcon ) {
    element.classList.contains(elementClass) ? toggleIcon.classList.replace(openIcon, closeIcon) : toggleIcon.classList.replace(closeIcon, openIcon);
}

// Filter Menu Items
let mixMenu = mixitup('.menu__wrapper', {
    load: {
        filter: '.breakfast',
    },
    selectors: {
        target: '.menu__card',
    },
    animation: {
        duration: 800,
    }
})

const menuItems = document.querySelectorAll('.menu__item');

menuItems.forEach( item => item.addEventListener('click', activeMenuItem));

function activeMenuItem() {
    menuItems.forEach( item => item.classList.remove('menu__item--active'));
    this.classList.add('menu__item--active');
}

//ScrollReveal Animations

const sr = ScrollReveal({
    distance: '100px',
    duration: 2000,
    delay: 300,
});

sr.reveal('.home__content')
sr.reveal('.home__img', {origin: 'top' })
sr.reveal('.feature__card', { interval: 200 })
sr.reveal('.about__img', {origin: 'left'})
sr.reveal('.about__content', {origin: 'right'})
sr.reveal('.testimonial__card, .blog__post, .footer__content', {
    interval: 200,
});