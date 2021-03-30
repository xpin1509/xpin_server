module.exports = {
  schedule: {
    interval: '24h', // 1 分钟间隔
    type: "all" // 指定所有的worker（进程）都需要执行
  },
  async task(ctx) {
    try {
      const res = await ctx.service.sendSentryMsgService.doSend()
      
      console.log(res)
    } catch (e) {
      console.log(e)
    }
  }
}