/*================================
            Preloader
=================================*/
$(window).on('load', function () {
    $('#status').fadeOut();
    $('#preloader').delay(350).fadeOut();
});

/*================================
            Team
=================================*/
$(function () {
    $("#team-members").owlCarousel({
        items: 2,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        responsive: {
            //break point from 0 up
            0: {
                items: 1
            },
            // breakpoint from 480 up
            480: {
                items: 2
            }

        }
    });
});
/*================================
            Progress Bars
=================================*/
$(function () {
    $("#progress-elements").waypoint(function () {

        $(".progress-bar").each(function () {
            $(this).animate({
                width: $(this).attr("aria-valuenow") + "%"
            }, 2000);
        });
        this.destroy();
    }, {
        offset: 'bottom-in-view'
    });
});
/*================================
            Responsive Tabs
=================================*/
$(function () {
    $("#services-tabs").responsiveTabs({
        animation: 'slide'
    });
});
/*================================
            Porfolio Filter
=================================*/
$(window).on('load', function () {
    $('#isotope-container').isotope({});
    $('#isotope-filter').on('click', 'button', function () {
        // get filter value
        var filterValue = $(this).attr('data-filter');

        //filter portfolio
        $('#isotope-container').isotope({
            filter: filterValue
        });
        // Active buttons
        $("#isotope-filter").find('.active').removeClass('active');
        $(this).addClass('active');
    });
});
/*================================
            Magnific Popup
=================================*/
$(function () {
    $("#portfolio-wrapper").magnificPopup({
        delegate: 'a', //child item selector, by clicking it popup will open
        type: 'image',
        gallery: {
            enabled: true
        }
    });
});
/*===================================
            Testimonials
===================================*/
$(function () {
    $("#testimonial-slider").owlCarousel({
        items: 1,
        autoplay: false,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
    });
});
/*================================
            Stats
=================================*/
$(function () {
    $(".counter").counterUp({
        delay: 10,
        time: 2000
    });
});
/*================================
            Clients
=================================*/
$(function () {
    $("#clients-list").owlCarousel({
        items: 6,
        autoplay: false,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        responsive: {
            //break point from 0 up
            0: {
                items: 2
            },
            // breakpoint from 480 up
            480: {
                items: 3
            },
            // breakpoint from 768 & up
            768: {
                Items: 6
            }

        }
    });
});
/*================================
            Google Map
=================================*/
$(window).on('load', function () {
    // Map Variables
    var addressString = 'darbargadh modiwad timbafali jamnagar india 361001';
    var mylatlng = {
        lat: 22.451800,
        lng: 70.077150
    };

    // 1. Render Google Map
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 11,
        center: mylatlng
    });
    // 2. Add Marker
    var marker = new google.maps.Marker({
        position: mylatlng,
        map: map
    });
    // 3. Add Info Window
    var infowindow = new google.maps.Infowindow({
        content: addressString
    });
    // 4. Show infowindow when user clicks marker window
    marker.addListner('click', function () {
        infowindow.open(map, marker);
    });
    // 5. Resize Function
    google.maps.event.addDomListener(window, 'resize', function () {

        var center = map.getCenter();
        google.maps.event.trigger(map, 'resize');
        map.setCenter(center);
    });
});
/*================================
            Navigation
=================================*/
$(function () {
    showHideNav();
    $(Window).scroll(function () {

        showHideNav();
    });

    function showHideNav() {
        // Show white nav
        if ($(window).scrollTop() > 50) {
            $("nav").addClass("white-nav-top");

            //Show Dark Logo
            $(".navbar-brand img").attr("src", "img/solo-images/logo/logo-dark.png");

            //Show back-to-top
            $("#back-to-top").fadeIn();

            // Hide white nav
        } else {
            $("nav").removeClass("white-nav-top");

            //Show Normal Logo
            $(".navbar-brand img").attr("src", "img/solo-images/logo/logo.png");

            //hide back-to-top
            $("#back-to-top").fadeOut();
        }

    }
});
// Smooth Scrolling
$(function () {
    $("a.smooth-scroll").click(function (event) {
        event.preventDefault();

        // get section id like #home, #about and etc
        var section_id = $(this).attr("href");

        $("html,body").animate({
            scrollTop: $(section_id).offset().top - 64
        }, 1250, "easeInOutExpo");
    });
});
/*===================================
            Mobile Menu
======================================*/
$(function(){
    // Show Mobile nav
    $("#mobile-nav-open-btn").click(function(){
        $("#mobile-nav").css("height", "100%");
    });

    // Hide mobile nav
    $("#mobile-nav-close-btn, #mobile-nav a").click(function(){
        $("#mobile-nav").css("height", "0%");
    });

});
/*===================================
            Animate
======================================*/
// animation on scroll
$(function() {
    new WOW().init();
});

//animation after page load
 //$(window).on('load', function () {

 // $('#home-heading h1').addClass("animated fadeInDown");
//     $("#home-heading-h2").addClass("animated fadeInLeft");
//     $("#home-text").addClass("animated zoomIn");
//     $("#home-btn").addClass("animated zoomIn");
//     $("#arrow-down i").addClass("animated fadeInDown infinite")
// });
