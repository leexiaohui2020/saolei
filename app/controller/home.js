'use strict';
const Controller = require('egg').Controller;

class HomeController extends Controller {
  
  // 友链申请
  async api2020() {
    const { ctx } = this;
    ctx.validate({
      link: { type: 'url' },
      name: { type: 'string' },
    });

    if (ctx.notFrequent('api2020')) {
      ctx.handler(await ctx.service.flink.add(ctx.request.body));
    }
  }

  // 索取源码
  async api2021() {
    const { ctx } = this;
    ctx.validate({ email: { type: 'email' } });

    if (ctx.notFrequent('api2021')) {
      ctx.handler(await ctx.service.exact.add(ctx.request.body));
    }
  }

  // 友链列表
  async api2022() {
    const { ctx } = this;
    ctx.handler(await ctx.service.flink.lst())
  }
}

module.exports = HomeController;
