'use strict';

/**
 * tutor service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::tutor.tutor');
