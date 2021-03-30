const SENTRY_CONFIG = require('../constant/sentryConfig')

const Service = require('egg').Service

class sentryIssuesService extends Service {
    async getIssuesList () {
        try {
            const { ctx } = this;
            const { data } = await ctx.curl(SENTRY_CONFIG.SENTRY_URL, {
                headers: {
                    Authorization: `bearer ${SENTRY_CONFIG.BEARER_TOKEN}`
                }
            })
            return JSON.parse(data.toString())
        } catch (e) {
            return e
        }
    }
}

module.exports = sentryIssuesService