const _ = require('lodash');
const environment = _.get(process, 'env.NODE_ENV', 'development');
const config = require('./config/knex.js')[environment];

module.exports = require('knex')(config);