/**
 * 自定义指令
 */
import drag from "./directives/drag.js";
import contextmenu_pos from "./directives/contextmenu_pos.js";
import resize from "./directives/resize.js";
import scroll from "./directives/scroll.js";

const directives = [
    {name: 'drag', directive: drag},
    {name: 'contextmenu_pos', directive: contextmenu_pos},
    {name: 'resize', directive: resize},
    {name: 'scroll', directive: scroll}
]

/**
 * 自定义组件
 */
import PopupDialog from "./components/PopupDialog/index.js";
import {defineComponent, h} from "vue";

const components = [PopupDialog]


function install(app, options) {
    directives.forEach(directive => app.directive(directive.name, directive.directive))
    components.forEach(component => {
        if (component.name === 'PopupDialog' && options.hasOwnProperty('dialog_style')) {
            app.component(component.name, defineComponent((props, ctx) => {
                return () => {
                    return h(component, {dialog_style: options.dialog_style})
                }
            }))
        } else {
            app.component(component.name, component)
        }
    })
}

export default {install}
export {install, PopupDialog}