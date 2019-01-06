const axios = require("axios")
const { jsData, mockData } = require("./data")

module.exports = (app) => {
    console.log(app)
    app.get("/banList", (req, res) => {
        axios.get("https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg?g_tk=5381&uin=0&format=json&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1&_=1546603861417").then((result) => {
            res.send(result.data)
        })
    })

    app.get("/loadMoreData", (req, res) => {
        let {num,page}=req.query
        console.log(num,page)
            axios.get(`https://c.y.qq.com/v8/fcg-bin/fcg_v8_toplist_cp.fcg?tpl=3&page=detail&date=2019-01-04&topid=4&type=top&song_begin=${page}&song_num=${num}&g_tk=5381&loginUin=0&hostUin=0&format=json&inCharset=utf8&outCharset=utf-8&notice=0&platform=yqq.json&needNewCode=0`).then((result) => {
            res.send(result.data)
        })

    })
    
}