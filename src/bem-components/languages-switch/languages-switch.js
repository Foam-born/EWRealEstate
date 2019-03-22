'use strict';

const EVENTS = require('./../../scripts/constants/EVENTS');

const block = 'languages-switch';

const elems = {
    list: block + '__list',
    item: block + '__item',
    switcher: block + '__btn'
};

const mods = {
    selectedItem: block + '__item--selected',
    visibleList: block + '__list--visible',
    switcherClicked: block + '__btn--clicked'
};

$(document).ready(function () {
    const $block = $('.' + block),
          $list = $block.find('.' + elems.list),
          $item = $block.find('.' + elems.item),
          $switcher = $block.find('.' + elems.switcher);

    $switcher.on(EVENTS.ELEMENT.CLICK, function () {
        $switcher.addClass(mods.switcherClicked);

        $list.addClass(mods.visibleList);
    });

    $item.on(EVENTS.ELEMENT.CLICK, function () {
        $list.find('.' + mods.selectedItem).removeClass(mods.selectedItem);

        $(this).addClass(mods.selectedItem);

        $list.removeClass(mods.visibleList);

        $switcher.removeClass(mods.switcherClicked);
    });
});