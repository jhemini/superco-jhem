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
    } else if (viewportWidth < 1440) {
        minLogoWidth = 180;
        maxLogoWidth = 600;
        logoPadTop = 80;
        imageBannerBottom = imageBannerTop + imageBanner.offsetHeight - 400;
    } else {

    }
});

window.addEventListener('load', function() {
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
            headerIntro.style.opacity = ((mainHeaderHeight - html.scrollTop) / mainHeaderHeight);
        } else {
            headerIntro.style.opacity = 0;
        }

        if (html.scrollTop >= imageBannerBottom) {
            document.body.classList.add('header-transparent');
        } else {
            document.body.classList.remove('header-transparent');
        }
    });
});

export default headerComponent;