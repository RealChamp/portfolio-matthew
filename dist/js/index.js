"use strict";(function(a){var b=this;a(window).on("load",function(){a(".loader").fadeOut(1e3);var b=new WOW({offset:150,mobile:!1});b.init()}),a(".navbar-toggle").on("click",function(){a("body").removeClass("menu-is-closed").addClass("menu-is-opened")}),a(".close-menu, .click-capture, .menu-list li a").on("click",function(){a("body").removeClass("menu-is-opened").addClass("menu-is-closed"),a(".menu-list ul").slideUp(300)}),a(".menu-list li a").on("click",function(){a(".menu-list li").removeClass("active"),a(b).closest("li").addClass("active")}),a(".col-resume").on("mouseover",function(){a(".section-bg.mask").addClass("hide")}),a(".col-resume").on("mouseleave",function(){a(".section-bg.mask").removeClass("hide")}),0<a(".owl-carousel").length&&a(".review-carousel").owlCarousel({dots:!0,nav:!1,navText:[],responsiveRefreshRate:0,responsive:{0:{items:1},720:{items:1},1280:{items:1}}})})(jQuery);