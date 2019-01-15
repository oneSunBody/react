const shopData = require("./mock/data.js")
module.exports = (app) => {
    app.get("/fruitsData", (req, res) => {
       res.send(shopData.productList)
    })
}