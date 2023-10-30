const hamburger = document.querySelector(".hamburger"),
    navContainer = document.querySelector(".navlists"),
    navLink = document.querySelectorAll(".navlists a"),
    countContainer = document.querySelector(".services-section"),
    counts = document.querySelectorAll(".count"),
    html = document.querySelector("html"),
    searchBtn = document.querySelector(".home-section-submit-btn");


window.addEventListener('load', () => {
    searchBtn.addEventListener("click", (e) => {
        // prevent search form submitting
        e.preventDefault();
    });

    // Hamburger Functionality
    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        navContainer.classList.toggle("active-nav");
        html.classList.toggle("html-scroll");
    })

    //remove active
    navLink.forEach(e => {
        e.addEventListener("click", () => {
            hamburger.classList.remove("active");
            navContainer.classList.remove("active-nav");
            html.classList.remove("html-scroll");
        })
    });

    //   slider implementation
    const slider = $(document).ready(function () {
        $('.owl-carousel').owlCarousel({
            loop: true,
            margin: 25,
            responsiveClass: true,
            autoplay: true,
            autoplayTimeout: 2500,
            autoplayHoverPause: true,
            responsive: {
                0: {
                    items: 1,
                    nav: true,
                    loop: true
                },
                600: {
                    items: 1,
                    nav: true,
                    loop: true
                },
                1000: {
                    items: 3,
                    nav: true,
                    loop: true
                }
            }
        })
    })

    // Counter Logic
    let activated = false;
    const updateCount = (countElem) => {
            const speed = 400,
                endVal = +countElem.getAttribute("data-count"),
                startVal = +countElem.innerText,
                increment = Math.trunc(endVal / speed);
            if (startVal < endVal) {
                countElem.innerText = startVal + increment;
                setTimeout(() => updateCount(countElem));
            } else {
                countElem.innerText = endVal;
            }
        };

        const counterVisible = () => {
            if (scrollY > countContainer.offsetTop - countContainer.offsetHeight - 900 && activated === false) {
                counts.forEach(countElem => {
                    countElem.innerText = 0;
                    updateCount(countElem);
                });
                activated = true;
            } else if (scrollY < countContainer.offsetTop - countContainer.offsetHeight - 900 || scrollY === 0 && activated === true) {
                counts.forEach(countElem => {
                    countElem.innerText = 0;
                });
                activated = false;
            }
        };
        
        window.addEventListener('scroll', () => {
            if(window.scrollY > countContainer.offsetTop-400 ){
                counterVisible();
            }
        });
});
