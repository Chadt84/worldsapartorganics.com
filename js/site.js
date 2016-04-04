$(document).ready(function () {
    setTimeout(function () {
        var menuController = new ScrollMagic.Controller();
        var pin = new ScrollMagic.Scene({
                triggerElement: "#navbar"
                , duration: 0
                , triggerHook: 0
            })
            .setPin("#navbar", {})
            //.addIndicators()
            .addTo(menuController)
    }, 500);
});
