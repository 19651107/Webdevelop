var map;

DG.then(function () {
    map = DG.map('map', {
        center: [54.98, 82.89],
        zoom: 13
    });
});



$(document).ready(function(){
    $('ul.tabs__caption').on('click', 'li:not(.active)', function() {
        $(this)
            .addClass('active').siblings().removeClass('active')
            .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');

    });

    $(".owl-carousel").owlCarousel();
$('.pricing__btn').on('click', function () {
    $('.overlay').addClass('overlay__active')


})


});

