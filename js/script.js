$(document).ready(function(){
    $('.reviews__carousel').slick({
        speed: 800,
        slidesToShow: 1,
        adaptiveHeight: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="img/left_arrow.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="img/right_arrow.svg"></button>',
        responsive: [
            {
                    breakpoint: 768,
                    settings: {
                      dots: true,
                      arrows: false
                }
            }
        ]
      });
  });
  window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menu'),
    menuItem = document.querySelectorAll('.menu__item'),
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger__active');
        menu.classList.toggle('menu_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger__active');
            menu.classList.toggle('menu_active');
        })
    })
})