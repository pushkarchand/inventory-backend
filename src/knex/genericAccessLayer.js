'use strict';

const knex = require('./knex');

/**
 * Description: Generic Access Layer Class
 * Calls it once to create its private static members
 */
let GenericAccessLayer = (() => {

    /**
     * Description: Generate an access layer for the MySQL Table via Knex
     * @param model: Table Name
     * @access constructor function for Generic Access Layer class
     */
    function constructor(model) {

        /**
         * Description: Returns rows of table as a promise
         * @param query: Object, where conditions
         * @param requiredFields: Array, columns that are to be extracted
         * @access privileged instance method
         * @return Promise {Object}, which resolves into a array of rows of table
         */
        this.find = (requiredFields = []) => {
            return knex(model)['select'](requiredFields)
                .then((result) => {
                    return result;
                });
        };

        /**
         * Description: Returns one row of table as a promise
         * @param query: Object, where conditions
         * @param requiredFields: Object, columns that are to be extracted
         * @access privileged instance method
         * @return Promise {Object}, which resolves into a row of table or null
         */
        this.findOne = (query, requiredFields = []) => {
            return knex(model)['select'](requiredFields).where(query)
                .then((result) => {
                    return result.length > 0 ? result[0] : null;
                });
        };

        /**
         * Description: Removes rows of table as a promise
         * @param query: Object, where conditions
         * @access privileged instance method
         * @return Promise {Object}, which resolves into a knex removal result object
         */
        this.remove = (query) => {
            return knex(model)['where'](query).del()
                .then((result) => {
                    return result;
                });
        };

        /**
         * Description: Creates one row as a promise
         * @param row: Object, a valid row
         * @access privileged instance method
         * @return Promise {Object}, which resolves into a knex creation result object
         */
        this.create = (row) => {
            return knex(model)['insert'](row)
                .then((result) => {
                    return result;
                });
        };

        /**
         * Description: Updates rows of a table as a promise
         * @param query: Object, where conditions
         * @param row: Object, updates
         * @param set_update (Optional): Boolean, to set the update time as well
         * @access privileged instance method
         * @return Promise {Object}, which resolves into a knex update result object
         */
        this.update = (query, row, set_update = true) => {
            if (set_update) {
                row['updated_at'] = knex['fn'].now();
            }

            return knex(model)['where'](query).update(row)
                .then((result) => {
                    return result;
                });
        };

        /**
         * Description: Updates rows of a table as a promise
         * @param query: Object, where conditions
         * @param values: array, values of placeholders in query
         * @param requiredFields: Array, columns that are to be extracted
         * @access privileged instance method
         * @return Promise {Object}, which resolves into a knex result object
         */
        this.raw = (query, values, requiredFields = []) => {
            return knex(model)['select'](requiredFields).where(knex['raw'](query, values))
                .then((result) => {
                    return result;
                });
        }
    }

    return constructor;
})();

module.exports = GenericAccessLayer;