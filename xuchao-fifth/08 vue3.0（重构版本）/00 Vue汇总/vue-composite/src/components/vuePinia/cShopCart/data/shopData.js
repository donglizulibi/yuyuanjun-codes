const productData = [
    { id: 1, title: "ipad mini", price: 500.01, inventory: 3 },
    { id: 2, title: "TShirt", price: 20.88, inventory: 7 },
    { id: 3, title: "CD", price: 30.99, inventory: 13 },
]

async function wait(deley) {
    return new Promise(resolve => {
        setTimeout(resolve, deley)
    })
}

// 模拟一个返回商品列表的数据接口
export const getProducts = async() => {
    await wait(200)
    return productData
}

// 模拟一个订单可能成功也可能失败的数据接口
export const buyProducts = async() => {
    await wait(200)
    return Math.random() > 0.5
}