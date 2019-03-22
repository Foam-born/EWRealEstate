import Vue from 'vue/dist/vue'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery.maskedinput/src/jquery.maskedinput'
import 'slick-carousel/slick/slick.min.js'
import 'slick-carousel/slick/slick.css'
import './styles/main.styl'

window.IS_MOBILE = window.innerWidth < 720;

import 'semantic-ui-button/button.min.css'
import 'semantic-ui-input/input.min.css'
import 'semantic-ui-transition/transition.min.css'
import 'semantic-ui-transition/transition.min.js'
import 'semantic-ui-dropdown/dropdown.min.css'
import 'semantic-ui-dropdown/dropdown.min.js'

import './bem-components/link-tag/link-tag.styl'
import './bem-components/link-tile/link-tile.styl'
import './bem-components/button/button.styl'
import './bem-components/base-input/base-input.styl'
import './bem-components/base-input/base-input'
import './bem-components/base-select/base-select.styl'
import './bem-components/base-select/base-select.js'
import './bem-components/search-block/search-block.styl'
import './bem-components/offer-card/offer-card.styl'
import './bem-components/germany-img-map/germany-img-map.styl'
import './bem-components/logo/logo.styl'
import './bem-components/menu/menu.styl'
import './bem-components/menu/menu'
import './bem-components/sandwich/sandwich.styl'
import './bem-components/sandwich/sandwich'
import './bem-components/languages-switch/languages-switch.styl'
import './bem-components/languages-switch/languages-switch'
import './bem-components/consultation-form/consultation-form.styl'

import './bem-components/section/section.styl'
import './bem-components/first-screen/first-screen.styl'
import './bem-components/section-search/section-search.styl'
import './bem-components/section-catalog/section-catalog.styl'
import './bem-components/section-region-catalog/section-region-catalog.styl'
import './bem-components/section-last-offers/section-last-offers.styl'
import './bem-components/section-popular-offers/section-popular-offers.styl'
import './bem-components/section-slider/section-slider.styl'
import './bem-components/section-slider/section-slider.js'
import './bem-components/site-header/site-header.styl'
import './bem-components/section-text/section-text.styl'
import './bem-components/section-last-news/section-last-news.styl'
import './bem-components/site-footer/site-footer.styl'
import './bem-components/section-consultation-form/section-consultation-form.styl'


import GermanyMap from './vue-components/GermanyMap.vue'

new Vue({
    el: '#germany-map',

    components: {GermanyMap}
});