let computeAction = undefined
let playerAction = process.argv[process.argv.length - 1]
let rand = Math.random() * 3

if (rand < 1) {
    computeAction = 'rock'
} else if (rand >= 1 && rand < 2) {
    computeAction = 'paper'
} else {
    computeAction = 'scissor'
}

console.log('电脑出的是：' + computeAction)
if (computeAction === playerAction) {
    console.log('平局')
} else if (
    computeAction === 'paper' && playerAction === 'scissor' ||
    computeAction === 'scissor' && playerAction === 'rock' ||
    computeAction === 'rock' && playerAction === 'paper'
) {
    console.log('你赢了')
} else {
    console.log('你输了')
}