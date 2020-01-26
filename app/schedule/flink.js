/** @file 检查友链的有效性 */
'use strict';
const Subscription = require('egg').Subscription;

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
      if (await ctx.service.flink.validate(item.link)) {
        if (!item.display) {
          report.add += 1;
          await item.updateOne({ $set: { display: true } });
        }
      } else if (item.display) {
        report.repeal += 1;
        await item.updateOne({ $set: { display: false } });
      } else {
        report.invalid += 1;
        await item.remove();
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
