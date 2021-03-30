const owners = [
    {
        name: '徐斌',
        email: 'bin.xu@amh-group.com',
        phone: '18013864209'
    },{
        name: '陈天唯',
        email: 'chentw@amh-group.com',
        phone: '15051816943'
    },{
        name: '马立佳',
        email: 'lijia.ma@amh-group.com',
        phone: '17365471806'
    },{
        name: '赵静',
        email: 'jingzhao5@amh-group.com',
        phone: '17721540286'
    },{
        name: '甄倩',
        email: 'qian.zhen@amh-group.com',
        phone: '18351825731'
    },{
        name: '刘成',
        email: 'cheng.liu@amh-group.com',
        phone: '18355920305'
    }
]

const ownerShip = {}

owners.map(el => {
    ownerShip[el.email] = el.phone
})

module.exports = ownerShip