(function($) {
    let $clock_wrap = $('.clock-wrap'),
        date_start = '2020-09-23 19:30:00',
        template = `
            <div class="clock-elem mr-1">
                <span>%D</span>
                <p>дней</p>
            </div>
            <div class="clock-elem mr-1">
                <span>%H</span>
                <p>часов</p>
            </div>
            <div class="clock-elem mr-1">
                <span>%M</span>
                <p>минут</p>
            </div>
            <div class="clock-elem mr-md-1">
                <span>%S</span>
                <p>секунд</p>
            </div>
        `;
    $clock_wrap.countdown(date_start, function(event) {
        $(this).html(event.strftime(template));
    }).on('finish.countdown', function() {
        $clock_wrap.hide();
    });

    let $page = $('html, body');
    $('a[href*="#"]').click(function() {
        $page.animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 700);
        return false;
    });

})(jQuery);
