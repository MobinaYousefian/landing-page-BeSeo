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