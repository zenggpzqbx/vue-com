const handlerMap = new Map()
const ob = new ResizeObserver(entries =>{
    for (const entry of entries) {
        if ( !handlerMap.has(entry.target)) return
        let handler = handlerMap.get(entry.target)
        handler()
    }
} )
export default {
    // 在绑定元素的 attribute 前
    // 或事件监听器应用前调用
    created(el, binding) {
        // 下面会介绍各个参数的细节
    },
    // 在元素被插入到 DOM 前调用
    beforeMount(el, binding) {
    },
    // 在绑定元素的父组件
    // 及他自己的所有子节点都挂载完成后调用
    mounted(el, binding) {
        ob.observe(el)
        if (typeof binding.value === 'function'){
            handlerMap.set(el, binding.value)
        }
        function inBetween(data, min, max) {
            return data > min && data < max
        }
        let resizeType = null
        let src_width, src_height, src_x, src_y
        el.addEventListener('mousemove', function (e) {
            let rect = this.getBoundingClientRect(), x = e.offsetX, y = e.offsetY
            let tolerance = 5
            this.style.cursor = 'default';
            // resizeType = null
            //右边界
            if (inBetween(x, rect.width - tolerance, rect.width) && inBetween(y, tolerance, rect.height - tolerance)) {
                this.style.cursor = 'ew-resize';
                resizeType = 'width'
            }
            //下边界
            if (inBetween(x, tolerance, rect.width - tolerance) && inBetween(y, rect.height - tolerance, rect.height)) {
                this.style.cursor = 'ns-resize';
                resizeType = 'height'
            }
            // 右下角
            if (inBetween(x, rect.width - tolerance, rect.width) && inBetween(y, rect.height - tolerance, rect.height)) {
                this.style.cursor = 'nwse-resize';
                resizeType = 'both'
            }
        })
        function resizeDown(e) {
            src_x = e.clientX
            src_y = e.clientY
            src_width = e.target.offsetWidth
            src_height =  e.target.offsetHeight
            document.addEventListener('mousemove', resizeMove)
            document.addEventListener('mouseup', resizeUp)
        }

        function resizeMove(e) {
            let diff_x = e.clientX - src_x, diff_y = e.clientY - src_y
            if (resizeType === 'width') {
                el.style.width = src_width + diff_x + 'px'
            }
            if (resizeType === 'height') {
                el.style.height = src_height + diff_y + 'px'
            }
            if (resizeType === 'both') {
                el.style.width = src_width + diff_x + 'px'
                el.style.height = src_height + diff_y + 'px'
            }
        }

        function resizeUp(e) {
            resizeType = null
            document.removeEventListener('mousemove', resizeMove)
            document.removeEventListener('mouseup', resizeUp)
        }

        el.addEventListener('mousedown', resizeDown)
    },
    // 绑定元素的父组件更新前调用
    beforeUpdate(el, binding) {
    },
    // 在绑定元素的父组件
    // 及他自己的所有子节点都更新后调用
    updated(el, binding) {
    },
    // 绑定元素的父组件卸载前调用
    beforeUnmount(el, binding) {
        ob.unobserve(el)
        if (handlerMap.has(el)){
            handlerMap.delete(el)
        }
    },
    // 绑定元素的父组件卸载后调用
    unmounted(el, binding) {
    }
}