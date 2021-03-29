'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.post('/dingdingMsg/send', controller.dingdingMsg.send);
  router.get('/sentry', controller.sentry.getData);
};
