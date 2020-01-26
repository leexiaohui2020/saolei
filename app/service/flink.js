'use strict';
const Service = require('egg').Service;

class FlinkService extends Service {

  /**
   * @param {Object} opts
   * @param {String} opts.name
   * @param {String} opts.link
   */
  async add(opts = {}) {
    const { ctx } = this;
    await ctx.model.Flink.create({
      name: opts.name,
      link: opts.link,
      date: new Date(),
    });
    ctx.logger.info('友链申请：[%s]@[%s]', opts.name, opts.link);
  }
}

module.exports = FlinkService;
