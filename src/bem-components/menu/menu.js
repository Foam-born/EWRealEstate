'use strict';

const EVENTS = require('./../../scripts/constants/EVENTS');

const block = 'menu';

const elems = {
    list: block + '__list',
    item: block + '__item',
    link: block + '__link',
    buttonSubmenu: block + '__btn'
};

const mods = {
    opened: {
        name: block + '--mobile-view',
        status: false
    },
    rotate: block + '__btn--rotate'
};

$(document).ready(function () {
    const $block = $('.' + block),
        $item = $block.find('.' + elems.item);

    let submenuOpen = false;

    $item.find('.' + elems.list).before("<div class='" + elems.buttonSubmenu + "'></div>");


    $(document).on(EVENTS.CUSTOM.SANDWICH.OPENED, function () {
        openMenu($block);
    });

    $(document).on(EVENTS.CUSTOM.SANDWICH.CLOSED, function () {
        closeMenu($block);
    });

    $item.on(EVENTS.ELEMENT.MOUSE_OVER, function () {
        $(this).find('.' + elems.buttonSubmenu).addClass(mods.rotate);

        $(this).find('.' + elems.list).show();
    });

    $item.on(EVENTS.ELEMENT.MOUSE_OUT, function () {
        $(this).find('.' + elems.buttonSubmenu).removeClass(mods.rotate);

        $(this).find('.' + elems.list).hide();
    });

    $item.on(EVENTS.ELEMENT.CLICK, function () {
        if (submenuOpen) {
            $(this).find('.' + elems.list).hide();

            submenuOpen = false;
        } else {
            $(this).find('.' + elems.list).show();

            submenuOpen = true;
        }
    });
});

function closeMenu($block) {
    $block.removeClass(mods.opened.name);

    mods.opened.status = false;
}

function openMenu($block) {
    $block.addClass(mods.opened.name);

    mods.opened.status = true;
}

function menuIsOpen() {
    return mods.opened.status;
}

export {
    menuIsOpen
}