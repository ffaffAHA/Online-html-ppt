---
html:
  toc: true
class: "main"
title : "test"
auther : "jinshang lou "
id: "test"
class: "style"
date: 2025.02.12
export_on_save:
  pandoc: true
output:
  pdf_document:
    path: /PDF/test.pdf
    toc: true
    toc_depth: 2
    latex_engine: xelatex
fignos-cleveref: On
fignos-plus-name: 图
presentation:
  # The "normal" size of the presentation, aspect ratio will be preserved
  # when the presentation is scaled to fit different resolutions. Can be
  # specified using percentage units.
  width: 960
  height: 700
  # Factor of the display size that should remain empty around the content
  margin: 0.1
  # Bounds for smallest/largest possible scale to apply to content
  minScale: 0.2
  maxScale: 1.5
---
<!-- slide -->
% 安装
% Kiwi
% Feb 2025

# 速览

1. vscode 安装mark all in one、[Markdown Preview Enhanced](https://shd101wyy.github.io/markdown-preview-enhanced/#/zh-cn/) 插件

2. css方式二， `preview_theme` 和 `prism_theme` 中的`pepper`相关文件放到对应的本地文件夹中，在`setting.json` 调用


3. tocNumberHidden.less[按需调用](#45-标题序号)

<!-- slide -->

## css

#### setting.json 配置参考

```javascript
{
    "markdown-preview-enhanced.previewTheme": "pepper.css", //使用自己的css pepper.css
    "markdown-preview-enhanced.codeBlockTheme": "pepperLight.css",
    "markdown-preview-enhanced.printBackground": true, //使用自己的css打印html/pdf
    "[markdown]": {
        "editor.defaultFormatter": "DavidAnson.vscode-markdownlint"
    },
    "markdown.extension.toc.levels": "2..4",
    "markdown-preview-enhanced.enableExtendedTableSyntax": true,
    "markdown-preview-enhanced.enableScriptExecution": true,
    "markdownlint.config": {
        "MD029": false,
        "MD033": false,
    }
}
```
<!-- slide -->


# js
[自定义调用class](#4-功能)方法，根据[《爱吃的小白-MPE的使用》](https://zhuanlan.zhihu.com/p/532888400?utm_id=0)修改，文件夹`my-mume`的js文件替换到本地.mume文件夹

<!-- slide -->

## 标题使用规范

| 标题位置           | 写法         | 效果                                                                                                             |
| ------------------ | ------------ | ---------------------------------------------------------------------------------------------------------------- |
| 文章标题           | `# 文章标题` | 文章标题                                                                                                         |
| 第一章             | `# 第一章`   | 1　第一章                                                                                                        |
| 第一节             | `## 第一节`  | 1.1　第一节                                                                                                      |
| 第一段             | `### 第一段` | （1）　第一段                                                                                                    |
| 需要在目录显示的   | `#### xxx`   | . |
| 不需要在目录显示的 | `***效果***` | . |

<!-- slide -->

# 功能

调用样式规则
开始：`/.cssname <`
结束：`/->`

5.22更新：`/>` 👉 `/->`，因有部分单标签结束为`/>`，为避免重复作此修改

## 右下角的提示 `/.fix`

移入显示，移出仅剩一行
***效果***

<!-- slide -->

## 左右分栏 `/.wrap2`

部分内容想做左右对比参考效果，如：html和js写完占据大量的高度、两边代码对比等
***用法***

55开
`/.wrap2 <`
 `/.box <` `/->`
 `/.box <` `/->`
`/->`

37开`/.wrap2 <` 
`/.box lit3 <` `/->`
 `/.box lit7 <` `/->`
`/->`

46开 同理 lit4  lit6
<!-- slide -->
***ps***

1. 其他的可以自己去补充
2. ==出现异常！== 当左右分栏的多行代码块内**出现↓** 或 **目录消失**时，代码块加一格tab即可
`<p data-line="60" class="sync-line" style="margin:0;"></p>`
3. 并没有很严格的30% 70% 40% 60%，大概
<!-- slide -->
## 4.3. 图片大小 `#img_7`

`=100x100` 在vscode无法使用，装了几个插件都不行

使用：


<!-- slide -->
## 4.4. 文字间隔 `/--`

实现效果


左侧文字有固定的宽度100px

使用方法 `/--split 将字符串转化为数组`

注意在 split 后面加空格以作区分
<!-- slide -->
这是第一部分。

::: fragment
这是延迟显示的第二部分。
:::

% 幻灯片标题
% Kiwi
% Feb 2025
这是幻灯片正文。
::: notes
这是给演讲者看的备注内容，观众看不到。
:::

## The End

Thanks for your time!