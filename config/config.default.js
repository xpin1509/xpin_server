/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1608011327944_1363';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };
  config.security = {
    csrf: {
      enable: false
    }
  }
  // config.cors = {
  //   origin: ctx => ctx.get('origin'),
  //   allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH',
  //   credentials: true
  // }
  return {
    ...config,
    ...userConfig,
  };
};
