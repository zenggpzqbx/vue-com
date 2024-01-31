export default {
    mounted(el, binding) {
        let maxLeft = document.documentElement.offsetWidth - el.offsetWidth,
            maxTop = document.documentElement.offsetHeight -  el.offsetHeight,
            left = binding.value.left, top = binding.value.top;
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
        el.style.left = left + 'px'
        el.style.top = top + 'px'
    },
}