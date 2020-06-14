export default {
    'get /workPlatform/menuList': function (req, res) {
        res.json({
            status: 200,
            data: [{ name: '人员列表', key: 'list' }, { name: '新增人员', key: 'add' }]
        })
    },

    'post /list/peopleList': function (req, res) {
        res.json({
            status: 200,
            data: [
                { name: '张三', avatar: 'list', description: '描述' },
                { name: '李四', avatar: 'add', description: '描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述' },
            ]
        })
    },
}