// ==UserScript==
// @name         Half Page Scroll with Spacebar
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  Scroll half a page with the spacebar (Shift+Space to scroll up)
// @match        *://*/*
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    window.addEventListener('keydown', function (event) {
        // Ignore if typing in an input, textarea, or editable content
        const activeEl = document.activeElement;
        const isTyping = activeEl.tagName === 'INPUT' ||
                         activeEl.tagName === 'TEXTAREA' ||
                         activeEl.isContentEditable;

        if (isTyping) return;

        // Spacebar key
        if (event.key === ' ' || event.code === 'Space') {
            event.preventDefault();

            const scrollAmount = window.innerHeight / 2;
            if (event.shiftKey) {
                // Scroll up
                window.scrollBy(0, -scrollAmount);
            } else {
                // Scroll down
                window.scrollBy(0, scrollAmount);
            }
        }
    });
})();
