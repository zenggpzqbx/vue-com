export default {
    updatePosition(el,binding){
        let maxLeft = document.documentElement.offsetWidth - el.offsetWidth,
            maxTop = document.documentElement.offsetHeight -  el.offsetHeight,
            left = binding.arg.left, top = binding.arg.top;
        if (left <= 0){
            left = 0
        }
        if (left >= maxLeft ){
            left = maxLeft
        }
        if (top <= 0){
            top = 0
        }
        if (top >= maxTop){
            top = maxTop
        }
        el.style.left = binding.arg.left + 'px'
        el.style.top = binding.arg.top + 'px'
    },
    mounted(el, binding) {
        this.updatePosition(el, binding)
    },
    updated(el, binding, vnode, prevVnode) {
        this.updatePosition(el, binding)
    },
}