

const Controller = require('egg').Controller;

class Sentryio extends Controller {
  async getData() {
    const { ctx } = this
    try {
        ctx.body = {
            status: 200,
            data: 'hello'
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
