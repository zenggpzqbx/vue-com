export default {
    beforeMount(el, binding) {
        //默认用户输入的数据没有问题，代码逻辑是需要检查的
        if (binding.value && binding.value.hasOwnProperty('left') && binding.value.hasOwnProperty('top')){
            el.style.left = binding.value.left + 'px'
            el.style.top = binding.value.top + 'px'
        }
        el.style.position = 'fixed'
    },
    mounted(el, binding) {
        let down_x = 0,
            down_y = 0,
            srcLeft = 0,
            srcTop = 0,
            maxLeft = 0,
            maxTop = 0
        document.addEventListener("selectstart", e => {
            e.preventDefault()
        })

        function mouseDownEvent(e, el) {
            down_x = e.clientX
            down_y = e.clientY
            srcLeft = el.offsetLeft
            srcTop = el.offsetTop
            maxLeft = document.documentElement.clientWidth - el.offsetWidth
            maxTop = document.documentElement.clientHeight - el.offsetHeight
        }

        function mouseMoveEvent(e, el) {
            let move_x = e.clientX, move_y = e.clientY
            let diff_x = move_x - down_x, diff_y = move_y - down_y
            let left = srcLeft + diff_x, top = srcTop + diff_y
            if (left <= 0) {
                left = 0
            }
            if (left >= maxLeft) {
                left = maxLeft
            }
            if (top <= 0) {
                top = 0
            }
            if (top >= maxTop) {
                top = maxTop
            }
            el.style.left = left + 'px'
            el.style.top = top + 'px'
        }

        function mouseMoveCallback(e) {
            mouseMoveEvent(e, el)
        }

        el.addEventListener('mousedown', downEvent => {
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