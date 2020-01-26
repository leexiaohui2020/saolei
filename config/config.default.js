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

  config.mongoose = {
    url: 'mongodb://localhost:27017/SAOLEI-V1',
    options: { useUnifiedTopology: true },
  };

  config.security = { csrf: false };

  // 接口api2021相关配置
  config.api2021 = {
    name: '扫雷开源在线',
    user: 'game_saolei@sina.com',
    pass: '8d8f1bf03c048db5',
    host: 'smtp.sina.com',
    port: 465,
    attachments: [{
      filename: '扫雷游戏源码.zip',
      path: path.join(__dirname, '../private/扫雷游戏源码.zip'),
    }],
  };
  return config;
};
