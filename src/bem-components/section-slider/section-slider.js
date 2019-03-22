'use strict';

import EVENTS from '../../scripts/constants/EVENTS'
import {TweenLite} from 'gsap/TweenMax'
import _throttle from 'lodash/throttle'

const block = 'section-slider';

const elems = {
    list: block + '__slider-list',
    item: block + '__item',
    arrowPrev: block + '__arrow-prev',
    arrowNext: block + '__arrow-next'
};

const mods = {
    active: elems.item + '--active'
};

const debouncedMousemoveHandler = _throttle(function (diff) {
    if (diff < 0) {
        this.$list.off(EVENTS.ELEMENT.MOUSEMOVE);

        this.moveForward();
    } else {
        this.$list.off(EVENTS.ELEMENT.MOUSEMOVE);

        this.moveBack();
    }
}, 300);

class VerticalSlider {
    constructor($root = $(`.${block}`), step = 50) {
        this.$root = $root;
        this.$list = this.$root.find('.' + elems.list);
        this.$arrowPrev = this.$root.find('.' + elems.arrowPrev);
        this.$arrowNext = this.$root.find('.' + elems.arrowNext);
        this.$items = this.$root.find('.' + elems.item);

        this.step = step;
        this.currentOffset = 0;

        this.mousemoveYStart = 0;

        this.init();
    }

    init() {
        this.setListeners();
    }

    setListeners() {
        this.$arrowPrev.on(EVENTS.ELEMENT.CLICK, this.moveBack.bind(this));

        this.$arrowNext.on(EVENTS.ELEMENT.CLICK, this.moveForward.bind(this));

        this.$list.on(IS_MOBILE ? EVENTS.ELEMENT.TOUCH_START : EVENTS.ELEMENT.MOUSEDOWN, event => {
            this.mousemoveYStart = event.clientY + window.pageYOffset;

            this.$list.on(IS_MOBILE ? EVENTS.ELEMENT.TOUCH_MOVE : EVENTS.ELEMENT.MOUSEMOVE, event => {
                let diff = event.clientY + window.pageYOffset - this.mousemoveYStart;
                
                if (Math.sqrt(diff * diff) > this.step) {
                    debouncedMousemoveHandler.call(this, diff)
                }
            });

            $(document).on(IS_MOBILE ? EVENTS.ELEMENT.TOUCH_END : EVENTS.ELEMENT.MOUSEUP, () => {
                this.$list.off(EVENTS.ELEMENT.MOUSEMOVE)
            })
        })
    }

    moveBack() {
        if (this.currentOffset <= -this.step) {
            const $activeElem = this.$list.find('.' + mods.active);

            this.currentOffset += this.step;

            TweenLite
                .to(this.$list, 1, {
                    y: this.currentOffset,

                    onComlete: () => {
                        $activeElem.prev().addClass(mods.active);
                    }
                });

            $activeElem.removeClass(mods.active);
        }
    }

    moveForward() {
        if (this.currentOffset >= -(this.step * (this.$items.length - 2))) {
            const $activeElem = this.$list.find('.' + mods.active);

            this.currentOffset -= this.step;

            TweenLite
                .to(this.$list, 1, {
                    y: this.currentOffset,

                    onComlete: () => {
                        $activeElem.next().addClass(mods.active);
                    }
                });

            $activeElem.removeClass(mods.active);
        }
    }
}

$(document).ready(function () {
    new VerticalSlider();
});