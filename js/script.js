$(document).ready(function () {
    // sticky header
    // Check the initial Poistion of the Sticky Header
    var stickyHeaderTop = $('.header').offset().top;
    $(window).scroll(function () {
        if ($(window).scrollTop()) {
            //$('#sticky').css({position: 'fixed', top: '0px', float: 'right'});
            $('.header').addClass("sticky");
        } else {
            $('.header').removeClass("sticky");
        }
    });
    // slick slider
    $('.slick-slider').slick({
        infinite: true,
        autoplay: true,
        arrows: true,
        prevArrow: $('.slick_prev'),
        nextArrow: $('.slick_next'),
        dots: false,
        speed: 1300,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,

                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });
    // app gallery slider
    $('.app_gallery_slider').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [{
                breakpoint: 991.98,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
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
                breakpoint: 575.98,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });





















});