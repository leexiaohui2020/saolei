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
      await ctx.service.flink.add(ctx.request.body);
      ctx.session.api2020 = Date.now();
      ctx.body = { status: 'ok' };
    }
  }
}

module.exports = HomeController;
