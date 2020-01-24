'use strict';
const fs = require('fs');
const path = require('path');

/** @param {Egg.EggAppInfo} appInfo */
module.exports = appInfo => {
  const config = exports = {};
  config.keys = appInfo.name + '_1579891846452_4855';
  config.middleware = [];

  const staticDir = path.join(__dirname, '../public');
  config.static = {
    prefix: '/',
    dir: staticDir,
  };

  config.siteFile = {
    '/': fs.readFileSync(path.join(staticDir, 'index.html')),
    '/favicon.ico': fs.readFileSync(path.join(staticDir, 'favicon.ico')),
  };

  config.cluster = {
    listen: { port: 20201 },
  };
  return config;
};
