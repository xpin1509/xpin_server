const Service = require('egg').Service
const UserEmailToPhone = require('../constant/userMap')
const DINGDING_CONFIG = require('../constant/dingdingConfig')

class sendSentryMsgService extends Service {
    async doSend () {
        const { ctx } = this;
        try {
            const list = await ctx.service.sentryIssuesService.getIssuesList()
            
            const owners = []
            // markDown
            const msgItem = list.map((el,index) => {
                if (el.assignedTo && el.assignedTo.email && UserEmailToPhone[el.assignedTo.email]) {
                    owners.push('@' + UserEmailToPhone[el.assignedTo.email])
                }
                return `${index + 1}. ${el.title} \n [${el.culprit}](${el.permalink})`
            })
            // 去重
            const uniqeOwn = [...new Set(owners)]
            
            const Template =  {
                "msgtype": "markdown",
                "markdown": {
                    "title": "线上异常助手",
                    "text": msgItem.join('\n') + uniqeOwn.join('')
                },
                "at": {
                    "atMobiles": uniqeOwn,
                }
            }

            const res = await ctx.service.dingdingMsgService.sendMsg(DINGDING_CONFIG.ACCESS_TOKEN, DINGDING_CONFIG.SECRET, Template)
            
            return res
        } catch (e) {
          return e
        }
    }
}

module.exports = sendSentryMsgService