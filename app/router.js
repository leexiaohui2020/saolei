'use strict';
module.exports = app => {
  const { router, controller } = app;
  // router.get('/', controller.home.index);
  // 申请友链
  router.post('/api2020', controller.home.api2020);
  // 索取源码
  router.post('/api2021', controller.home.api2021);
};
