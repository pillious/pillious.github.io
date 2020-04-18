$(document).ready(function() {
    var offset = $(window).height() / 1.6;

    $('.animate').each( function() {
        var elem = $(this);

        elem.waypoint(function() {
            elem.css({
                animation: elem.data('animate'),
                '-webkit-animation': elem.data('animate'),
                '-moz-animation': elem.data('animate'),
                'animation': elem.data('animate'),
                opacity: 1
            });
        }, { triggerOnce: true, offset: offset})

    } );
})