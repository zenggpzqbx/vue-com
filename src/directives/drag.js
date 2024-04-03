import {PopupManager} from "../globalVar/index.js";

export default {
    beforeMount(el, binding) {
        el.style.position = 'fixed'
        el.style.transform = 'translate(0px,0px)'
        el.style.zIndex = PopupManager.nextZIndex()
    },
    mounted(el, binding) {
        //求出一个元素的minTransX,maxTransX, minTransY,maxTransY,
        let minTransX = el.offsetLeft
        let maxTransX = document.documentElement.clientWidth - el.offsetLeft - el.offsetWidth
        let minTransY = el.offsetTop
        let maxTransY = document.documentElement.clientHeight - el.offsetTop - el.offsetHeight
        let default_transX,default_transY
        let down_x = 0,
            down_y = 0
        document.addEventListener("selectstart", e => {
            e.preventDefault()
        })

        function mouseDownEvent(e, el) {
            down_x = e.clientX
            down_y = e.clientY
            let trans = el.style.transform.match(/\d+/g)
            default_transX = Number(trans[0])
            default_transY = Number(trans[1])
        }

        function mouseMoveEvent(e, el) {
            let move_x = e.clientX, move_y = e.clientY
            let diff_x = move_x - down_x, diff_y = move_y - down_y
            let transX = default_transX + diff_x
            let transY = default_transY + diff_y
            if (transX <= minTransX){
                transX = minTransX
            }
            if (transX >= maxTransX){
                transX = maxTransX
            }
            if (transY <= minTransY){
                transY = minTransY
            }
            if (transY >= maxTransY){
                transY = maxTransY
            }
            el.style.transform = `translate(${transX}px, ${transY}px)`

        }

        function mouseMoveCallback(e) {
            mouseMoveEvent(e, el)
        }

        el.addEventListener('mousedown', downEvent => {
            el.style.zIndex = PopupManager.nextZIndex()
            mouseDownEvent(downEvent, el)
            document.addEventListener('mousemove', mouseMoveCallback)
        })
        el.addEventListener('mouseup', e => {
            document.removeEventListener('mousemove', mouseMoveCallback)
        })
        document.addEventListener('mouseup', e => {
            document.removeEventListener('mousemove', mouseMoveCallback)
        })
    },
}