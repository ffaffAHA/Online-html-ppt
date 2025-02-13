---
error: "YAMLParseError: Map keys must be unique at line 7, column 1:


  \  toc: true\r

  class: \"style\"

  ^\n"
---  
  
  
  
  
  
  
  
  
  
  
<!--  slide  -->
  
# Markdown制作幻灯片
  
<!--  slide  -->
  
# 目录
  
  
- [Markdown制作幻灯片](#markdown制作幻灯片 )
- [目录](#目录 )
  - [环境准备](#环境准备 )
  - [基本语法](#基本语法 )
- [这个标题拥有 1 个 id](#my_id )
- [这个标题有 2 个 classes](#这个标题有-2-个-classes )
  - [代码实例](#代码实例 )
    - [结果输出](#结果输出 )
      - [none](#none )
  - [引用 Blockquotes](#引用-blockquotes )
  - [锚点与链接 Links](#锚点与链接-links )
  - [多语言代码高亮 Codes](#多语言代码高亮-codes )
    - [行内代码 Inline code](#行内代码-inline-code )
    - [缩进风格](#缩进风格 )
  - [JS代码](#js代码 )
  - [HTML 代码 HTML codes](#html-代码-html-codes )
  - [图片 Images](#图片-images )
  - [列表 Lists](#列表-lists )
    - [无序列表（减号）Unordered Lists (-)](#无序列表减号unordered-lists-- )
  - [无序列表（星号）Unordered Lists (*)](#无序列表星号unordered-lists- )
  - [无序列表（加号和嵌套）Unordered Lists (+)](#无序列表加号和嵌套unordered-lists- )
  - [有序列表 Ordered Lists (-)](#有序列表-ordered-lists-- )
  - [GFM task list](#gfm-task-list )
  - [绘制三线表格 Tables](#绘制三线表格-tables )
  - [特殊符号 HTML Entities Codes](#特殊符号-html-entities-codes )
  - [反斜杠 Escape](#反斜杠-escape )
  - [科学公式 TeX(KaTeX)](#科学公式-texkatex )
  - [绘制流程图 Flowchart](#绘制流程图-flowchart )
  - [绘制序列图 Sequence Diagram](#绘制序列图-sequence-diagram )
  - [列表](#列表 )
    - [无序列表](#无序列表 )
    - [有序列表](#有序列表 )
  - [环境准备](#环境准备-1 )
    - [Visual Studio Code 编辑器安装](#visual-studio-code-编辑器安装 )
    - [Markdown Preview Enhanced 扩展安装](#markdown-preview-enhanced-扩展安装 )
    - [Pandoc安装](#pandoc安装 )
  - [基本语法](#基本语法-1 )
  - [Markdown 基本语法](#markdown-基本语法 )
  - [Markdown 基本语法](#markdown-基本语法-1 )
    - [MPE 幻灯片分割](#mpe-幻灯片分割 )
- [Thank you!](#thank-you )
  
<!--  slide  -->
  
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
<!--  slide  -->
  
  
## 代码实例
```
*这会是 斜体 的文字*
_这会是 斜体 的文字_
  
**这会是 粗体 的文字**
__这会是 粗体 的文字__
  
_你也 **组合** 这些符号_
  
~~这个文字将会被横线删除~~
```
  
### 结果输出
  
*这会是 斜体 的文字*
_这会是 斜体 的文字_
  
**这会是 粗体 的文字**
__这会是 粗体 的文字__
  
_你也 **组合** 这些符号_
  
~~这个文字将会被横线删除~~
  
<!--  slide  -->
  
#### none
上标：X<sub>2</sub>，下标：O<sup>2</sup>
  
**缩写(同HTML的abbr标签)**
  
> 即更长的单词或短语的缩写形式，前提是开启识别HTML标签时，已默认开启
  
yes 
  
<!--  slide  -->
  
  
## 引用 Blockquotes
  
> 引用文本 Blockquotes
  
引用的行内混合 Blockquotes
  
> 引用：如果想要插入空白换行`即<br />标签`，在插入处先键入两个以上的空格然后回车即可
  
<!--  slide  -->
  
  
## 锚点与链接 Links
  
[普通链接](http://baidu.com/ )
  
[普通链接带标题](http://baidu.com/ "普通链接带标题")
  
直接链接：<https: //github.com>
  
  
  
  
  
  
  
GFM a-tail link @pandao  邮箱地址自动链接 test.test@gmail.com  www@vip.qq.com
  
> @pandao
<!--  slide  -->
  
## 多语言代码高亮 Codes
  
### 行内代码 Inline code
  
执行命令：`npm install marked`
  
### 缩进风格
  
即缩进四个空格，也做为实现类似 `<pre>` 预格式化文本 ( Preformatted Text ) 的功能。
<!--  slide  -->
  
预格式化文本：
  
    | First Header  | Second Header |
    | ------------- | ------------- |
    | Content Cell  | Content Cell  |
    | Content Cell  | Content Cell  |
  
<!--  slide  -->
  
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
<!--  slide  -->
  
  
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
<!--  slide  -->
  
## 图片 Images
  
Image:
  
![am](https://pandao.github.io/editor.md/examples/images/4.jpg )
  
> Follow your heart.
<!--  slide  -->
  
![am](https://pandao.github.io/editor.md/examples/images/8.jpg )
  
> 图为：厦门白城沙滩
<!--  slide  -->
  
  
图片加链接 (Image + Link)：
  
[![am](https://pandao.github.io/editor.md/examples/images/7.jpg )] "李健首张专辑《似水流年》封面"
  
> 图为：李健首张专辑《似水流年》封面
<!--  slide  -->
  
  
## 列表 Lists
  
### 无序列表（减号）Unordered Lists (-)
  
- 列表一
- 列表二
- 列表三
<!--  slide  -->
  
## 无序列表（星号）Unordered Lists (*)
  
* 列表一
* 列表二
* 列表三
  
<!--  slide  -->
  
## 无序列表（加号和嵌套）Unordered Lists (+)
  
+ 列表一
+ 列表二
    + 列表二-1
    + 列表二-2
    + 列表二-3
+ 列表三
    * 列表一
    * 列表二
    * 列表三
  
<!--  slide  -->
  
## 有序列表 Ordered Lists (-)
  
1. 第一行
2. 第二行
3. 第三行
  
<!--  slide  -->
  
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
  
<!--  slide  -->
  
## 绘制三线表格 Tables
  
| 项目        | 价格   |  数量  |
| --------   | -----:  | :----:  |
| 计算机      | <img src="https://latex.codecogs.com/gif.latex?1600%20%20%20|%20%20%205%20%20%20%20%20||%20手机%20%20%20%20%20%20%20%20|"/>12   |   12   |
| 管线        |    <img src="https://latex.codecogs.com/gif.latex?1%20%20%20%20|%20%20234%20%20|First%20Header%20%20|%20Second%20Header-------------%20|%20-------------Content%20Cell%20%20|%20Content%20CellContent%20Cell%20%20|%20Content%20Cell%20&lt;!--%20%20slide%20%20--&gt;|%20First%20Header%20%20|%20Second%20Header%20||%20-------------%20|%20-------------%20||%20Content%20Cell%20%20|%20Content%20Cell%20%20||%20Content%20Cell%20%20|%20Content%20Cell%20%20|&lt;!--%20%20slide%20%20--&gt;|%20Function%20name%20|%20Description%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20||%20-------------%20|%20------------------------------%20||%20`help()`%20%20%20%20%20%20|%20Display%20the%20help%20window.%20%20%20%20%20%20%20||%20`destroy()`%20%20%20|%20**Destroy%20your%20computer!**%20%20%20%20%20|&lt;!--%20%20slide%20%20--&gt;|%20Left-Aligned%20%20|%20Center%20Aligned%20%20|%20Right%20Aligned%20||%20:------------%20|:---------------:|%20-----:||%20col%203%20is%20%20%20%20%20%20|%20some%20wordy%20text%20|"/>1600 |
| col 2 is      | centered        |   <img src="https://latex.codecogs.com/gif.latex?12%20||%20zebra%20stripes%20|%20are%20neat%20%20%20%20%20%20%20%20|"/>1 |
<!--  slide  -->
  
| Item      | Value |
| --------- | -----:|
| Computer  | <img src="https://latex.codecogs.com/gif.latex?1600%20||%20Phone%20%20%20%20%20|"/>12 |
| Pipe      |    <img src="https://latex.codecogs.com/gif.latex?1%20|&lt;!--%20%20slide%20%20--&gt;##%20特殊符号%20HTML%20Entities%20Codes©%20&amp;%20%20¨%20™%20¡%20£&amp;%20&lt;%20&gt;%20¥%20€%20®%20±%20¶%20§%20¦%20¯%20«%20·%20X²%20Y³%20¾%20¼%20%20×%20%20÷%20%20%20»18ºC%20%20&quot;%20%20&#39;&lt;!--%20%20slide%20%20--&gt;##%20反斜杠%20Escape\*literal%20asterisks\*##%20科学公式%20TeX(KaTeX)&lt;p%20align=&quot;center&quot;&gt;&lt;img%20src=&quot;https://latex.codecogs.com/gif.latex?E=mc^2&quot;/&gt;&lt;/p&gt;%20%20行内的公式&lt;p%20align=&quot;center&quot;&gt;&lt;img%20src=&quot;https://latex.codecogs.com/gif.latex?E=mc^2&quot;/&gt;&lt;/p&gt;%20%20行内的公式，行内的&lt;p%20align=&quot;center&quot;&gt;&lt;img%20src=&quot;https://latex.codecogs.com/gif.latex?E=mc^2&quot;/&gt;&lt;/p&gt;%20%20公式。&lt;p%20align=&quot;center&quot;&gt;&lt;img%20src=&quot;https://latex.codecogs.com/gif.latex?x%20&amp;gt;%20y&quot;/&gt;&lt;/p&gt;%20%20&lt;!--%20%20slide%20%20--&gt;多行公式：```math\displaystyle\left(%20\sum\_{k=1}^n%20a\_k%20b\_k%20\right)^2\leq\left(%20\sum\_{k=1}^n%20a\_k^2%20\right)\left(%20\sum\_{k=1}^n%20b\_k^2%20\right)```&lt;!--%20%20slide%20%20--&gt;```katex\displaystyle%20%20%20%20%20\frac{1}{%20%20%20%20%20%20%20%20\Bigl(\sqrt{\phi%20\sqrt{5}}-\phi\Bigr)%20e^{%20%20%20%20%20%20%20%20\frac25%20\pi}}%20=%201+\frac{e^{-2\pi}}%20{1+\frac{e^{-4\pi}}%20{%20%20%20%20%20%20%20%201+\frac{e^{-6\pi}}%20%20%20%20%20%20%20%20{1+\frac{e^{-8\pi}}%20%20%20%20%20%20%20%20%20{1+\cdots}%20}%20%20%20%20%20%20%20%20}%20%20%20%20%20}```&lt;!--%20%20slide%20%20--&gt;```latexf(x)%20=%20\int_{-\infty}^\infty%20%20%20%20\hat%20f(\xi)\,e^{2%20\pi%20i%20\xi%20x}%20%20%20%20\,d\xi```&lt;!--%20%20slide%20%20--&gt;##%20绘制流程图%20Flowchart```flowst=&gt;start:%20用户登陆op=&gt;operation:%20登陆操作cond=&gt;condition:%20登陆成功%20Yes%20or%20No?e=&gt;end:%20进入后台st-&gt;op-&gt;condcond(yes)-&gt;econd(no)-&gt;op```&lt;!--%20%20slide%20%20--&gt;##%20绘制序列图%20Sequence%20Diagram```seqAndrew-&gt;China:%20Says%20Hello%20Note%20right%20of%20China:%20China%20thinks\nabout%20it%20China--&gt;Andrew:%20How%20are%20you?%20Andrew-&gt;&gt;China:%20I%20am%20good%20thanks!```&lt;!--%20%20slide%20%20--&gt;##%20列表###%20无序列表-%20Item%201-%20Item%202%20%20-%20Item%202a%20%20-%20Item%202b###%20有序列表1.%20Item%2012.%20Item%2023.%20Item%203%20%20%201.%20Item%203a%20%20%202.%20Item%203b&lt;!--%20%20slide%20%20--&gt;##%20环境准备###%20Visual%20Studio%20Code%20编辑器安装###%20Markdown%20Preview%20Enhanced%20扩展安装###%20Pandoc安装`scoop`&lt;!--%20%20slide%20%20--&gt;##%20基本语法```Markdown#%20一级标题##%20二级标题##%20三级标题###%20四级标题####%20五级标题#####%20六级标题正文```&lt;!--%20%20slide%20%20--&gt;##%20Markdown%20基本语法```Markdown&gt;%20这里是引用```&lt;!--%20%20slide%20%20--&gt;##%20Markdown%20基本语法```Markdown###%20表格|%20实验组%20|%20时间%20%20|%20%20%20数量%20||%20:-----%20|%20:---:%20|%20-----:%20||%20M1%20%20%20%20%20|%20%201h%20%20%20|%20120000%20||%20M2%20%20%20%20%20|%20%202h%20%20%20|%20140000%20||%20M3%20%20%20%20%20|%20%203h%20%20%20|%20160000%20|```&lt;!--%20%20slide%20%20--&gt;```Markdown###%20下面是分割线***###%20下面也是分割线---```&lt;!--%20%20slide%20%20--&gt;```Markdown###%20块内公式"/><img src="https://latex.codecogs.com/gif.latex?x=\frac{-b\pm\sqrt{b^2-4ac}}{2a}"/><img src="https://latex.codecogs.com/gif.latex?###%20行内公式"/>x=\frac{-b\pm\sqrt{b^2-4ac}}{2a}$
```
<!--  slide  -->
  
  
### MPE 幻灯片分割
  
```Markdown
<!-- slide -->
# Hi here
<!-- slide -->
let us go
<!-- slide -->
Thank you!
```
<!--  slide  -->
  
# Thank you!
  