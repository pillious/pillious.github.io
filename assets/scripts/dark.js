var localStorage = window.localStorage;
var colorMode;

$(document).ready(function () {
    colorMode = getInitialColorMode();
    console.log(colorMode);
});

function getInitialColorMode() {
    const colorPreference = localStorage.getItem('mode');
    const hasColorPreference = typeof colorPreference === 'string';

    // Check if the user has explicitly chosen light or dark. 
    // If not, this value will be null.
    if (hasColorPreference) {
        return colorPreference;
    }

    // If they haven't been explicit, let's check the media query
    // mql -> media query list
    const mql = window.matchMedia('(prefers-color-scheme: dark)');
    const hasMediaQueryPreference = typeof mql.matches === 'boolean';
    if (hasMediaQueryPreference) {
        return mql.matches ? 'dark' : 'light';
    }

    // If browser/OS that doesn't support color themes, return 'light' as default.
    return 'light';
}

function updateColorPreference() {
    // toggle sections between light and dark.
    $('.about-wrapper').toggleClass('dark');
    $('#projects').toggleClass('dark');

    colorMode = colorMode === 'light' ? colorMode = 'dark' : colorMode = 'light';
    saveColorPreference(colorMode);

    console.log(colorMode);
}

function saveColorPreference(mode) {
    localStorage.setItem('mode', mode);
}