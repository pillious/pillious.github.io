// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);

// We listen to the resize event
window.addEventListener('resize', () => {
    // We execute the same script as before
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
});

// Smoothly scroll between sections & update navbar with active section
// Cache selectors
var lastId,
    topMenu = $("#nav-sections"),
    // 64 is navbar height
    topMenuHeight = 64 + 1,
    // All list items
    menuItems = topMenu.find("a"),
    // Anchors corresponding to menu items
    scrollItems = menuItems.map(function () {
        var item = $($(this).attr("href"));
        if (item.length) {
            return item;
        }
    });

// Bind click handler to menu items
// so we can get a fancy scroll animation
menuItems.click(function (e) {
    var href = $(this).attr("href"),
        offsetTop = href === "#" ? 0 : $(href).offset().top - topMenuHeight + 1;
    $('html, body').stop().animate({
        scrollTop: offsetTop
    }, 850);
    e.preventDefault();
});

// Bind to scroll
$(window).scroll(function () {
    // Get container scroll position
    var fromTop = $(this).scrollTop() + topMenuHeight;

    // Get id of current scroll item
    var cur = scrollItems.map(function () {
        if ($(this).offset().top < fromTop)
            return this;
    });
    // Get the id of the current element
    cur = cur[cur.length - 1];
    var id = cur && cur.length ? cur[0].id : "";

    if (lastId !== id) {
        lastId = id;
        // Set/remove active class
        menuItems
            .parent().removeClass("active")
            .end().filter("[href='#" + id + "']").parent().addClass("active");
    }
});

// smooth scroll to different sections
function scrollToSection(section) {
    // use +1px to update the active section in navbar
    $('html,body').animate({
        scrollTop: $('#' + section).offset().top - topMenuHeight + 1
    }, 'slow');
}

// open and close for collapsed navbar (mobile)
$('#nav-dropdown-trigger').click(function (e) {
    e.preventDefault();
    $('#nav-sections').toggleClass("slideup slidedown");
})

// detect if mailto: worked
$('a[href^=mailto]').each(function () {
    var href = $(this).attr('href');
    $(this).click(function () {
        var t;
        var self = $(this);
        $(window).blur(function () {
            // The browser apparently responded, so stop the timeout.
            clearTimeout(t);
        });

        t = setTimeout(function () {
            // The browser did not respond after 500ms, so open an alternative URL.
            document.location.href = '...';
        }, 500);
    });
});