const Mock = require("mockjs")
let mockData
let productList = [{
    name: "红富士苹果",
    price: 10,
    pic: "/img/pg",
    address: "山西",
    id:1
}, {
    name: "海南猕猴桃",
    price: 5,
    pic: "/img/mht",
    address: "海南",
    id:2
}, {
    name: "新疆大葡萄",
    price: 8,
    pic: "/img/pt",
    address: "新疆",
    id:3
}]

module.exports = { productList, mockData }