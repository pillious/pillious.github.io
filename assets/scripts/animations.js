$(document).ready(function () {
    animateElements();

    animateBackground();
})

function animateBackground() {
    particlesJS("intro-background", {
        "particles": {
            "number": {
                "value": 125,
                "density": {
                    "enable": true,
                    "value_area": 1000
                }
            },
            "color": {
                "value": "#64ffda"
            },
            "opacity": {
                "value": 0.5,
                "random": true,
            },
            "size": {
                "value": 3,
                "random": true,
                "anim": {
                    "enable": true,
                    "speed": 5,
                    "size_min": 0.1,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": true,
                "color": '#64ffda',
                "opacity": 0.15,
                "distance": 60,
            },
            "move": {
                "enable": true,
                "speed": 3,
                "direction": "none",
                "random": true,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 1200
                }
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "repulse"
                },
                "onclick": {
                    "enable": true,
                    "mode": "push"
                },
                "resize": true
            },
            "modes": {
                "repulse": {
                    "distance": 65,
                    "duration": 0.4
                },
                "push": {
                    "particles_nb": 6
                },
            }
        },
        "retina_detect": true
    });
}

// initialize the animations & only run animation when element is in view.
function animateElements() {
    var offset = $(window).height() / 1.6;

    $('.animate').each(function () {
        var elem = $(this);

        elem.waypoint(function () {
            elem.css({
                animation: elem.data('animate'),
                '-webkit-animation': elem.data('animate'),
                '-moz-animation': elem.data('animate'),
                'animation': elem.data('animate'),
            });
        }, {
            triggerOnce: true,
            offset: elem.data('offset') ? elem.data('offset') : offset
        })

    });
}