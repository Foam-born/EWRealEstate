'use strict';

/* == SANDWICH == */

const EVENTS = require('./../../scripts/constants/EVENTS');

const block = 'sandwich';

const mods = {
    opened: {
        name: block + '--opened',
        status: false
    }
};

$(document).ready(function () {
    const $block = $('.' + block);

    $block.on(EVENTS.ELEMENT.CLICK, function () {
        if(mods.opened.status) {
            sandwichClose($block, mods);
        } else {
            sandwichOpen($block, mods);
        }
    });

    $(document).on(EVENTS.CUSTOM.POPUP_MENU.CLOSED, function () {
        if(mods.opened.status) {
            sandwichClose($block, mods);
        } else {
            sandwichOpen($block, mods);
        }
    });
});

function sandwichOpen($block, mods) {
    $block.addClass(mods.opened.name);

    mods.opened.status = true;

    $(document).trigger(EVENTS.CUSTOM.SANDWICH.OPENED);
}

function sandwichClose($block, mods) {
    $block.removeClass(mods.opened.name);

    mods.opened.status = false;

    $(document).trigger(EVENTS.CUSTOM.SANDWICH.CLOSED);
}