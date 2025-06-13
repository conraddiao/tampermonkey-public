// ==UserScript==
// @name         Half Page Scroll with Spacebar
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Scroll half a page with the spacebar in Chrome
// @match        *://*/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    window.addEventListener('keydown', function(event) {
        // Check if the spacebar is pressed
        if (event.keyCode === 32) {
            // Prevent default spacebar scrolling
            event.preventDefault();

            // Scroll down by half the window height
            window.scrollBy(0, window.innerHeight / 2);
        }
    });

})();
