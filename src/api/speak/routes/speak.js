'use strict';

/**
 * speak router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::speak.speak');
