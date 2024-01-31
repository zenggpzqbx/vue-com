import PopupDialog from "./PopupDialog.vue";
PopupDialog.install = function (app,options) {
    app.component(PopupDialog.name, PopupDialog)
}
export default PopupDialog