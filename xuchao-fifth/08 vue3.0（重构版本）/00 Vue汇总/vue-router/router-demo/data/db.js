// import Mock from "mockjs"
const Mock = require("mockjs")
const Random = Mock.Random
module.exports = () => {
    let data = { article: [], user: [] }
    for (let i = 1; i <= 5; i++) {
        data.article.push({
            id: i,
            title: Random.cword(10, 20),
            content: Random.cparagraph(10)
        })

        data.user.push({
            name: Random.cword(3)
        })
    }
    return data
}