// Pinning the nav bar
setTimeout(function () { // wait for document ready
    // init controller
    var controller = new ScrollMagic.Controller({
    });
    // init scene
    var scene = new ScrollMagic.Scene({
            triggerElement: "#navbar"
            , duration: 0
            , triggerHook: 0
        })
        .setPin("#navbar")
        .addTo(controller)
        //.addIndicators()
}, 500);

var currentPage = window.location.pathname;
var aboutBtn = $("#aboutbtn");
var carouselBtn = $("#carouselbtn");
var mapBtn = $("#mapbtn");
var contactBtn = $("#contactbtn");
if (currentPage == "/index.html"){

}
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
