(function ($) {

    /* PreLoader */
    $(window).on('load', () => {
        $('.loader').fadeOut(1000);
        let wow = new WOW({
            offset: 150,
            mobile: false,
        })

        wow.init();
    });


    /* Popup Youtube */

    $('.popup-youtube').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-with-zoom',
        removeDelay: 150,
        preloader: false,
        fixedContentPos: false
    });



    /* SideBar */
    $('.navbar-toggle').on('click', () => {
        $('body').removeClass('menu-is-closed').addClass('menu-is-opened');
    });

    $('.close-menu, .click-capture, .menu-list li a').on('click', () => {
        $('body').removeClass('menu-is-opened').addClass('menu-is-closed');
        $('.menu-list ul').slideUp(300);
    });

    $('.menu-list li a').on('click', () => {
        $('.menu-list li').removeClass('active');
        $(this).closest('li').addClass('active');
    });

    $('.col-resume').on('mouseover', () => {
        $('.section-bg.mask').addClass('hide');
    });

    $('.col-resume').on('mouseleave', () => {
        $('.section-bg.mask').removeClass('hide');
    });



    /* Owl Carousel */

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
            },
        });
    }

    /* Sections */
    function navbarFP() {
        if ($('.pp-section.active').scrollTop() > 0) {
            $('.navbar-fullpage').addClass('navbar-fixed');
        }
    }

    navbarFP();

    function navbar() {
        $(window).scroll(function () {
            if ($(window).scrollTop() > 0) {
                $('.navbar').addClass('navbar-fixed');
            } else {
                $('.navbar').removeClass('navbar-fixed')
            }
        });
    }

    navbar();

    if ($('.pagepiling').length > 0) {
        $('.pagepiling').pagepiling({
            scrollingSpeed: 280,
            loopBottom: true,
            anchors: ['page1', 'page2', 'page3', 'page4', 'page5', 'page6', 'page7', 'page8'],
            afterLoad: function (anchorLink, index) {
                navbarFP();
            }
        });
    }

    $('.pp-scrollable').on('scroll', () => {
        let scrollTop = $(this).scrollTop();
        if (scrollTop > 0) {
            $('.navbar-fullpage').addClass('navbar-fixed');
        } else {
            $('.navbar-fullpage').removeClass('navbar-fixed');
        }
    });



    /* Scroll Navagation */

    $('#pp-nav').remove().appendTo('.animsition').addClass('white right-boxed hidden-xs');
    $('.pp-nav-up').on('click', () => {
        $.fn.pagepiling.moveSectionUp();
    });
    $('.pp-nav-down').on('click', () => {
        $.fn.pagepiling.moveSectionDown();
    });

    /* project section switcher */

    $('.project-row a').on('mouseover', function () {
        let index = $('.project-row a').index(this);
        $('.project-row a').removeClass('active');
        $(this).addClass('active');
        $('.bg-change .section-bg').removeClass('active').eq(index).addClass('active');
    });

    /* Form validation */

    if ($('.js-form').length) {
        $('.js-form').each(function () {
            $(this).validate({
                errorClass: 'error',
                submitHandler: function (form) {
                    $.ajax({
                        type: "POST",
                        url: "mail.php",
                        data: $(form).serialize(),
                        success: function () {
                            $('.form-group-message').show();
                            $('#error').hide();
                            $('#success').show();
                        },

                        error: function () {
                            $('.form-group-message').show();
                            $('#error').hide();
                            $('#success').show();
                        }
                    });
                }
            });
        });
    }





})(jQuery);