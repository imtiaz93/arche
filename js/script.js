$(function () {

    'use strict';
    // Banner Slider strts
    $('.banner_big_slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: false,
        asNavFor: '.small_banner_slider',
    });
    $('.small_banner_slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.banner_big_slider',
        dots: true,
        centerMode: true,
        centerPadding: 0,
        focusOnSelect: true,
        arrows: false,
        dots: false,
    });
    // About counter part starts

    $('.counter').counterUp({
        delay: 10,
        time: 1000,
    });

    // Service Slider Starts

    $('.service_slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        dots: true,
        arrows: false,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: true,
            }
        }, ]
    });

    // Project Part starts
    $(document).ready(function () {
        $('.venobox').venobox();
    });


    // Testimonial slider starts

    $('.test_slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true,
        arrows: false,
    });
    // Our Expert starts

    $(document).ready(function () {
        $('.venobox_expert').venobox();
    })

});