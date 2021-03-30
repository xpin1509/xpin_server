const owners = [
    {
        email: 'bin.xu@amh-group.com',
        phone: '18013864209'
    },{
        email: 'chentw@amh-group.com',
        phone: '15051816943'
    },{
        email: 'lijia.ma@amh-group.com',
        phone: '17365471806'
    },{
        email: 'jingzhao5@amh-group.com',
        phone: '17721540286'
    },{
        email: 'qian.zhen@amh-group.com',
        phone: '18351825731'
    },{
        email: 'cheng.liu@amh-group.com',
        phone: '18355920305'
    }
]

const ownerShip = {}

owners.map(el => {
    ownerShip[el.email] = el.phone
})

module.exports = ownerShip