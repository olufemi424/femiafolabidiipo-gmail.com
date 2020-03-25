/*jslint browser: true*/
/*global $, jQuery*/
/*unused: false*/

$(document).ready(function () {


    /* For the sticky navigation */
    $('.js--section-features').waypoint(function (direction) {
        if (direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
            offset: '60px;'
        });



    /* scroll on buttons */

    $('.js--scroll-to-plans').click(function () {
        $('html, body').animate({
            scrollTop:
                $('.js--section-plans').offset().top
        }, 1000);
    });

    $('.js--scroll-to-start').click(function () {
        $('html, body').animate({
            scrollTop:
                $('.js--section-features').offset().top
        }, 1000);
    });

    // for smooth scrolling
    $('a[href*=#]:not([href=#])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
            || location.hostname == this.hostname) {

            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });



    // Animations on scroll

    $('.js--wp-1').waypoint(function (direction) {
        $('.js--wp-1').addClass('animated fadeIn');
    }, {
            offset: '50%'
        });

    $('.js--wp-2').waypoint(function (direction) {
        $('.js--wp-2').addClass('animated fadeInUp');
    }, {
            offset: '50%'
        });



    // Mobile navigation 

    $('.js--nav-icon').click(function () {
        var nav = $('.js--main-nav');
        var icon = $('.js--nav-icon i');

        nav.slideToggle(300);

        // change icon to x 
        if (icon.hasClass('ion-navicon-round')) {
            icon.addClass('ion-close-round');
            icon.removeClass('ion-navicon-round');
        } else {
            icon.removeClass('ion-close-round');
            icon.addClass('ion-navicon-round');
        }
    });
    // MAPS
    var map = new GMaps({
        div: '.map',
        lat: 41.8333925,
        lng: -88.005,
        zoom: 12
    });

    map.addMarker({
        lat: 41.8333925,
        lng: -88.0121478,
        title: 'Chicago',
        infoWindow: {
            content: '<p>Chicago Location</p>'
        }
    });

});


