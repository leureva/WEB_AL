/*-- Scroll --*/
var scroll = new SmoothScroll('a[href*="#"]', {
    speed: 1000
});

/*-- Carousel --*/
$('.modal').on('hidden.bs.modal', function(e) {
    var $iframes = $(e.target).find('iframe');
    $iframes.each(function(index, iframe){
    $(iframe).attr('src', $(iframe).attr('src'));
    });
  })

$('.modal').on('shown.bs.modal', function (e) {
    $('.carousel').carousel('pause');
})

$('.modal').on('hidden.bs.modal', function (e) {
    $('.carousel').carousel('cycle');
})

/*
$(".modal").on('hidden.bs.modal', function (e) {
    $('iframe').attr('src', $('iframe').attr('src'));
});
*/

$('#play-button-1').click(function () {
    $('#play-button-1,#pause-button-1').toggle();
    $('#multi-item-1').carousel('cycle');
});
$('#pause-button-1').click(function () {
    $('#play-button-1,#pause-button-1').toggle();
    $('#multi-item-1').carousel('pause');
});

$('#play-button-2').click(function () {
    $('#play-button-2,#pause-button-2').toggle();
    $('#multi-item-2').carousel('cycle');
});
$('#pause-button-2').click(function () {
    $('#play-button-2,#pause-button-2').toggle();
    $('#multi-item-2').carousel('pause');
});

$('#play-button-3').click(function () {
    $('#play-button-3,#pause-button-3').toggle();
    $('#multi-item-3').carousel('cycle');
});
$('#pause-button-3').click(function () {
    $('#play-button-3,#pause-button-3').toggle();
    $('#multi-item-3').carousel('pause');
});

$('#play-button-4').click(function () {
    $('#play-button-4,#pause-button-4').toggle();
    $('#multi-item-4').carousel('cycle');
});
$('#pause-button-4').click(function () {
    $('#play-button-4,#pause-button-4').toggle();
    $('#multi-item-4').carousel('pause');
});

$('#play-button-5').click(function () {
    $('#play-button-5,#pause-button-5').toggle();
    $('#multi-item-5').carousel('cycle');
});
$('#pause-button-5').click(function () {
    $('#play-button-5,#pause-button-5').toggle();
    $('#multi-item-5').carousel('pause');
});

$('#play-button-6').click(function () {
    $('#play-button-6,#pause-button-6').toggle();
    $('#multi-item-6').carousel('cycle');
});
$('#pause-button-6').click(function () {
    $('#play-button-6,#pause-button-6').toggle();
    $('#multi-item-6').carousel('pause');
});

$('#play-button-7').click(function () {
    $('#play-button-7,#pause-button-7').toggle();
    $('#multi-item-7').carousel('cycle');
});
$('#pause-button-7').click(function () {
    $('#play-button-7,#pause-button-7').toggle();
    $('#multi-item-7').carousel('pause');
});

$('#play-button-8').click(function () {
    $('#play-button-8,#pause-button-8').toggle();
    $('#multi-item-8').carousel('cycle');
});
$('#pause-button-8').click(function () {
    $('#play-button-8,#pause-button-8').toggle();
    $('#multi-item-8').carousel('pause');
});

$('#play-button-9').click(function () {
    $('#play-button-9,#pause-button-9').toggle();
    $('#multi-item-9').carousel('cycle');
});
$('#pause-button-9').click(function () {
    $('#play-button-9,#pause-button-9').toggle();
    $('#multi-item-9').carousel('pause');
});

$('#play-button-10').click(function () {
    $('#play-button-10,#pause-button-10').toggle();
    $('#multi-item-10').carousel('cycle');
});
$('#pause-button-10').click(function () {
    $('#play-button-10,#pause-button-10').toggle();
    $('#multi-item-10').carousel('pause');
});

/*--
$(document).ready(function () {
    $('.modal').each(function () {
        var src = $(this).find('iframe').attr('src');

        $(this).on('click', function () {

            $(this).find('iframe').attr('src', '');
            $(this).find('iframe').attr('src', src);

        });
    });
});
--*/

/*-- Ask EGADE --*/

/*-- Ask EGADE Category 1 --*/
$('.ask-cat-1-launch-1').click(function () {
    $('#ask-cat-1-play-1').attr('src',
        'https://prd20vod01.itesm.mx/VenusScript/iframe.html?ec=aQBkAFYAaQBkAGUAbwA9ADEANQAxADYANgAmAHQAaQBwAG8APQBDAEEAVAA=&player=MDE5YTgwMTE2NWMxNDkxM2MwMTEyMTJh'
    );
});

$('.ask-cat-1-launch-2').click(function () {
    $('#ask-cat-1-play-2').attr('src',
        'https://prd20vod01.itesm.mx/VenusScript/iframe.html?ec=aQBkAFYAaQBkAGUAbwA9ADEANQAxADYAMgAmAHQAaQBwAG8APQBDAEEAVAA=&player=MDE5YTgwMTE2NWMxNDkxM2MwMTEyMTJh'
    );
});

$('.ask-cat-1-launch-3').click(function () {
    $('#ask-cat-1-play-3').attr('src',
        'https://prd20vod01.itesm.mx/VenusScript/iframe.html?ec=aQBkAFYAaQBkAGUAbwA9ADEANQAxADYAOAAmAHQAaQBwAG8APQBDAEEAVAA=&player=MDE5YTgwMTE2NWMxNDkxM2MwMTEyMTJh'
    );
});

$('.ask-cat-1-launch-4').click(function () {
    $('#ask-cat-1-play-4').attr('src',
        'https://prd20vod01.itesm.mx/VenusScript/iframe.html?ec=aQBkAFYAaQBkAGUAbwA9ADEANQAxADYANwAmAHQAaQBwAG8APQBDAEEAVAA=&player=MDE5YTgwMTE2NWMxNDkxM2MwMTEyMTJh'
    );
});

$('.ask-cat-1-launch-5').click(function () {
    $('#ask-cat-1-play-5').attr('src',
        'https://prd20vod01.itesm.mx/VenusScript/iframe.html?ec=aQBkAFYAaQBkAGUAbwA9ADEANQAxADYAMwAmAHQAaQBwAG8APQBDAEEAVAA=&player=MDE5YTgwMTE2NWMxNDkxM2MwMTEyMTJh'
    );
});

$('.ask-cat-1-launch-6').click(function () {
    $('#ask-cat-1-play-6').attr('src',
        'https://prd20vod01.itesm.mx/VenusScript/iframe.html?ec=aQBkAFYAaQBkAGUAbwA9ADEANQAxADYANAAmAHQAaQBwAG8APQBDAEEAVAA=&player=MDE5YTgwMTE2NWMxNDkxM2MwMTEyMTJh'
    );
});
