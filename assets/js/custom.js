$(document).ready(function () {

    /* ----------- SMOOTH SCROLLING  ---------------- */

        $('.js-scroll-trigger').click(function (e) {
            e.preventDefault();
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');

                if (target.length) {
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000, 'easeInOutExpo');

                    /* ----------- HIDE MOBILE NAVBAR ON CLICK ---------------- */
                    $('.navbar-collapse').collapse('hide');

                }
            }
        });

    /* ----------- EASE SCROLL EFFECT ---------------- */

    $("html").easeScroll();

    /*----------- SCROLL TO FIXED TOP ---------------- */
    
    $(window).scroll(function () {
        $('nav#mainNav').scrollToFixed();
    });

    /* ---------- COUNTER UP EFFECT FOR THE NUMBERS -----------------*/

    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });

    /* ---------- SCROLL TOP LINK -----------------*/

    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.scrolltop').fadeIn();
        } else {
            $('.scrolltop').fadeOut();
        }
    });

    $('.scrolltop, .navbar-brand').click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 1000, 'easeInOutExpo');
        return false;
    });

});