function houdunren() {
    hd()
    console.log('houdunren.js')
}

// 在这里houdunren函数就是依赖hd函数，必须等hd函数执行完了，才能执行houdunren

// 如果换到任务列表的概念的话，就是先把hd放到任务列表里
// 然后再把houdunren放到任务列表
// 必须等hd执行完了才能执行houdunren