'use strict';

module.exports = {
  
  /**
   * 接口请求频繁检查
   * @param {String} key - session的Key值
   * @param {Number} ms - 缓冲时间，毫秒
   */
  notFrequent(key, ms = 60000) {
    if (this.session[key] && Date.now() - this.session[key] < ms) {
      this.handler(new Error('操作频繁，请稍后再试'));
      return false;
    }
    this.session[key] = Date.now();
    return true;
  },

  /** @param {Error|Object} data */
  handler(data) {
    if (data instanceof Error) {
      this.body = { status: 'err', errmsg: data.message };
    } else {
      this.body = { status: 'ok', data };
    }
  },
};
