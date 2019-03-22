'use strict';

const webpack = require('webpack');

// vue.config.js
module.exports = {
    configureWebpack: {
        plugins: [
            new webpack.ProvidePlugin({
                $: 'jquery',
                jQuery: 'jquery',
                slick: 'slick-carousel'
            })
        ]
    }
};