// import Mock from "mockjs"
const Mock = require("mockjs")
const Random = Mock.Random
module.exports = () => {
    let data = { article: [] }
    for (let i = 1; i <= 5; i++) {
        data.article.push({
            id: i,
            title: Random.cword(10, 20)
        })
    }
    return data
}