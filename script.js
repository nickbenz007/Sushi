$(document).ready(function () {
    //navbar toggle btn
    $(".navbar-toggler").click(function () {
        $(".navbar-toggler").toggleClass("change");
    });
    //sticky navbar & less padding
    $(window).scroll(function () {
        let position = $(this).scrollTop();
        if (position >= 718) {
            $(".navbar").addClass("navbar-background");
            $(".navbar").addClass("fixed-top");
        } else {
            $(".navbar").removeClass("navbar-background");
            $(".navbar").removeClass("fixed-top");
        }
    });
    //Smooth Scroll
    $(".nav-item a, .header-link, #back-to-top").click(function (link) {
        link.preventDefault();
        let target = $(this).attr("href");
        $("html, body").animate({
                scrollTop: $(target).offset().top - 25,
            },
            3000
        );
    });

    //sticky navbar & less padding
    $(window).scroll(function () {
        let position = $(this).scrollTop();
        if (position >= 718) {
            $("#back-to-top").addClass("scrollTop");

        } else {
            $("#back-to-top").removeClass("scrollTop");
        }
    });

    //Ripples
    $("#header, .info").ripples({
        dropradius: 25,
        perturbance: 0.6,
    });

    //Magnific Popup
    $(".parent-container").magnificPopup({
        delegate: "a",
        type: "image",
        gallery: {
            enabled: true,
        },
    });
});