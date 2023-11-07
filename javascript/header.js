// to open the mobile menu
function openNav() {
    document.getElementById("mobileMenu").style.right = "0";
    document.getElementById("main").style.opacity = "0.4";
}

//to close the mobile menu
function closeNav() {
    document.getElementById("mobileMenu").style.right = "-100%";
    document.getElementById("main").style.opacity = "1";
}

//transition header on scroll
let header = document.querySelectorAll('.header');
let headerLogo = document.querySelectorAll('.header__logo')

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        header.classList.add('header-onscroll');
        headerLogo.classList.add('logo-onscroll');
    } else {
        header.classList.remove('header-onscroll');
        headerLogo.classList.remove('logo-onscroll');
    }
}

//to make the open page active on the menu
const activeMenuHandler = (activeTabName) => {
    let home = document.getElementById('home');
    let aboutUs = document.getElementById('about us');
    let services = document.getElementById('services');
    let faq = document.getElementById('faq');
    let contactUs = document.getElementById('contact us');
    switch (activeTabName) {
        case 'aboutUs':
            home.className = '';
            aboutUs.className = 'active';
            services.className = '';
            faq.className = '';
            contactUs.className = '';
            break;
        case 'services':
            home.className = '';
            aboutUs.className = '';
            services.className = 'active';
            faq.className = '';
            contactUs.className = '';
            break;
        case 'faq':
            home.className = '';
            aboutUs.className = '';
            services.className = '';
            faq.className = 'active';
            contactUs.className = '';
            break;
        case 'contactUs':
            home.className = '';
            aboutUs.className = '';
            services.className = '';
            faq.className = '';
            contactUs.className = 'active';
            break;
        default:
            home.className = 'active';
            aboutUs.className = '';
            services.className = '';
            faq.className = '';
            contactUs.className = '';
            break;
    }
}