$(document).ready(function () {
    $("._hamburger").click(function () {
        $("._nav").slideToggle();
    });
    setInterval(function () {
        if (window.matchMedia('(min-width: 825px)').matches) {
            if ($('._nav:hidden')) {
                $('._nav').slideDown();
            };
        };
    }, 3000);
});
