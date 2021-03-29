const Service = require('egg').Service
const URL = 'https://oapi.dingtalk.com/robot/send?access_token=37cd51e9f1f37f2674216bc73d47aa600ec8fe28330b5624dc8c275419820ced'
const SECRET = 'SECeb093d27575d74b9b04b82fb8a1052f054b570858edf5fd7c12e905cd07a2aeb'

class sendSentryMsgService extends Service {
    async doSend () {
        const { ctx } = this;
        try {
            const list = await ctx.service.sentryIssuesService.getIssuesList()
            
            // markDown
            const msgItem = list.map((el,index) => {
                return `${index + 1}. ${el.title} \n [${el.culprit}](${el.permalink})`
            })
            const Template =  {
                "msgtype": "markdown",
                "markdown": {
                    "title": "线上异常",
                    "text": msgItem.join(' \n')
                }
            }

            const res = await ctx.service.dingdingMsgService.sendMsg(URL, SECRET, Template)
            
            return res
        } catch (e) {
          return e
        }
    }
}

module.exports = sendSentryMsgService