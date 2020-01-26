'use strict';
const Controller = require('egg').Controller;

class HomeController extends Controller {
  
  // 友链申请
  async api2020() {
    const { ctx } = this;
    ctx.validate({
      name: { type: 'string' },
      link: { type: 'url' },
    });

    if (ctx.session.api2020 && Date.now() - ctx.session.api2020 < 60000) {
      ctx.body = { status: 'err', errmsg: '操作频繁，请稍后再试' };
    } else {
      ctx.session.api2020 = Date.now();
      await ctx.service.flink.add(ctx.request.body);
      ctx.body = { status: 'ok' };
    }
  }

  // 索取源码
  async api2021() {
    const { ctx } = this;
    ctx.validate({
      email: { type: 'email' },
    });

    if (ctx.session.api2021 && Date.now() - ctx.session.api2021 < 60000) {
      ctx.body = { status: 'err', errmsg: '操作频繁，请稍后再试' };
    } else {
      ctx.session.api2021 = Date.now();
      await ctx.service.exact.add(ctx.request.body);
      ctx.body = { status: 'ok' };
    }
  }
}

module.exports = HomeController;
