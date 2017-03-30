$(document).ready(function () {
    //step number
    var slide_num = 1;

    //default view
    $(".user-block-" + slide_num).toggleClass("hidden-block");
    $(".circle-" + slide_num).toggleClass("small-circle-active");

    //click right
    $(".slider-section-right").click(function () {
        $(".user-block-" + slide_num).toggleClass("hidden-block");
        $(".circle-" + slide_num).toggleClass("small-circle-active");
        slide_num = slide_num + 1;
        if (slide_num >= 4) {
            slide_num = 1;
        };
        $(".user-block-" + slide_num).toggleClass("hidden-block");
        $(".circle-" + slide_num).toggleClass("small-circle-active");
    });

    //click left
    $(".slider-section-left").click(function () {
        $(".user-block-" + slide_num).toggleClass("hidden-block");
        $(".circle-" + slide_num).toggleClass("small-circle-active");
        slide_num = slide_num - 1;
        if (slide_num <= 0) {
            slide_num = 3;
        };
        $(".user-block-" + slide_num).toggleClass("hidden-block");
        $(".circle-" + slide_num).toggleClass("small-circle-active");
    });

    //auto sliding

    setInterval(function () {
        $(".user-block-" + slide_num).toggleClass("hidden-block");
        $(".circle-" + slide_num).toggleClass("small-circle-active");
        slide_num = slide_num + 1;
        if (slide_num >= 4) {
            slide_num = 1;
        };
        $(".user-block-" + slide_num).toggleClass("hidden-block");
        $(".circle-" + slide_num).toggleClass("small-circle-active");
    }, 4000);
});
