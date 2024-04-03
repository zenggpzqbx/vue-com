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
    <script src="./dist/umd/index.umd.cjs"></script>
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
        cstyle:{
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
当有多个对话框弹窗的时候，保证最新弹出的在最上层，激活对话框（在对话框上按下鼠标），对话框显示在最顶层
增加关闭按钮
属性：title:对话框标题
属性： left, top 弹窗的默认位置，header: 抬头的样式, content: 内容样式
```

### 指令
#### contextmenu_pos
```textmate
已删除。
接受一个对象参数：{left, top}， 确定弹出框的位置，同时限制它不超出屏幕，这个指令还有问题没有修改完成，慎用。
```
#### drag
```textmate
在屏幕范围内拖动一个元素
```
#### resize
```textmate
可以接受函数,当尺寸变化的时候需要执行的代码
```
#### scroll
```textmate
当一个元素有水平和垂直滚动条的时候，通过滚动条操作有些费事，可以点击内容区域拖动元素，代替操作滚动条。
```
