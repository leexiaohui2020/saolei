/** @file 检查友链的有效性 */
'use strict';
const Subscription = require('egg').Subscription;
const cheerio = require('cheerio');

class FlinkValidityChecker extends Subscription {
  static get schedule() {
    return {
      type: 'worker',
      cron: '0 0 4 * * ?',
    };
  }

  async subscribe() {
    const { ctx } = this;
    const flinks = await ctx.model.Flink.find({});
    const report = { total: 0, invalid: 0, repeal: 0, add: 0 };
    
    for (const item of flinks) {
      try {
        // 1. 检查网址是否有效，无效则抛出错误
        const { data } = await ctx.curl(item.link, { dataType: 'text' });
        const $ = cheerio.load(data, { decodeEntities: false });
        // 2. 检查网页是否存在本站链接
        const link = $('a[href^="https://saolei_game.leexiaohui.top"]');
        if (link.length === 0) throw new Error('首页没放链接');
        // 3. 至此可判断友链生效
        if (!item.display) {
          report.add += 1;
          await item.updateOne({ $set: { display: true } });
        }
      } catch (e) {
        if (item.display) {
          report.repeal += 1;
          await item.updateOne({ $set: { display: false } });
        } else {
          report.invalid += 1;
          await item.remove();
        }
      }
      report.total += 1;
    }

    ctx.logger.info(
      '友链检查报告：全部%d条；新生效%d条；撤销%d条；删除%d条',
      report.total, report.add, report.repeal, report.invalid,
    );
  }
}

module.exports = FlinkValidityChecker;
