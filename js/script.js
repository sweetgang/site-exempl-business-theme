
//menu burger
const iconMenu = document.querySelector('.menu_icon');
const mobMenu = document.querySelector('.header__title');
if (iconMenu) {
    iconMenu.addEventListener("click", function (e) {
        document.body.classList.toggle('_lock');
        iconMenu.classList.toggle('_active');
        mobMenu.classList.toggle('_active');
    })
}

// scroll
const menuLinks = document.querySelectorAll('[data-goto]');
if (menuLinks.length > 0) {
    menuLinks.forEach(link => {
        link.addEventListener("click", onMenuLinkCliick);
    });
    function onMenuLinkCliick(e) {
        const link = e.target.parentNode;
        if (link.dataset.goto && document.querySelectorAll(link.dataset.goto)) {
            const gotoBlock = document.querySelector(link.dataset.goto);
            const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset;
            if (iconMenu.classList.contains('_active')) {
                document.body.classList.remove('_lock');
                iconMenu.classList.remove('_active');
                mobMenu.classList.remove('_active');
            }

            window.scrollTo({
                top: gotoBlockValue,
                behavior: "smooth"
            });
            e.preventDefault();
        }
    }
}


// slider
const sliderBlock = document.querySelector('.request-quote__slider');
if (sliderBlock) {
    const sliderPoints = sliderBlock.children;
    const sliderImgs = document.querySelectorAll('.request-quote__inside-image');
    sliderBlock.addEventListener("click", slideElement);
    function slideElement(e) {
        actPoint = e.target;
        if (!actPoint.classList.contains('slider-active')) {
            for (var i = 0; i < sliderPoints.length; i++) {
                if (sliderPoints[i].classList.contains('slider-active')) {
                    sliderPoints[i].classList.remove('slider-active');
                    sliderImgs[i].classList.remove('slider-active');
                }
                if (sliderPoints[i] == actPoint) {
                    sliderImgs[i].classList.add('slider-active');
                }
            }
            actPoint.classList.add('slider-active');
        }
    }
}