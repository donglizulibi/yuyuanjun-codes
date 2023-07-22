import { getStyle } from "../utils/tools"
export default {
    mounted(el, binding, vnode, prevVnode) {
        console.log(el)

        const oImgWrap = el,
            oMagWrap = oImgWrap.querySelector('.mag-wrap'),
            oMagImg = oMagWrap.querySelector('.mag-img')


        const imgWidth = getStyle(oImgWrap, 'width'),
            imgHeight = getStyle(oImgWrap, 'height'),
            magWidth = getStyle(oMagWrap, 'width'),
            magHeight = getStyle(oMagWrap, 'height')

        const imgX = oImgWrap.offsetLeft,
            imgY = oImgWrap.offsetTop

        console.log(imgHeight, imgWidth)
        console.log(magHeight, magWidth)
        console.log(imgX, imgY)

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

        function handleMouseMove() {
            console.log(123)
        }

        function handleMouseOut() {
            oMagWrap.className = 'mag-wrap'
            document.removeEventListener('mousemove', handleMouseMove)
        }



        init()
    },
}