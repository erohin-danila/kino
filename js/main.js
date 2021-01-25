$(document).ready(function () {
    const tabsItem = $('.tabs-item');

    tabsItem.on('click', function (e) {
        e.preventDefault();

        const clickedTabId = $(this).attr('href');
        $('.visible').toggleClass('visible');
        $(clickedTabId).toggleClass('visible');

        $('.tabs-item-active').toggleClass('tabs-item-active');
        $(this).toggleClass('tabs-item-active');
    });
});