export default {
    'get /ds/list' : function (req, res) {
        res.json({
            data: ['zhangsan','lisi','wangwu']
        })
    }
}