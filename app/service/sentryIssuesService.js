const SENTRY_URL = 'http://sentry.ymm56.com/api/0/projects/ymm/virtual-fleet/issues/'
const BEARER_TOKEN = '8ed90ef360dd4417af2a59333b1a1b9820e8903f7655420fbd00b35a936e2fbf'

const Service = require('egg').Service

class sentryIssuesService extends Service {
    async getIssuesList () {
        try {
            const { ctx } = this;
            const { data } = await ctx.curl(SENTRY_URL, {
                headers: {
                    Authorization: `bearer ${BEARER_TOKEN}`
                }
            })
            return JSON.parse(data.toString())
        } catch (e) {
            return e
        }
    }
}

module.exports = sentryIssuesService