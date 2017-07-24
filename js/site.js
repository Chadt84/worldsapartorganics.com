$(function () {
    // Pinning the nav bar
    setTimeout(function () { // wait for document ready
        // init controller
        var controller = new ScrollMagic.Controller({});
        // init scene
        var scene = new ScrollMagic.Scene({
                triggerElement: "#navbar",
                duration: 0,
                triggerHook: 0
            })
            .setPin("#navbar")
            .addTo(controller)
        //.addIndicators()
        if ($(document).width() < 768) {

            var galleryHeight = $('#gallery').height();
            var scene1 = new ScrollMagic.Scene({
                    triggerElement: ".gallery-up",
                    duration: galleryHeight,
                    triggerHook: 0.6
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

    //Close navbar on scroll
    $('.dropdown-menu > li > a').on('click', function () {
        if ($('#navbar-collapse-btn').css('display') == 'none') {} else {
            $('#navbar-collapse-btn').click();
        }

    });

    setTimeout(function () {
        if (window.location.pathname == "/activities.html") {
            $('.parallax-window').parallax();
        }
    }, 100);

    $('#submit').click(function () {
        var name = $('#name').val();
        var mail = $('#email').val();
        var phone = $('#mobile').val();
        var subject = $('#subject').val();
        var message = $('#message').val();
        $.ajax({
            url: "https://formspree.io/worldsapartorganics@gmail.com ",
            method: "POST",
            data: {
                name : name,
                _replyto : mail,
                phone : phone,
                _subject : subject,
                message: message
            },
            dataType: "json",
            success : function(res){
                console.log(res);
            }
        });
    })
})
