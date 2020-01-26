'use strict';
const Service = require('egg').Service;
const cheerio = require('cheerio');

class FlinkService extends Service {

  /**
   * @param {Object} opts
   * @param {String} opts.name
   * @param {String} opts.link
   */
  async add(opts = {}) {
    const { ctx } = this;
    const { name, link } = opts;
    if (await ctx.model.Flink.findOne({ link })) {
      return new Error('该链接已经提交过了');
    }

    if (!await this.validate(link)) {
      return new Error('请在贵站首页添加本站链接：https://saolei.game.leexiaohui.top');
    }

    await ctx.model.Flink.create({
      name,
      link,
      date: new Date(),
      display: true,
    });
  }

  async lst() {
    const { ctx } = this;
    return await ctx.model.Flink.find(
      { display: true },
      { _id: 0, __v: 0, date: 0 },
    ).sort({ date: 1 });
  }

  /**
   * 友链有效性检查
   * @param {String} url
   */
  async validate(url) {
    try {
      const { ctx } = this;
      const { data } = await ctx.curl(url, { dataType: 'text' });
      const $ = cheerio.load(data, { decodeEntities: false });
      const link = $('a[href^="https://saolei.game.leexiaohui.top"]');
      return link.length > 0;
    } catch(e) {
      return false;
    }
  }
}

module.exports = FlinkService;
