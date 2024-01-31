import {createApp} from 'vue'
import './style.css'
import App from './App.vue'
import drag from "./directives/drag.js";
import contextmenu_pos from "./directives/contextmenu_pos.js";
import resize from "./directives/resize.js";
// import PopupDialog from './components/PopupDialog/PopupDialog.vue'
const app = createApp(App)

// app.component('PopupDialog', PopupDialog)
app.directive('drag', drag)
app.directive('contextmenu_pos', contextmenu_pos)
app.directive('resize', resize)
app.mount('#app')
