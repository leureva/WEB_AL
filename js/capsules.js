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

/*-- Capsules --*/

/*-- Capsules Category 1 --*/
$('.cap-launch-1').click(function () {
    $('#cap-play-1').attr('src',
        'https://prd20vod01.itesm.mx/VenusScript/iframe.html?ec=aQBkAFYAaQBkAGUAbwA9ADEANAA0ADYANAAmAHQAaQBwAG8APQBDAEEAVAA=&player=MDE5YTgwMTE2NWMxNDkxM2MwMTEyMTJh'
    );
});

$('.cap-launch-2').click(function () {
    $('#cap-play-2').attr('src',
        'https://prd20vod01.itesm.mx/VenusScript/iframe.html?ec=aQBkAFYAaQBkAGUAbwA9ADEANAA0ADcAMwAmAHQAaQBwAG8APQBDAEEAVAA=&player=MDE5YTgwMTE2NWMxNDkxM2MwMTEyMTJh'
    );
});

$('.cap-launch-3').click(function () {
    $('#cap-play-3').attr('src',
        'https://prd20vod01.itesm.mx/VenusScript/iframe.html?ec=aQBkAFYAaQBkAGUAbwA9ADEANAA0ADYANQAmAHQAaQBwAG8APQBDAEEAVAA=&player=MDE5YTgwMTE2NWMxNDkxM2MwMTEyMTJh'
    );
});

$('.cap-launch-4').click(function () {
    $('#cap-play-4').attr('src',
        'https://prd20vod01.itesm.mx/VenusScript/iframe.html?ec=aQBkAFYAaQBkAGUAbwA9ADEANAA0ADcANQAmAHQAaQBwAG8APQBDAEEAVAA=&player=MDE5YTgwMTE2NWMxNDkxM2MwMTEyMTJh'
    );
});

$('.cap-launch-5').click(function () {
    $('#cap-play-5').attr('src',
        'https://prd20vod01.itesm.mx/VenusScript/iframe.html?ec=aQBkAFYAaQBkAGUAbwA9ADEANAA0ADgANQAmAHQAaQBwAG8APQBDAEEAVAA=&player=MDE5YTgwMTE2NWMxNDkxM2MwMTEyMTJh'
    );
});

$('.cap-launch-6').click(function () {
    $('#cap-play-6').attr('src',
        'https://prd20vod01.itesm.mx/VenusScript/iframe.html?ec=aQBkAFYAaQBkAGUAbwA9ADEANAA0ADgANwAmAHQAaQBwAG8APQBDAEEAVAA=&player=MDE5YTgwMTE2NWMxNDkxM2MwMTEyMTJh'
    );
});

$('.cap-launch-7').click(function () {
    $('#cap-play-7').attr('src',
        'https://prd20vod01.itesm.mx/VenusScript/iframe.html?ec=aQBkAFYAaQBkAGUAbwA9ADEANAA0ADgAMAAmAHQAaQBwAG8APQBDAEEAVAA=&player=MDE5YTgwMTE2NWMxNDkxM2MwMTEyMTJh'
    );
});

$('.cap-launch-8').click(function () {
    $('#cap-play-8').attr('src',
        'https://prd20vod01.itesm.mx/VenusScript/iframe.html?ec=aQBkAFYAaQBkAGUAbwA9ADEANAA0ADUAOQAmAHQAaQBwAG8APQBDAEEAVAA=&player=MDE5YTgwMTE2NWMxNDkxM2MwMTEyMTJh'
    );
});

$('.cap-launch-9').click(function () {
    $('#cap-play-9').attr('src',
        'https://prd20vod01.itesm.mx/VenusScript/iframe.html?ec=aQBkAFYAaQBkAGUAbwA9ADEANAA0ADcAMAAmAHQAaQBwAG8APQBDAEEAVAA=&player=MDE5YTgwMTE2NWMxNDkxM2MwMTEyMTJh'
    );
});

/*-- Capsules Category 2 --*/
$('.cap-launch-10').click(function () {
    $('#cap-play-10').attr('src',
        'https://prd20vod01.itesm.mx/VenusScript/iframe.html?ec=aQBkAFYAaQBkAGUAbwA9ADEANAA0ADgAMwAmAHQAaQBwAG8APQBDAEEAVAA=&player=MDE5YTgwMTE2NWMxNDkxM2MwMTEyMTJh'
    );
});

$('.cap-launch-11').click(function () {
    $('#cap-play-11').attr('src',
        'https://prd20vod01.itesm.mx/VenusScript/iframe.html?ec=aQBkAFYAaQBkAGUAbwA9ADEANAA0ADcAMQAmAHQAaQBwAG8APQBDAEEAVAA=&player=MDE5YTgwMTE2NWMxNDkxM2MwMTEyMTJh'
    );
});

$('.cap-launch-12').click(function () {
    $('#cap-play-12').attr('src',
        'https://prd20vod01.itesm.mx/VenusScript/iframe.html?ec=aQBkAFYAaQBkAGUAbwA9ADEANAA0ADYAOAAmAHQAaQBwAG8APQBDAEEAVAA=&player=MDE5YTgwMTE2NWMxNDkxM2MwMTEyMTJh'
    );
});

$('.cap-launch-13').click(function () {
    $('#cap-play-13').attr('src',
        'https://prd20vod01.itesm.mx/VenusScript/iframe.html?ec=aQBkAFYAaQBkAGUAbwA9ADEANAA0ADEAMgAmAHQAaQBwAG8APQBDAEEAVAA=&player=MDE5YTgwMTE2NWMxNDkxM2MwMTEyMTJh'
    );
});

$('.cap-launch-14').click(function () {
    $('#cap-play-14').attr('src',
        'https://prd20vod01.itesm.mx/VenusScript/iframe.html?ec=aQBkAFYAaQBkAGUAbwA9ADEANAA0ADcAMgAmAHQAaQBwAG8APQBDAEEAVAA=&player=MDE5YTgwMTE2NWMxNDkxM2MwMTEyMTJh'
    );
});

$('.cap-launch-15').click(function () {
    $('#cap-play-15').attr('src',
        'https://prd20vod01.itesm.mx/VenusScript/iframe.html?ec=aQBkAFYAaQBkAGUAbwA9ADEANAA0ADYAMgAmAHQAaQBwAG8APQBDAEEAVAA=&player=MDE5YTgwMTE2NWMxNDkxM2MwMTEyMTJh'
    );
});

$('.cap-launch-16').click(function () {
    $('#cap-play-16').attr('src',
        'https://prd20vod01.itesm.mx/VenusScript/iframe.html?ec=aQBkAFYAaQBkAGUAbwA9ADEANAA0ADUAMgAmAHQAaQBwAG8APQBDAEEAVAA=&player=MDE5YTgwMTE2NWMxNDkxM2MwMTEyMTJh'
    );
});

$('.cap-launch-17').click(function () {
    $('#cap-play-17').attr('src',
        'https://prd20vod01.itesm.mx/VenusScript/iframe.html?ec=aQBkAFYAaQBkAGUAbwA9ADEANAA0ADYAMQAmAHQAaQBwAG8APQBDAEEAVAA=&player=MDE5YTgwMTE2NWMxNDkxM2MwMTEyMTJh'
    );
});

$('.cap-launch-18').click(function () {
    $('#cap-play-18').attr('src',
        'https://prd20vod01.itesm.mx/VenusScript/iframe.html?ec=aQBkAFYAaQBkAGUAbwA9ADEANAA0ADYAMAAmAHQAaQBwAG8APQBDAEEAVAA=&player=MDE5YTgwMTE2NWMxNDkxM2MwMTEyMTJh'
    );
});

$('.cap-launch-19').click(function () {
    $('#cap-play-19').attr('src',
        'https://prd20vod01.itesm.mx/VenusScript/iframe.html?ec=aQBkAFYAaQBkAGUAbwA9ADEANAA0ADcANwAmAHQAaQBwAG8APQBDAEEAVAA=&player=MDE5YTgwMTE2NWMxNDkxM2MwMTEyMTJh'
    );
});

$('.cap-launch-20').click(function () {
    $('#cap-play-20').attr('src',
        'https://prd20vod01.itesm.mx/VenusScript/iframe.html?ec=aQBkAFYAaQBkAGUAbwA9ADEANAA0ADUAOAAmAHQAaQBwAG8APQBDAEEAVAA=&player=MDE5YTgwMTE2NWMxNDkxM2MwMTEyMTJh'
    );
});

$('.cap-launch-21').click(function () {
    $('#cap-play-21').attr('src',
        'https://prd20vod01.itesm.mx/VenusScript/iframe.html?ec=aQBkAFYAaQBkAGUAbwA9ADEANAA0ADYAMwAmAHQAaQBwAG8APQBDAEEAVAA=&player=MDE5YTgwMTE2NWMxNDkxM2MwMTEyMTJh'
    );
});

/*-- Capsules Category 3 --*/
$('.cap-launch-22').click(function () {
    $('#cap-play-22').attr('src',
        'https://prd20vod01.itesm.mx/VenusScript/iframe.html?ec=aQBkAFYAaQBkAGUAbwA9ADEANAA0ADYANwAmAHQAaQBwAG8APQBDAEEAVAA=&player=MDE5YTgwMTE2NWMxNDkxM2MwMTEyMTJh'
    );
});
$('.cap-launch-23').click(function () {
    $('#cap-play-23').attr('src',
        'https://prd20vod01.itesm.mx/VenusScript/iframe.html?ec=aQBkAFYAaQBkAGUAbwA9ADEANAA0ADUANQAmAHQAaQBwAG8APQBDAEEAVAA=&player=MDE5YTgwMTE2NWMxNDkxM2MwMTEyMTJh'
    );
});

$('.cap-launch-24').click(function () {
    $('#cap-play-24').attr('src',
        'https://prd20vod01.itesm.mx/VenusScript/iframe.html?ec=aQBkAFYAaQBkAGUAbwA9ADEANAA0ADgAMQAmAHQAaQBwAG8APQBDAEEAVAA=&player=MDE5YTgwMTE2NWMxNDkxM2MwMTEyMTJh'
    );
});

$('.cap-launch-25').click(function () {
    $('#cap-play-25').attr('src',
        'https://prd20vod01.itesm.mx/VenusScript/iframe.html?ec=aQBkAFYAaQBkAGUAbwA9ADEANAA0ADYANgAmAHQAaQBwAG8APQBDAEEAVAA=&player=MDE5YTgwMTE2NWMxNDkxM2MwMTEyMTJh'
    );
});

$('.cap-launch-26').click(function () {
    $('#cap-play-26').attr('src',
        'https://prd20vod01.itesm.mx/VenusScript/iframe.html?ec=aQBkAFYAaQBkAGUAbwA9ADEANAA0ADUANAAmAHQAaQBwAG8APQBDAEEAVAA=&player=MDE5YTgwMTE2NWMxNDkxM2MwMTEyMTJh'
    );
});

$('.cap-launch-27').click(function () {
    $('#cap-play-27').attr('src',
        'https://prd20vod01.itesm.mx/VenusScript/iframe.html?ec=aQBkAFYAaQBkAGUAbwA9ADEANAA0ADgAOAAmAHQAaQBwAG8APQBDAEEAVAA=&player=MDE5YTgwMTE2NWMxNDkxM2MwMTEyMTJh'
    );
});

$('.cap-launch-28').click(function () {
    $('#cap-play-28').attr('src',
        'https://prd20vod01.itesm.mx/VenusScript/iframe.html?ec=aQBkAFYAaQBkAGUAbwA9ADEANAA0ADUANwAmAHQAaQBwAG8APQBDAEEAVAA=&player=MDE5YTgwMTE2NWMxNDkxM2MwMTEyMTJh'
    );
});

/*-- Capsules Category 3 --*/
$('.cap-launch-29').click(function () {
    $('#cap-play-29').attr('src',
        'https://prd20vod01.itesm.mx/VenusScript/iframe.html?ec=aQBkAFYAaQBkAGUAbwA9ADEANAA0ADcAOAAmAHQAaQBwAG8APQBDAEEAVAA=&player=MDE5YTgwMTE2NWMxNDkxM2MwMTEyMTJh'
    );
});

$('.cap-launch-30').click(function () {
    $('#cap-play-30').attr('src',
        'https://prd20vod01.itesm.mx/VenusScript/iframe.html?ec=aQBkAFYAaQBkAGUAbwA9ADEANAA0ADcANAAmAHQAaQBwAG8APQBDAEEAVAA=&player=MDE5YTgwMTE2NWMxNDkxM2MwMTEyMTJh'
    );
});

$('.cap-launch-31').click(function () {
    $('#cap-play-31').attr('src',
        'https://prd20vod01.itesm.mx/VenusScript/iframe.html?ec=aQBkAFYAaQBkAGUAbwA9ADEANAA0ADcAOQAmAHQAaQBwAG8APQBDAEEAVAA=&player=MDE5YTgwMTE2NWMxNDkxM2MwMTEyMTJh'
    );
});

$('.cap-launch-32').click(function () {
    $('#cap-play-32').attr('src',
        'https://prd20vod01.itesm.mx/VenusScript/iframe.html?ec=aQBkAFYAaQBkAGUAbwA9ADEANAA0ADcANgAmAHQAaQBwAG8APQBDAEEAVAA=&player=MDE5YTgwMTE2NWMxNDkxM2MwMTEyMTJh'
    );
});

$('.cap-launch-33').click(function () {
    $('#cap-play-33').attr('src',
        'https://prd20vod01.itesm.mx/VenusScript/iframe.html?ec=aQBkAFYAaQBkAGUAbwA9ADEANAA0ADgAMgAmAHQAaQBwAG8APQBDAEEAVAA=&player=MDE5YTgwMTE2NWMxNDkxM2MwMTEyMTJh'
    );
});

$('.cap-launch-34').click(function () {
    $('#cap-play-34').attr('src',
        'https://prd20vod01.itesm.mx/VenusScript/iframe.html?ec=aQBkAFYAaQBkAGUAbwA9ADEANAA0ADgANgAmAHQAaQBwAG8APQBDAEEAVAA=&player=MDE5YTgwMTE2NWMxNDkxM2MwMTEyMTJh'
    );
});

$('.cap-launch-35').click(function () {
    $('#cap-play-35').attr('src',
        'https://prd20vod01.itesm.mx/VenusScript/iframe.html?ec=aQBkAFYAaQBkAGUAbwA9ADEANAA0ADgAOQAmAHQAaQBwAG8APQBDAEEAVAA=&player=MDE5YTgwMTE2NWMxNDkxM2MwMTEyMTJh'
    );
});

$('.cap-launch-36').click(function () {
    $('#cap-play-36').attr('src',
        'https://prd20vod01.itesm.mx/VenusScript/iframe.html?ec=aQBkAFYAaQBkAGUAbwA9ADEANAA0ADUAMwAmAHQAaQBwAG8APQBDAEEAVAA=&player=MDE5YTgwMTE2NWMxNDkxM2MwMTEyMTJh'
    );
});

$('.cap-launch-37').click(function () {
    $('#cap-play-37').attr('src',
        'https://prd20vod01.itesm.mx/VenusScript/iframe.html?ec=aQBkAFYAaQBkAGUAbwA9ADEANAA0ADgANAAmAHQAaQBwAG8APQBDAEEAVAA=&player=MDE5YTgwMTE2NWMxNDkxM2MwMTEyMTJh'
    );
});

$('.cap-launch-38').click(function () {
    $('#cap-play-38').attr('src',
        'https://prd20vod01.itesm.mx/VenusScript/iframe.html?ec=aQBkAFYAaQBkAGUAbwA9ADEANAA0ADUANgAmAHQAaQBwAG8APQBDAEEAVAA=&player=MDE5YTgwMTE2NWMxNDkxM2MwMTEyMTJh'
    );
});

$('.cap-launch-39').click(function () {
    $('#cap-play-39').attr('src',
        'https://prd20vod01.itesm.mx/VenusScript/iframe.html?ec=aQBkAFYAaQBkAGUAbwA9ADEANAA0ADYAOQAmAHQAaQBwAG8APQBDAEEAVAA=&player=MDE5YTgwMTE2NWMxNDkxM2MwMTEyMTJh'
    );
});

$('.cap-launch-40').click(function () {
    $('#cap-play-40').attr('src',
        'https://prd20vod01.itesm.mx/VenusScript/iframe.html?ec=aQBkAFYAaQBkAGUAbwA9ADEANAA0ADEAMwAmAHQAaQBwAG8APQBDAEEAVAA=&player=MDE5YTgwMTE2NWMxNDkxM2MwMTEyMTJh'
    );
});

/*-- Capsules Category 5 --*/
$('.cap-launch-cov1').click(function () {
    $('#cap-play-cov1').attr('src',
        'https://prd20vod01.itesm.mx/VenusScript/iframe.html?ec=aQBkAFYAaQBkAGUAbwA9ADEANAA1ADcANQAmAHQAaQBwAG8APQBDAEEAVAA=&player=MDE5YTgwMTE2NWMxNDkxM2MwMTEyMTJh'
    );
});

$('.cap-launch-cov2').click(function () {
    $('#cap-play-cov2').attr('src',
        'https://prd20vod01.itesm.mx/VenusScript/iframe.html?ec=aQBkAFYAaQBkAGUAbwA9ADEANAA1ADkAMAAmAHQAaQBwAG8APQBDAEEAVAA=&player=MDE5YTgwMTE2NWMxNDkxM2MwMTEyMTJh'
    );
});

$('.cap-launch-cov3').click(function () {
    $('#cap-play-cov3').attr('src',
        'https://prd20vod01.itesm.mx/VenusScript/iframe.html?ec=aQBkAFYAaQBkAGUAbwA9ADEANAA1ADcAMwAmAHQAaQBwAG8APQBDAEEAVAA=&player=MDE5YTgwMTE2NWMxNDkxM2MwMTEyMTJh'
    );
});

$('.cap-launch-cov4').click(function () {
    $('#cap-play-cov4').attr('src',
        'https://prd20vod01.itesm.mx/VenusScript/iframe.html?ec=aQBkAFYAaQBkAGUAbwA9ADEANAA2ADAAMQAmAHQAaQBwAG8APQBDAEEAVAA=&player=MDE5YTgwMTE2NWMxNDkxM2MwMTEyMTJh'
    );
});

$('.cap-launch-cov5').click(function () {
    $('#cap-play-cov5').attr('src',
        'https://prd20vod01.itesm.mx/VenusScript/iframe.html?ec=aQBkAFYAaQBkAGUAbwA9ADEANAA1ADgANQAmAHQAaQBwAG8APQBDAEEAVAA=&player=MDE5YTgwMTE2NWMxNDkxM2MwMTEyMTJh'
    );
});

$('.cap-launch-cov6').click(function () {
    $('#cap-play-cov6').attr('src',
        'https://prd20vod01.itesm.mx/VenusScript/iframe.html?ec=aQBkAFYAaQBkAGUAbwA9ADEANAA1ADYAOAAmAHQAaQBwAG8APQBDAEEAVAA=&player=MDE5YTgwMTE2NWMxNDkxM2MwMTEyMTJh'
    );
});

$('.cap-launch-cov7').click(function () {
    $('#cap-play-cov7').attr('src',
        'https://prd20vod01.itesm.mx/VenusScript/iframe.html?ec=aQBkAFYAaQBkAGUAbwA9ADEANAA1ADcAOAAmAHQAaQBwAG8APQBDAEEAVAA=&player=MDE5YTgwMTE2NWMxNDkxM2MwMTEyMTJh'
    );
});

$('.cap-launch-cov8').click(function () {
    $('#cap-play-cov8').attr('src',
        'https://prd20vod01.itesm.mx/VenusScript/iframe.html?ec=aQBkAFYAaQBkAGUAbwA9ADEANAA1ADgAMQAmAHQAaQBwAG8APQBDAEEAVAA=&player=MDE5YTgwMTE2NWMxNDkxM2MwMTEyMTJh'
    );
});

$('.cap-launch-cov9').click(function () {
    $('#cap-play-cov9').attr('src',
        'https://prd20vod01.itesm.mx/VenusScript/iframe.html?ec=aQBkAFYAaQBkAGUAbwA9ADEANAA1ADcANgAmAHQAaQBwAG8APQBDAEEAVAA=&player=MDE5YTgwMTE2NWMxNDkxM2MwMTEyMTJh'
    );
});

$('.cap-launch-cov10').click(function () {
    $('#cap-play-cov10').attr('src',
        'https://prd20vod01.itesm.mx/VenusScript/iframe.html?ec=aQBkAFYAaQBkAGUAbwA9ADEANAA1ADkAMQAmAHQAaQBwAG8APQBDAEEAVAA=&player=MDE5YTgwMTE2NWMxNDkxM2MwMTEyMTJh'
    );
});

$('.cap-launch-cov11').click(function () {
    $('#cap-play-cov11').attr('src',
        'https://prd20vod01.itesm.mx/VenusScript/iframe.html?ec=aQBkAFYAaQBkAGUAbwA9ADEANAA1ADkANAAmAHQAaQBwAG8APQBDAEEAVAA=&player=MDE5YTgwMTE2NWMxNDkxM2MwMTEyMTJh'
    );
});

$('.cap-launch-cov12').click(function () {
    $('#cap-play-cov12').attr('src',
        'https://prd20vod01.itesm.mx/VenusScript/iframe.html?ec=aQBkAFYAaQBkAGUAbwA9ADEANAA1ADgAMgAmAHQAaQBwAG8APQBDAEEAVAA=&player=MDE5YTgwMTE2NWMxNDkxM2MwMTEyMTJh'
    );
});

$('.cap-launch-cov13').click(function () {
    $('#cap-play-cov13').attr('src',
        'https://prd20vod01.itesm.mx/VenusScript/iframe.html?ec=aQBkAFYAaQBkAGUAbwA9ADEANAA1ADYANwAmAHQAaQBwAG8APQBDAEEAVAA=&player=MDE5YTgwMTE2NWMxNDkxM2MwMTEyMTJh'
    );
});

$('.cap-launch-cov14').click(function () {
    $('#cap-play-cov14').attr('src',
        'https://prd20vod01.itesm.mx/VenusScript/iframe.html?ec=aQBkAFYAaQBkAGUAbwA9ADEANAA1ADYANQAmAHQAaQBwAG8APQBDAEEAVAA=&player=MDE5YTgwMTE2NWMxNDkxM2MwMTEyMTJh'
    );
});

$('.cap-launch-cov15').click(function () {
    $('#cap-play-cov15').attr('src',
        'https://prd20vod01.itesm.mx/VenusScript/iframe.html?ec=aQBkAFYAaQBkAGUAbwA9ADEANAA1ADcANAAmAHQAaQBwAG8APQBDAEEAVAA=&player=MDE5YTgwMTE2NWMxNDkxM2MwMTEyMTJh'
    );
});

$('.cap-launch-cov16').click(function () {
    $('#cap-play-cov16').attr('src',
        'https://prd20vod01.itesm.mx/VenusScript/iframe.html?ec=aQBkAFYAaQBkAGUAbwA9ADEANAA1ADYANAAmAHQAaQBwAG8APQBDAEEAVAA=&player=MDE5YTgwMTE2NWMxNDkxM2MwMTEyMTJh'
    );
});

$('.cap-launch-cov17').click(function () {
    $('#cap-play-cov17').attr('src',
        'https://prd20vod01.itesm.mx/VenusScript/iframe.html?ec=aQBkAFYAaQBkAGUAbwA9ADEANAA1ADkANQAmAHQAaQBwAG8APQBDAEEAVAA=&player=MDE5YTgwMTE2NWMxNDkxM2MwMTEyMTJh'
    );
});

$('.cap-launch-cov18').click(function () {
    $('#cap-play-cov18').attr('src',
        'https://prd20vod01.itesm.mx/VenusScript/iframe.html?ec=aQBkAFYAaQBkAGUAbwA9ADEANAA1ADgANAAmAHQAaQBwAG8APQBDAEEAVAA=&player=MDE5YTgwMTE2NWMxNDkxM2MwMTEyMTJh'
    );
});