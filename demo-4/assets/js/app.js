/*!
 * Item: Kitzu
 * Description: Personal Portfolio Template
 * Author/Developer: Exill
 * Author/Developer URL: https://themeforest.net/user/exill
 * Version: v1.1.0
 * License: Themeforest Standard Licenses: https://themeforest.net/licenses
 */
//Loader
window.addEventListener('load', function() {
    document.querySelector('.loader').classList.add("none")
});
//Nav scroll
const navBar = document.querySelector(".navbar");
window.onscroll = () => {
    this.scrollY > 20 ? navBar.classList.add("sticky") : navBar.classList.remove("sticky");
};

//  Highlight the top nav as scrolling occurs. /bootstrap/
$('body').scrollspy({
    target: '#navbarNav',
    offset: 80
});

//smooth scroll
var scroll = new SmoothScroll('a[href*="#"]', {
    speed: 1000,
    speedAsDuration: true
});

//Magnific Popup
$(document).ready(function() {
    $('.portfolio-gallery').magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1]
        },
        image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
            titleSrc: function(item) {
                //insert your brand identy here in small tag
                return item.el.attr('title') + '<small>by OpacityThemes</small>';
            }
        }
    });
});

//For brand carousel
$('.brand-carousel').owlCarousel({
    loop: true,
    margin: 40,
    autoplay: true,
    dots: false,
    responsiveClass: true,
    responsive: {
        0: {
            items: 2,
        },
        600: {
            items: 3,
        },
        1000: {
            items: 5,
        }
    }
});

//gallery Filter
const filterContainer = document.querySelector(".port-nav-list"),
    galleryItems = document.querySelectorAll(".port-item");

filterContainer.addEventListener("click", (event) => {
    if (event.target.classList.contains("filter-item")) {
        //deactivate active state
        filterContainer.querySelector(".active").classList.remove("active");
        //activate new 
        event.target.classList.add("active");
        const filterValue = event.target.getAttribute("data-filter");
        galleryItems.forEach((item) => {
            if (item.classList.contains(filterValue) || filterValue === 'all') {
                item.classList.add("show");
                item.classList.remove("hide")
            } else {
                item.classList.remove("show");
                item.classList.add("hide");
            }
        })
    }
});
//lightbox Single Portfolio Dependence

$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 30,
    nav: false,
    autoplay: true,
    autoplayTimeout: 2500,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1
        },
        767: {
            items: 2
        },
        1000: {
            items: 3
        }
    }
});

//Jqurey form validation
(function() {
    'use strict';
    window.addEventListener('load', function() {
        var forms = document.getElementsByClassName('needs-validation');
        var validation = Array.prototype.filter.call(forms, function(form) {
            form.addEventListener('submit', function(event) {
                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                form.classList.add('was-validated');
            }, false);
        });
    }, false);
})();