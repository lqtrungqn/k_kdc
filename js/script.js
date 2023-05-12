$(document).ready(function () {

    // back top
    $(function () {
        var topBtn = $('#page_top');
        topBtn.hide();
        $(window).scroll(function () {
            if ($(this).scrollTop() > 100) {
                topBtn.fadeIn();
            } else {
                topBtn.fadeOut();
            }
        });
        topBtn.click(function () {
            $('body,html').animate({
                scrollTop: 0
            }, 600);
            return false;
        });
    });


    // tel sp
    var ua = navigator.userAgent.toLowerCase();
    var isMobile = /iphone/.test(ua) || /android(.+)?mobile/.test(ua);

    if (!isMobile) {
        $('a[href^="tel:"]').on('click', function (e) {
            e.preventDefault();
        });
    }
    
});