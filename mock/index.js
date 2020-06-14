export default {
    'get /workPlatform/menuList' : function (req, res) {
        res.json({
            status: 200,
            data: [{name:'menu1'},{name:'menu2'},{name:'menu3'}]
        })
    }
}