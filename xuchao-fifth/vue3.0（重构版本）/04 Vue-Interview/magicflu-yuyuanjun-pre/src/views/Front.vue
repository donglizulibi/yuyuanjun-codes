<template>
    <!-- 
        vue3使用element-plus方法
        1. 安装命令（使用npm可能会报错）改用 vue add element-plus
        2. 选择按需加载组件，会出现plugins文件夹以及element.js文件
           往后需要用的组件放进这个文件中，其中默认已经有el-button组件
        3. 在main.js中将导入的installElementPlus回调函数传入app的use方法中
           即可全局使用
        4. 上述操作可能会重构App.vue页面，可以撤回到之前的操作
     -->
    <div class="home">
        <el-calendar>
            <template #dateCell="{ data }">
                <front-component
                    :dateList="dataList"
                    :day="data.day"
                ></front-component>
                <!-- <div :class="returnClass(data.day)">
                    {{ data.day.split('-')[2] }}
                    <div class="toolTip">
                        当前日期的内容vvvvvvvvvvdddd
                    </div>
                </div> -->
            </template>
        </el-calendar>
    </div>
</template>

<script>
import FrontComponent from '../components/FrontComponent.vue'
export default {

    components:{
        FrontComponent
    },
    data(){
        return {
            dataList:[
                {
                    time:'2023-08-24',
                    state:'finish',
                    list:[
                        "08-24thing1",
                        "08-24thing2",
                        "08-24thing3"
                    ]
                },
                {
                    time:'2023-08-26',
                    state:'unfinish',
                    list:[
                        "08-26thing1",
                        "08-26thing2",
                        "08-26thing3"
                    ]
                },
                {
                    time:'2023-08-27',
                    state:'finish',
                    list:[
                        "08-27thing1",
                        "08-27thing2",
                        "08-27thing3"
                    ]
                },
            ]
        }
    },
    methods:{
        
    }
}


</script>

<style lang="scss">
.home{
    width: 500px;
    height: 300px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
     .el-calendar{
        .el-calendar__body{
            margin-top: 10px;
            .el-calendar-table{
                border-collapse: collapse;
                .el-calendar-day{
                    height: 40px;
                    width: 80px;
                    padding: 0;
                    line-height: 40px;
                }
                .el-calendar-day:hover{
                    border-radius:40px;
                    background-color: rgba($color: #000000, $alpha: 0.2);
                    // opacity: 0.2;
                    color: white;
                    cursor: pointer;
                }

                td.is-today{
                    background-color: aqua;
                    border-radius: 40px;
                    color: white;
                }
                td.is-selected{
                    background-color: rgba($color:blue, $alpha: 0.5);
                    color: white;
                    border-radius: 40px;
                }

                td.next,td.prev{
                    opacity: 0.5;
                }
   
            }
        }
     }
}

.hastate{
    position: relative;
}

.hastate::after{
    content: "";
    position: absolute;
    display: none;
    bottom: 2px;
    left: 50%;
    margin-left: -4px;
    display: block;
    width: 8px;
    height: 8px;
    border-radius: 8px;
    // background-color: black;
}

.finish::after{
    background-color: green;
}
.unfinish::after{
    background-color: yellow;
}

.toolTip{
    display: none;
    width: 300px;
    background-color: wheat;
    border: 1px solid black;
    position: absolute;
    z-index: 99;
}

.is-selected .toolTip{
    display: block;
}


// .home .el-calendar>:nth-child(2){
//     margin-top: 20px;
// }
// .home .el-calendar>:nth-child(2)>:first-child{
//     border-collapse: collapse;
// }

// .home .el-calendar>:nth-child(2)>:first-child>:first-child>:nth-child(n){
//     height: 30px;
//     width: 60px;
//     border: 1px solid rgba(0, 0, 0, 0.5);
// }
// th 


// .home .el-calendar>:nth-child(2)>:first-child>:nth-child(2)>:nth-child(n){
//     height: 32px;
//     width: 60px;
//     background-color: aqua;
//     border: 1px solid black;
//     // opacity: .5;
// }
// tr

// .home .el-calendar>:nth-child(2)>:first-child>:nth-child(2)>:nth-child(n)>:nth-child(n){
//     height: 32px;
//     width: 60px;
//     border: 1px solid rgba(0, 0, 0, 0.5);
// }
// td

// .home td{
//     background-color: aqua;
// }
</style>