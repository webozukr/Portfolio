$(document).ready(function () {
    $('a[href^="#"]').click(function () {
        var elem = $(this).attr('href');
        $('body,html').animate({scrollTop: $(elem).offset().top}, 1000);
        return false;
    });
});
