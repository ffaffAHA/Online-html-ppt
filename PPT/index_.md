---
id: test
class: main
title: test
auther: "jinshang lou "
date: 2025.02.12
output:
  pdf_document:
    path: /PDF/index.pdf
    toc: true
---  
  
  
  
  
  
  
  
  
  
  
  
  
# Markdown制作幻灯片
  
  
  
  
## 环境准备
  
>  `vscode + EMP + pandoc 3.5 + pandoc-crossref`
  
## 基本语法
  
# 这个标题拥有 1 个 id {#my_id}
  
```markdown
# 这个标题拥有 1 个 id {#my_id}
```
  
# 这个标题有 2 个 classes {.class1 .class2}
  
```markdown
# 这个标题有 2 个 classes {.class1 .class2}
```
  
## 代码实例
```
*这会是 斜体 的文字*
_这会是 斜体 的文字_
  
**这会是 粗体 的文字**
__这会是 粗体 的文字__
  
_你也 **组合** 这些符号_
  
~~这个文字将会被横线删除~~
```
  
## 结果输出
  
*这会是 斜体 的文字*
_这会是 斜体 的文字_
  
**这会是 粗体 的文字**
__这会是 粗体 的文字__
  
_你也 **组合** 这些符号_
  
~~这个文字将会被横线删除~~
  
  
  
上标：X<sub>2</sub>，下标：O<sup>2</sup>
  
**缩写(同HTML的abbr标签)**
  
> 即更长的单词或短语的缩写形式，前提是开启识别HTML标签时，已默认开启
  
  
  
## 引用 Blockquotes
  
> 引用文本 Blockquotes
  
引用的行内混合 Blockquotes
  
> 引用：如果想要插入空白换行`即<br />标签`，在插入处先键入两个以上的空格然后回车即可
  
  
  
## 锚点与链接 Links
  
[普通链接](http://baidu.com/ )
  
[普通链接带标题](http://baidu.com/ "普通链接带标题")
  
直接链接：<https: //github.com>
  
  
  
  
  
[mailto:test.test@gmail.com](mailto:test.test@gmail.com )
  
GFM a-tail link @pandao  邮箱地址自动链接 test.test@gmail.com  www@vip.qq.com
  
> @pandao
  
## 多语言代码高亮 Codes
  
## 行内代码 Inline code
  
执行命令：`npm install marked`
  
## 缩进风格
  
即缩进四个空格，也做为实现类似 `<pre>` 预格式化文本 ( Preformatted Text ) 的功能。
  
    <?php
        echo "Hello world!";
    ?>
  
预格式化文本：
  
    | First Header  | Second Header |
    | ------------- | ------------- |
    | Content Cell  | Content Cell  |
    | Content Cell  | Content Cell  |
  
  
## JS代码
  
```javascript
function test() {
    console.log("Hello world!");
}
(function(){
    var box = function() {
        return box.fn.init();
    };
    box.prototype = box.fn = {
        init : function(){
            console.log('box.init()');
            return this;
        },
        add : function(str) {
            alert("add", str);
            return this;
        },
        remove : function(str) {
            alert("remove", str);
            return this;
        }
    };
    box.fn.init.prototype = box.fn;
    window.box =box;
})();
var testBox = box();
testBox.add("jQuery").remove("jQuery");
```
  
  
## HTML 代码 HTML codes
  
```html
<!DOCTYPE html>
<html>
<head>
<mate charest="utf-8" />
<meta name="keywords" content="Editor.md, Markdown, Editor" />
<title>Hello world!</title>
<style type="text/css">
    body {
        font-size: 14px;
        color: #444;
        font-family: "Microsoft Yahei", Tahoma, "Hiragino Sans GB", Arial;
        background: #fff;
    }
  
    ul {
        list-style: none;
    }
  
    img {
        border: none;
        vertical-align: middle;
    }
</style>
    </head>
<body>
<h1 class="text-xxl">Hello world!</h1>
<p class="text-green">Plain text</p>
    </body>
</html>
```
  
## 图片 Images
  
Image:
  
![am](https://pandao.github.io/editor.md/examples/images/4.jpg )
  
> Follow your heart.
  
![am](https://pandao.github.io/editor.md/examples/images/8.jpg )
  
> 图为：厦门白城沙滩
  
  
图片加链接 (Image + Link)：
  
[![am](https://pandao.github.io/editor.md/examples/images/7.jpg )] "李健首张专辑《似水流年》封面"
  
> 图为：李健首张专辑《似水流年》封面
  
  
## 列表 Lists
  
#### 无序列表（减号）Unordered Lists (-)
  
- 列表一
- 列表二
- 列表三
  
#### 无序列表（星号）Unordered Lists (*)
  
* 列表一
* 列表二
* 列表三
  
  
#### 无序列表（加号和嵌套）Unordered Lists (+)
  
+ 列表一
+ 列表二
    + 列表二-1
    + 列表二-2
    + 列表二-3
+ 列表三
    * 列表一
    * 列表二
    * 列表三
  
  
#### 有序列表 Ordered Lists (-)
  
1. 第一行
2. 第二行
3. 第三行
  
  
## GFM task list
  
- [x] GFM task list 1
- [x] GFM task list 2
- [ ] GFM task list 3
    - [ ] GFM task list 3-1
    - [ ] GFM task list 3-2
    - [ ] GFM task list 3-3
- [ ] GFM task list 4
    - [ ] GFM task list 4-1
    - [ ] GFM task list 4-2
  
  
## 绘制三线表格 Tables
  
## MPE 幻灯片分割
  
```Markdown
<!-- //ppt -->
# Hi here
<!-- //ppt -->
let us go
<!-- //ppt -->
Thank you!
```
  
# Thank you!
  