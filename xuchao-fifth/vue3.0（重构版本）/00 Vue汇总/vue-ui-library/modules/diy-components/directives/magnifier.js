import { getStyle } from "../utils/tools"
export default {
    mounted(el, binding, vnode, prevVnode) {
        // console.log(el)

        const oImgWrap = el,
            oMagWrap = oImgWrap.querySelector('.mag-wrap'),
            oMagImg = oMagWrap.querySelector('.mag-img')


        const imgWidth = getStyle(oImgWrap, 'width'),
            imgHeight = getStyle(oImgWrap, 'height'),
            magWidth = getStyle(oMagWrap, 'width'),
            magHeight = getStyle(oMagWrap, 'height')

        // console.log(magHeight, magWidth)

        // 静态图片左上角顶点距离显示器左边和顶部的距离
        let imgX = oImgWrap.offsetLeft,
            imgY = oImgWrap.offsetTop


        // 组件中主要有三个部分的标签
        // 1 最外层的图片容器，用来装载静态图片，以及为显示框提供相对定位
        // 2 静态图片：大小位置始终不变，位于图片容器中，大小与容器相等
        // 3 显示框 相对于图片容器是绝对定位 当鼠标的坐标进入静态图片的范围的时候
        //          显示框的display为block，且层级大于静态图片
        //          显示框的大小比静态图片小，需要设置超出部分隐藏
        // 4 放大图片 相对于显示框是绝对定位 且与显示框距离 和 显示框与静态图片的距离
        //          是相反的，所以在鼠标移到静态图片左上角时
        //          鼠标位于显示框的正中心，静态图片左上角和放大图片左上角重合

        window.addEventListener("resize", (event) => {
            imgX = oImgWrap.offsetLeft
            imgY = oImgWrap.offsetTop
        })


        const init = () => {
            bindEvent()
        }

        function bindEvent() {
            oImgWrap.addEventListener('mouseover', (e) => {
                oMagWrap.className += ' show'
                document.addEventListener('mousemove', handleMouseMove)
            })
            oImgWrap.addEventListener('mouseout', handleMouseOut)
        }

        function handleMouseMove(e) {
            // console.log(getXY(e))
            const { x, y, mouseX, mouseY } = getXY(e)
            showMag(x, y, mouseX, mouseY)
        }

        function handleMouseOut() {
            oMagWrap.className = 'mag-wrap'
            document.removeEventListener('mousemove', handleMouseMove)
        }

        function showMag(x, y, mouseX, mouseY) {
            oMagWrap.style.left = x + 'px'
            oMagWrap.style.top = y + 'px'
            oMagImg.style.left = -x + 'px'
            oMagImg.style.top = -y + 'px'

            if (mouseX < 0 || mouseY < 0 || mouseX > imgWidth || mouseY > imgHeight) {
                handleMouseOut()
            }
        }

        function getXY(e) {
            // console.log(e.pageX, e.pageY)
            // console.log(imgX, imgY)

            return {
                // 显示框左上角顶点与静态图片左上角顶点的横纵距离
                x: e.pageX - imgX - magWidth / 2,
                y: e.pageY - imgY - magHeight / 2,

                // 鼠标位置相对于静态图片左上角顶点的横纵距离
                mouseX: e.pageX - imgX,
                mouseY: e.pageY - imgY
            }
        }

        init()
    },
}