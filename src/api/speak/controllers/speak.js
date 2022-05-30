'use strict';

/**
 *  speak controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::speak.speak');
