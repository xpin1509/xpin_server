const CryptoJS = require('crypto')
const Service = require('egg').Service

class dingdingMsgService extends Service {
    async sendMsg (url, secret, Msg) {
        const timestamp = Date.now()
        const stringToSign = timestamp + "\n" + secret
        const sign = CryptoJS.createHmac('sha256', secret).update(stringToSign).digest("base64")
        const signUrlencode = encodeURIComponent(sign)
        const { ctx } = this;
        try {
          const { data } = await ctx.curl(url + `&timestamp=${timestamp}&sign=${signUrlencode}`, {
            method: 'POST',
            data: Msg,
            contentType: 'json',
            dataType: 'json',
          })
          return data
        } catch (e) {
          return e
        }
    }
}

module.exports = dingdingMsgService