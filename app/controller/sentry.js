

const Controller = require('egg').Controller;

class Sentryio extends Controller {
  async getData() {
    const { ctx } = this
    
    try {
        const res = await ctx.service.sendSentryMsgService.doSend()

        ctx.body = {
            status: 200,
            data: JSON.stringify(res)
        }
    } catch (e) {
        ctx.body = {
            status: 500,
            errMsg: e
        }
    }
  }
}

module.exports = Sentryio;
