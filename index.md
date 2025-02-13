---
id: "test"
class: "main"
title : "test"
auther : "jinshang lou "
date: 2025.02.12
output:
  pdf_document:
    path: /PDF/index.pdf
    toc: true
    # toc_depth: 2
# presentation:
#   mouseWheel: true
#   fontsize: auto
#   width: 960
#   height: 700
#   margin: 0.1
#   minScale: 0.2
#   maxScale: 1.5
---
<!-- //ppt -->
# Markdown制作幻灯片

<!-- //ppt -->

<!-- //ppt -->
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
<!-- //ppt -->

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

<!-- //ppt -->

上标：X<sub>2</sub>，下标：O<sup>2</sup>

**缩写(同HTML的abbr标签)**

> 即更长的单词或短语的缩写形式，前提是开启识别HTML标签时，已默认开启

<!-- //ppt -->

### 引用 Blockquotes

> 引用文本 Blockquotes

引用的行内混合 Blockquotes

> 引用：如果想要插入空白换行`即<br />标签`，在插入处先键入两个以上的空格然后回车即可

<!-- //ppt -->

### 锚点与链接 Links

[普通链接](http://baidu.com/)

[普通链接带标题](http://baidu.com/ "普通链接带标题")

直接链接：<https: //github.com>

<!-- [锚点链接][anchor-id] -->

<!-- [anchor-id]: http://www.this-anchor-link.com/ -->

[mailto:test.test@gmail.com](mailto:test.test@gmail.com)

GFM a-tail link @pandao  邮箱地址自动链接 test.test@gmail.com  www@vip.qq.com

> @pandao
<!-- //ppt -->
### 多语言代码高亮 Codes

#### 行内代码 Inline code

执行命令：`npm install marked`

#### 缩进风格

即缩进四个空格，也做为实现类似 `<pre>` 预格式化文本 ( Preformatted Text ) 的功能。

    <?php
        echo "Hello world!";
    ?>
<!-- //ppt -->
预格式化文本：

    | First Header  | Second Header |
    | ------------- | ------------- |
    | Content Cell  | Content Cell  |
    | Content Cell  | Content Cell  |

<!-- //ppt -->
#### JS代码

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
<!-- //ppt -->

#### HTML 代码 HTML codes

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
<!-- //ppt -->
### 图片 Images

Image:

![am](https://pandao.github.io/editor.md/examples/images/4.jpg)

> Follow your heart.
<!-- //ppt -->
![am](https://pandao.github.io/editor.md/examples/images/8.jpg)

> 图为：厦门白城沙滩
<!-- //ppt -->

图片加链接 (Image + Link)：

[![am](https://pandao.github.io/editor.md/examples/images/7.jpg)] "李健首张专辑《似水流年》封面"

> 图为：李健首张专辑《似水流年》封面
<!-- //ppt -->

### 列表 Lists

#### 无序列表（减号）Unordered Lists (-)

- 列表一
- 列表二
- 列表三
<!-- //ppt -->
#### 无序列表（星号）Unordered Lists (*)

* 列表一
* 列表二
* 列表三

<!-- //ppt -->
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

<!-- //ppt -->
#### 有序列表 Ordered Lists (-)

1. 第一行
2. 第二行
3. 第三行

<!-- //ppt -->
#### GFM task list

- [x] GFM task list 1
- [x] GFM task list 2
- [ ] GFM task list 3
    - [ ] GFM task list 3-1
    - [ ] GFM task list 3-2
    - [ ] GFM task list 3-3
- [ ] GFM task list 4
    - [ ] GFM task list 4-1
    - [ ] GFM task list 4-2

<!-- //ppt -->
### 绘制三线表格 Tables

| 项目        | 价格   |  数量  |
| --------   | -----:  | :----:  |
| 计算机      | $1600   |   5     |
| 手机        |   $12   |   12   |
| 管线        |    $1    |  234  |

First Header  | Second Header
------------- | -------------
Content Cell  | Content Cell
Content Cell  | Content Cell 

<!-- //ppt -->
| First Header  | Second Header |
| ------------- | ------------- |
| Content Cell  | Content Cell  |
| Content Cell  | Content Cell  |
<!-- //ppt -->
| Function name | Description                    |
| ------------- | ------------------------------ |
| `help()`      | Display the help window.       |
| `destroy()`   | **Destroy your computer!**     |

<!-- //ppt -->
| Left-Aligned  | Center Aligned  | Right Aligned |
| :------------ |:---------------:| -----:|
| col 3 is      | some wordy text | $1600 |
| col 2 is      | centered        |   $12 |
| zebra stripes | are neat        |    $1 |
<!-- //ppt -->
| Item      | Value |
| --------- | -----:|
| Computer  | $1600 |
| Phone     |   $12 |
| Pipe      |    $1 |
<!-- //ppt -->


#### 特殊符号 HTML Entities Codes

© &  ¨ ™ ¡ £
& < > ¥ € ® ± ¶ § ¦ ¯ « · 

X² Y³ ¾ ¼  ×  ÷   »

18ºC  "  '


<!-- //ppt -->
#### 反斜杠 Escape

\*literal asterisks\*

### 科学公式 TeX(KaTeX)

$$E=mc^2$$

行内的公式$$E=mc^2$$行内的公式，行内的$$E=mc^2$$公式。

$$x > y$$

<!-- $$\(\sqrt{3x-1}+(1+x)^2\)$$ -->

<!-- $$sin(\alpha)^{\theta}=\sum_{i=0}^{n}(x^i + \cos(f))$$ -->
<!-- //ppt -->
多行公式：

```math
\displaystyle
\left( \sum\_{k=1}^n a\_k b\_k \right)^2
\leq
\left( \sum\_{k=1}^n a\_k^2 \right)
\left( \sum\_{k=1}^n b\_k^2 \right)
```
<!-- //ppt -->
```katex
\displaystyle 
    \frac{1}{
        \Bigl(\sqrt{\phi \sqrt{5}}-\phi\Bigr) e^{
        \frac25 \pi}} = 1+\frac{e^{-2\pi}} {1+\frac{e^{-4\pi}} {
        1+\frac{e^{-6\pi}}
        {1+\frac{e^{-8\pi}}
         {1+\cdots} }
        } 
    }
```
<!-- //ppt -->
```latex
f(x) = \int_{-\infty}^\infty
    \hat f(\xi)\,e^{2 \pi i \xi x}
    \,d\xi
```
<!-- //ppt -->
### 绘制流程图 Flowchart

```flow
st=>start: 用户登陆
op=>operation: 登陆操作
cond=>condition: 登陆成功 Yes or No?
e=>end: 进入后台

st->op->cond
cond(yes)->e
cond(no)->op
```
<!-- //ppt -->
### 绘制序列图 Sequence Diagram

```seq
Andrew->China: Says Hello 
Note right of China: China thinks\nabout it 
China-->Andrew: How are you? 
Andrew->>China: I am good thanks!
```
<!-- //ppt -->

<!-- //ppt -->
### 列表
#### 无序列表
- Item 1
- Item 2
  - Item 2a
  - Item 2b
#### 有序列表
1. Item 1
2. Item 2
3. Item 3
   1. Item 3a
   2. Item 3b
<!-- //ppt -->
### 环境准备

#### Visual Studio Code 编辑器安装

#### Markdown Preview Enhanced 扩展安装

#### Pandoc安装
`scoop`
<!-- //ppt -->
### 基本语法

```Markdown
# 一级标题
## 二级标题
### 三级标题
#### 四级标题
##### 五级标题
###### 六级标题
正文
```
<!-- //ppt -->

#### Markdown 基本语法

```Markdown
> 这里是引用
```
<!-- //ppt -->

#### Markdown 基本语法

```Markdown
#### 表格
| 实验组 | 时间  |   数量 |
| :----- | :---: | -----: |
| M1     |  1h   | 120000 |
| M2     |  2h   | 140000 |
| M3     |  3h   | 160000 |
```
<!-- //ppt -->

```Markdown
#### 下面是分割线
***
#### 下面也是分割线
---
```
<!-- //ppt -->
```Markdown

#### 块内公式

$$x=\frac{-b\pm\sqrt{b^2-4ac}}{2a}$$

#### 行内公式

$x=\frac{-b\pm\sqrt{b^2-4ac}}{2a}$
```
<!-- //ppt -->

#### MPE 幻灯片分割

```Markdown
<!-- //ppt -->
# Hi here
<!-- //ppt -->
let us go
<!-- //ppt -->
Thank you!
```
<!-- //ppt -->
# Thank you!