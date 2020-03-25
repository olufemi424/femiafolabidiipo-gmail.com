



$(function () {
    menu = $("nav ul");

    $("#openup").on("click", function (e) {
        e.preventDefault();
        menu.slideToggle();
    });

    $(window).resize(function () {
        var w = $(this).width();
        if (w > 480 && menu.is(":hidden")) {
            menu.removeAttr("style");
        }
    });

    $("nav li").on("click", function (e) {
        var w = $(window).width();
        if (w < 480) {
            menu.slideToggle();
        }
    });
    $(".open-menu").height($(window).height());
});


//add smooth scrolling
$('.cf a').on('click', function (e) {
    if (this.hash !== '') {

        //prevent default
        e.preventDefault();

        //store hash
        const hash = this.hash;

        //Animate smooth scroll
        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 850, function () {

            //add hash to url after scroll
            window.location.hash = hash;
        });
    }
});