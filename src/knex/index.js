'use strict';

const GenericAccessLayer = require('./genericAccessLayer');

module.exports = {
    User: new GenericAccessLayer('User'),
    Product: new GenericAccessLayer('Product')
};