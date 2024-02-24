export default {
    mounted(el, binding) {
        el.style.cursor = 'pointer'
        el.style.overflow = 'auto'
        let start_x, start_y, diff_x, diff_y, start_scroll_left, start_scroll_Top
        function mouseDownEvent(e){
            start_x = e.clientX
            start_y = e.clientY
            start_scroll_left = el.scrollLeft
            start_scroll_Top = el.scrollTop
            el.addEventListener('mousemove', mouseMoveEvent)
        }
        function mouseMoveEvent(e){
            e.preventDefault();
            diff_x = start_x - e.clientX
            diff_y = start_y - e.clientY
            el.scrollLeft = start_scroll_left + diff_x
            el.scrollTop = start_scroll_Top + diff_y
        }
        el.addEventListener('mousedown', mouseDownEvent)
        document.addEventListener('mouseup',e => {
            el.removeEventListener('mousemove', mouseMoveEvent)
        })
        document.addEventListener('selectstart', e => {
            e.preventDefault()
        })
    },
}