const mainHeader = document.querySelector('.main-header');
const topHeader = document.querySelector('.top-header-wrapper');
const minLogoWidth = 180;
const maxLogoWidth = 920;
const logoPadTop = 80;

let topHeaderHeight = topHeader.offsetHeight;
let mainHeaderHeight = mainHeader.offsetHeight;

const headerComponent = () => {
    const headerWrapper = document.querySelector('.header-wrapper');
}

window.addEventListener('resize', function() {
    mainHeaderHeight = mainHeader.offsetHeight;
    topHeaderHeight = topHeader.offsetHeight;
});

window.addEventListener('load', function() {
    mainHeaderHeight = mainHeader.offsetHeight;
    topHeaderHeight = topHeader.offsetHeight;
    const html = document.documentElement;
    const mainContent = document.querySelector('#MainContent');
    let mainLogo = document.querySelector('.main-header .logo-wrapper');

    window.addEventListener('scroll', function() {


        if (html.scrollTop >= topHeaderHeight) {
            document.body.classList.add('sticky-header');
            mainContent.style.marginTop = mainHeader.offsetHeight+'px';
            document.querySelector('.main-header .header-intro-text').classList.add('fade-up');
        } else {
            document.body.classList.remove('sticky-header');
            mainContent.style.marginTop = '0px';
            document.querySelector('.main-header .header-intro-text').classList.remove('fade-up');
        }

        // Resizing of logo base on scroll;
        console.log('scroll', html.scrollTop);
        if (html.scrollTop <= mainHeaderHeight && mainLogo.offsetWidth >= 180) {
            let logoWidth = ((mainHeaderHeight - html.scrollTop) / mainHeaderHeight) * maxLogoWidth;
            let logoPaddingTop = ((mainHeaderHeight - html.scrollTop) / mainHeaderHeight) * logoPadTop;
            mainLogo.style.width = logoWidth+'px';
            mainLogo.style.paddingTop = logoPaddingTop+'px';
        } else {
            mainLogo.style.width = minLogoWidth+'px';
            mainLogo.style.paddingTop = '0px';
        }

        // if (html.scrollTop >= (mainHeaderHeight / 6)) {
        //     document.querySelector('.main-header .header-intro-text').classList.add('fade-up');
        // } else {
        //     document.querySelector('.main-header .header-intro-text').classList.remove('fade-up');
        // }
    });
});

export default headerComponent;