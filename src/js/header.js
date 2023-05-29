const mainHeader = document.querySelector('.main-header');
const topHeader = document.querySelector('.top-header-wrapper');
const html = document.documentElement;
const mainContent = document.querySelector('#MainContent');
const headerIntro = document.querySelector('.main-header .header-intro-text');
let topHeaderHeight = topHeader.offsetHeight;
let mainHeaderHeight = mainHeader.offsetHeight;
const imageBanner = document.querySelector('.banner-image-section');
let imageBannerTop = imageBanner.offsetTop;
let imageBannerBottom = imageBannerTop + imageBanner.offsetHeight - 500;
let mainLogo = document.querySelector('.main-header .logo-wrapper');
let minLogoWidth = 180;
let maxLogoWidth = 920;
let logoPadTop = 80;

const headerComponent = () => {
    const headerWrapper = document.querySelector('.header-wrapper');
}

window.addEventListener('resize', function() {
    mainHeaderHeight = mainHeader.offsetHeight;
    topHeaderHeight = topHeader.offsetHeight;
    imageBannerTop = imageBanner.offsetTop;

    let viewportWidth = document.documentElement.offsetWidth;

    if (viewportWidth >= 1440) {
        minLogoWidth = 180;
        maxLogoWidth = 920;
        logoPadTop = 80;
        imageBannerBottom = imageBannerTop + imageBanner.offsetHeight - 500;
    } else if (viewportWidth >= 768 && viewportWidth < 1440) {
        minLogoWidth = 180;
        maxLogoWidth = 600;
        logoPadTop = 80;
        imageBannerBottom = imageBannerTop + imageBanner.offsetHeight - 400;
    } else if (viewportWidth >= 320 && viewportWidth < 768) {
        minLogoWidth = 104;
        maxLogoWidth = viewportWidth - 40;
        logoPadTop = 80;
        imageBannerBottom = imageBannerTop + imageBanner.offsetHeight - 200;
    }
});

window.addEventListener('load', function() {
    let cartDrawerClose = document.querySelector('.cart-drawer .close-cart-drawer');
    let cartToggle = document.querySelector('.nav-icon-wrapper .cart-toggle');
    mainHeaderHeight = mainHeader.offsetHeight;
    topHeaderHeight = topHeader.offsetHeight;
    window.dispatchEvent(new Event('resize'));

    window.addEventListener('scroll', function() {
        if (html.scrollTop >= topHeaderHeight) {
            document.body.classList.add('sticky-header');
            mainContent.style.marginTop = mainHeader.offsetHeight+'px';
        } else {
            document.body.classList.remove('sticky-header');
            mainContent.style.marginTop = '0px';
        }

        // Resizing of logo base on scroll;
        if (html.scrollTop <= mainHeaderHeight && mainLogo.offsetWidth >= minLogoWidth) {
            let logoWidth = ((mainHeaderHeight - html.scrollTop) / mainHeaderHeight) * maxLogoWidth;
            let logoPaddingTop = ((mainHeaderHeight - html.scrollTop) / mainHeaderHeight) * logoPadTop;
            mainLogo.style.width = logoWidth+'px';
            mainLogo.style.paddingTop = logoPaddingTop+'px';
        } else {
            mainLogo.style.width = minLogoWidth+'px';
            mainLogo.style.paddingTop = '0px';
        }

        if ((html.scrollTop <= (mainHeaderHeight / 4))) {
            headerIntro.classList.remove('collapse');
        } else {
            headerIntro.classList.add('collapse');
        }

        // Changing sticky header background color
        if (html.scrollTop >= imageBannerBottom) {
            document.body.classList.add('header-transparent');
        } else {
            document.body.classList.remove('header-transparent');
        }
    });

     // Cart Drawer Functions
    cartToggle.addEventListener('click', function() {
        if(document.body.classList.contains('cart-active')) {
            document.body.classList.remove('cart-active');
        } else {
            document.body.classList.add('cart-active');
        }
    });
    cartDrawerClose.addEventListener('click', function() {
        if(document.body.classList.contains('cart-active')) {
            document.body.classList.remove('cart-active');
        }
    });
});

window.addEventListener('DOMContentLoaded', function() {
    let hamburgerIcon = document.querySelector('.hamburger-wrapper');

    hamburgerIcon.addEventListener('click', function() {
        if (document.body.classList.contains('mobile-menu-active')) {
            document.body.classList.remove('mobile-menu-active');
        } else {
            document.body.classList.add('mobile-menu-active');
        }
    });
});

export default headerComponent;