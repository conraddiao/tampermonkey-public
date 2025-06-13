// ==UserScript==
// @name         Half Page Smooth Scroll with Spacebar
// @namespace    http://tampermonkey.net/
// @version      0.3
// @description  Smoothly scroll half a page with the spacebar (Shift+Space to scroll up)
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
        // ==UserScript==
// @name         Half Page Smooth Scroll with Spacebar
// @namespace    http://tampermonkey.net/
// @version      0.3
// @description  Smoothly scroll half a page with the spacebar (Shift+Space to scroll up)
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

        if (location.hostname.includes('youtube.com') && location.pathname.startsWith('/watch')) return;

        // Spacebar key
        if (event.key === ' ' || event.code === 'Space') {
            event.preventDefault();

            const scrollAmount = window.innerHeight / 2;
            const direction = event.shiftKey ? -1 : 1;

            window.scrollBy({
                top: direction * scrollAmount,
                left: 0,
                behavior: 'smooth'
            });
        }
    });
})();


        // Spacebar key
        if (event.key === ' ' || event.code === 'Space') {
            event.preventDefault();

            const scrollAmount = window.innerHeight / 2;
            const direction = event.shiftKey ? -1 : 1;

            window.scrollBy({
                top: direction * scrollAmount,
                left: 0,
                behavior: 'smooth'
            });
        }
    });
})();
