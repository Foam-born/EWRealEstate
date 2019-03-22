'use strict';

const block = 'base-select';

const elems = {
    dropdown: block + '__dropdown'
};

$(document).ready(() => {
    const $block = $('.' + block);
    const $dropdown = $block.find('.' + elems.dropdown);

    $dropdown.dropdown();
});