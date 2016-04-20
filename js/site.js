// Pinning the nav bar
setTimeout(function () { // wait for document ready
    // init controller
    var controller = new ScrollMagic.Controller({});
    // init scene
    var scene = new ScrollMagic.Scene({
            triggerElement: "#navbar"
            , duration: 0
            , triggerHook: 0
        })
        .setPin("#navbar")
        .addTo(controller)
        //.addIndicators()
    if ($(document).width() < 768) {

        var galleryHeight = $('#gallery').height();
        var scene1 = new ScrollMagic.Scene({
                triggerElement: ".gallery-up"
                , duration: galleryHeight
                , triggerHook: 0.6
            })
            .setPin(".gallery-up")
            //.addIndicators()
            .on("progress", function (e) {
                if (e.progress.toFixed(3) > 0.172) {
                    $(".gallery-up").css('opacity', e.progress.toFixed(2) * 2);
                } else if (e.progress.toFixed(3) <= 0.172) {
                    $(".gallery-up").css('opacity', '0');
                }
            });
        scene1.addTo(controller);
        $(document).on('click', function () {
            setTimeout(function () {
                galleryHeight = $("#gallery").height();
                scene1.duration(galleryHeight);
            }, 600)
        });
    }

}, 500);

//Map arrow rotation
$('.btn-map').on('click', function () {
    setTimeout(function () {
        if ($('#map-frame').hasClass('in')) {
            $('.btn-map-text').text('Hide ').append("<b>map</b>");
            $('.arrow').toggleClass('arrow-active');
        } else {
            $('.btn-map-text').text('Expand ').append("<b>map</b>");
            $('.arrow').toggleClass('arrow-active');
        }
    }, 400);
});

//Navbar button arrow rotation
$('#navbar-collapse-btn').on('click', function () {
    $('#navbar-collapse-arrow').toggleClass('arrow-active');
});

//Scroll to section navbar
$(function () {
    $('a[href*=#]:not([href=#])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') || location.hostname == this.hostname) {

            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top - 60
                }, 1000);
                return false;
            }
        }
    });
});

//Close navbar on scroll
$('.dropdown-menu > li > a').on('click', function () {
    if ($('#navbar-collapse-btn').css('display') == 'none') {} else {
        $('#navbar-collapse-btn').click();
    }

});

//Gallery
$(document).ready(function () {
    $('.zoom-gallery').magnificPopup({
        delegate: 'a'
        , type: 'image'
        , closeOnContentClick: false
        , closeBtnInside: false
        , mainClass: 'mfp-with-zoom mfp-img-mobile'
        , image: {
            verticalFit: true
            , titleSrc: function (item) {
                return item.el.attr('title');
            }
        }
        , gallery: {
            enabled: true
        }
        , zoom: {
            enabled: true
            , duration: 300, // don't foget to change the duration also in CSS
            opener: function (element) {
                return element.find('img');
            }
        }

    });
    if (navigator.userAgent.match(/(iPod|iPhone|iPad)/i)) {
        $('.parallax-window').on('click',function(){
            alert('click');
            if ($(this).children('div').hasClass('text-activities-left')){
                this.css('color','blue');
            }
            else{
                this.css('color','red');
            }
        });
    }
});

// Gallery tabs
$("[id^='gallery-tab-']").on('click', function () {
    if ($(this).hasClass('active')) {} else {
        var last = $("[id^='gallery-tab-'].active");
        var lastIndex = $("[id^='gallery-tab-'].active").index() + 1;
        var index = $(this).index() + 1;
        $("#gallery > #gallery" + index).toggleClass('gallery-active gallery-inactive');
        $("#gallery > #gallery" + lastIndex).toggleClass('gallery-active gallery-inactive');
        last.toggleClass('active');
        $(this).toggleClass('active');
    }
});


setTimeout(function () {
    $('.parallax-window').parallax();
}, 100);
