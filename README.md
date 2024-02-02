# 教程

这是一个适用于vue和vite的一个项目。其中的组件及指令基于项目功能点抽象而来。
## 引入方式
### 导入方式
```ecmascript 6
import VueCom from '@zqbx/vue-com'
import '@zqbx/vue-com/style.css'
app.use(VueCom)
```
### UMD方式
```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cursor Change on Boundary Approach</title>
    <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
    <script src="./dist/umd/zgp-ui.umd.cjs"></script>
    <link rel="stylesheet" href="./dist//umd/style.css">
    <style>
        #app {
            width: 800px;
            height: 800px;
        }
    </style>
</head>

<body>
<div id="app"></div>
<script>
    const { createApp, ref } = Vue

    const app = createApp({
        setup() {
            const message = ref('Hello vue!')
            return {
                message
            }
        },
        template: ``
    })
    app.use(VueCom,{
        title:'弹出框',
        dialog_style:{
            parent:'width:600px',
            header:'background-color: #bbb;',
            content:'background-color: #f0f0f0;margin:8px;'
        }})
    app.mount('#app')
</script>
</body>

</html>
```
## 组件

### 对话框PopupDialog
```textmate
引入方式：<PopupDialog></PopupDialog>
属性：title:对话框标题
属性： dialog_style:接受一个对象，{parent:'', header:'', content:''}
```

### 指令
#### contextmenu_pos
```textmate
接受一个对象参数：{left, top}， 确定弹出框的位置，同时限制它不超出屏幕
```
#### drag
```textmate
可以接受一个对象参数：{left, top}， 也可以不指定参数。在屏幕范围内拖动一个元素
```
#### resize
```textmate
可以接受函数,当尺寸变化的时候需要执行的代码
```
#### scroll
```textmate
当一个元素有水平和垂直滚动条的时候，通过滚动条操作有些费事，可以点击内容区域拖动元素，代替操作滚动条。
```
