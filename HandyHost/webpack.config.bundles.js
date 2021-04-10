'use strict';

let entryConfig = {
    'homeBundle': [
        'babel-polyfill',
        './Scripts/Custom/Home/index.js'
    ],
    'customersBundle': [
        'babel-polyfill',
        './Scripts/Custom/Customers/index.js'
    ]
};

module.exports = entryConfig;