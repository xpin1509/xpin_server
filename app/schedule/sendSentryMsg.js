module.exports = {
  schedule: {
    interval: '1m', // 1 分钟间隔
    type: "all" // 指定所有的worker（进程）都需要执行
  },
  async task(ctx) {
    const url = 'https://oapi.dingtalk.com/robot/send?access_token=37cd51e9f1f37f2674216bc73d47aa600ec8fe28330b5624dc8c275419820ced'
    const secret = 'SECeb093d27575d74b9b04b82fb8a1052f054b570858edf5fd7c12e905cd07a2aeb'
    const msg =  {
      "msgtype": "markdown",
      "markdown": {
          "title": "打包信息",
          "text": "##### 打包变化:"
      }
    }
    try {
      const res = await ctx.service.dingdingMsgService.sendMsg(url, secret, msg)
      console.log(res)
    } catch (e) {
      console.log(e)
    }
  }
}