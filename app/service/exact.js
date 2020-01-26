'use strict';
const Service = require('egg').Service;

class ExactService extends Service {

  /**
   * 发送源码到邮箱
   * @param {Object} opts
   * @param {String} opts.email
   */
  async add(opts = {}) {
    const { app, ctx } = this;
    const { email } = opts;
    const { api2021 } = this.config;
    await app.transporter.sendMail({
      to: email,
      from: `${api2021.name}<${api2021.user}>`,
      subject: '扫雷游戏源码分享',
      attachments: api2021.attachments,
    });
    await ctx.model.Exact.create({ email, date: new Date() });
    ctx.logger.info('发送了一份源码，接收者：%s', email);
  }
}

module.exports = ExactService;
