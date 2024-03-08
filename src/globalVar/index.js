function useZIndex(zIndex = 3000){
    function currentZIndex(){
        return zIndex
    }
    function nextZIndex(){
        return ++zIndex
    }

    return {currentZIndex, nextZIndex}
}

export let PopupManager = useZIndex()