$(function() {
    //FIXED HEADER AND BACK TO TOP BTN

    let header = document.querySelector("header")
    let banner = document.querySelector(".banner")
    let backToTopBtn = document.querySelector(".back-to-top-btn");

    banner.style.marginTop = header.offsetHeight + "px";

    window.addEventListener('scroll', () => {
        let scrollTop = window.scrollY;
        if(scrollTop>100){
            header.classList.add("fixed-header")
            backToTopBtn.style.opacity = 1;
            backToTopBtn.style.zIndex = 90;
            banner.style.marginTop = header.offsetHeight + "px";
        }else{
            header.classList.remove("fixed-header")
            backToTopBtn.style.opacity = 0;
            backToTopBtn.style.zIndex = -1;
            banner.style.marginTop = header.offsetHeight + "px";
        }
    })

    //DISPLAY MENU

    let openMenuBtn = document.querySelector(".open-menu")
    let exitMenuBtn = document.querySelector(".exit-menu")
    let menuWrap = document.querySelector("header nav")

    openMenuBtn.addEventListener('click', () => {
        menuWrap.classList.add('display-menu')
    })
    exitMenuBtn.addEventListener('click', () => {
        menuWrap.classList.remove('display-menu')
    })
    //TOP PICKS, ADVERTISE WITH US AND LATEST BLOG CAROUSEL

    if(document.querySelector(".global-home-carousels")){
        $('.global-home-carousels').slick({
            dots: true,
            infinite: true,
            speed: 300,
            arrows:false,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            responsive: [
            {
                breakpoint: 991.98,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 767.98,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 550.98,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
    
            ]
        });
    }
});