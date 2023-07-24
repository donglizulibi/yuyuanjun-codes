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

        const imgX = oImgWrap.offsetLeft,
            imgY = oImgWrap.offsetTop

        // console.log(imgHeight, imgWidth)
        // console.log(magHeight, magWidth)
        // console.log(imgX, imgY)

        const init = () => {
            bindEvent()
        }

        function bindEvent() {
            oImgWrap.addEventListener('mouseover', (e) => {
                oMagWrap.className += ' show'
                showMag(getXY(e).x, getXY(e).y)
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
            return {
                x: e.pageX - imgX - magWidth / 2,
                y: e.pageY - imgY - magHeight / 2,
                mouseX: e.pageX - imgX,
                mouseY: e.pageY - imgY
            }
        }

        init()
    },
}