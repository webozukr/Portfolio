$(document).ready(function () {
    
    //step number
    
    var slide_num = 1;

    function toggle_class(){
        $(".user-block-" + slide_num).toggleClass("hidden-block");
        $(".circle-" + slide_num).toggleClass("small-circle-active");
    };
    
    //default view
    toggle_class();

    //click right
    
    $(".slider-section-right").click(function () {
        toggle_class();
        slide_num = slide_num + 1;
        if (slide_num >= 4) {
            slide_num = 1;
        };
        toggle_class();
    });

    //click left
    
    $(".slider-section-left").click(function () {
        toggle_class();
        slide_num = slide_num - 1;
        if (slide_num <= 0) {
            slide_num = 3;
        };
        toggle_class();
    });

    //auto sliding

    setInterval(function () {
        toggle_class();
        slide_num = slide_num + 1;
        if (slide_num >= 4) {
            slide_num = 1;
        };
        toggle_class();
    }, 4000);
    
    //circles
    
    $(".circle-1").click(function(){
        toggle_class();
        slide_num = 1;
        toggle_class();
    });
    $(".circle-2").click(function(){
        toggle_class();
        slide_num = 2;
        toggle_class();
    });
    $(".circle-3").click(function(){
        toggle_class();
        slide_num = 3;
        toggle_class();
    });
    
    
    
});
