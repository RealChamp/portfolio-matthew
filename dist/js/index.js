"use strict";

(function ($) {
  $(function () {
    var _this = this;

    $(window).on('load', function () {
      // Preloader
      $('.loader').fadeOut(1000);
      var wow = new WOW({
        offset: 150,
        mobile: false
      });
      wow.init();
    }); // End of Preloader
    // SideBar Menu

    $('.navbar-toggle').on('click', function () {
      $('body').removeClass('menu-is-closed').addClass('menu-is-opened');
    });
    $('.close-menu, .click-capture, .menu-list li a').on('click', function () {
      $('body').removeClass('menu-is-opened').addClass('menu-is-closed');
      $('.menu-list ul').slideUp(300);
    });
    $('.menu-list li a').on('click', function () {
      $('.menu-list li').removeClass('active');
      $(_this).closest('li').addClass('active');
    });
    $('.col-resume').on('mouseover', function () {
      $('.section-bg.mask').addClass('hide');
    });
    $('.col-resume').on('mouseleave', function () {
      $('.section-bg.mask').removeClass('hide');
    }); // End of menu SideBar
    // Owl Carousel

    if ($('.owl-carousel').length > 0) {
      $('.review-carousel').owlCarousel({
        dots: true,
        nav: false,
        navText: [],
        responsiveRefreshRate: 0,
        responsive: {
          0: {
            items: 1
          },
          720: {
            items: 1
          },
          1280: {
            items: 1
          }
        }
      });
    } // End of Carousel
    // Sections
    //End of Sections

  });
})(jQuery);