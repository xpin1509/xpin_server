const Controller = require('egg').Controller;

class DingDingMsg extends Controller {
  async send() {
    const { ctx } = this
    const { url, secret, msg } = ctx.request.body
    if (!url || !secret || !msg) {
      ctx.body = {
        status: 500,
        errMsg: 'url, secret, msg均不能为空'
      }
    }
    try {
      const res = await ctx.service.dingdingMsgService.sendMsg(url, secret, msg)
      ctx.body = {
        status: 200,
        data: res
      }
    } catch (e) {
      ctx.body = {
        status: 500,
        errMsg: '发送失败'
      }
    }
  }
}

module.exports = DingDingMsg;
