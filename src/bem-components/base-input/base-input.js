'use strict';

const block = 'base-input';

const elems = {
    phone: block + '__phone'
};

$(document).ready(function () {
    const $block = $('.' + block);

    $block.find('.' + elems.phone).mask("8(999) 999-9999");
});