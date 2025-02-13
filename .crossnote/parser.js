// module.exports = {
//   onWillParseMarkdown: function (markdown) {
//     return new Promise((resolve, reject) => {
//       try {
//         markdown = transformBarsTou(markdown);
//         markdown = transformBarsWei(markdown);
//         markdown = transformWidth(markdown);
//         markdown = transform_bars(markdown);
//         resolve(markdown);
//       } catch (error) {
//         reject(error);
//       }
//     });
//   },

//   onDidParseMarkdown: function (html, { cheerio }) {
//     // 直接返回 HTML，无需 Promise
//     return html;
//   },

//   onWillTransformMarkdown: function (markdown) {
//     // 直接返回 Markdown，无需 Promise
//     return markdown;
//   },

//   onDidTransformMarkdown: function (markdown) {
//     // 直接返回 Markdown，无需 Promise
//     return markdown;
//   },
// };

// // 提取正则表达式为常量
// const REGEX_BARS_TOU = /\/\.([^\s<]+)\s*</g; // 匹配 /.box <
// const REGEX_BARS_WEI = /\/\->/g; // 匹配 /->
// const REGEX_WIDTH = /\/--([^\s]+)/g; // 匹配 /--text
// const REGEX_BARS = /\\(.*?)\s*\[(.*?)\]\s*{([^{}$]*(((\${1,2}[\w\W]+?\${1,2})|({[^{}]*?}))[^{}$]*)*)}/gm;

// // 转换函数

// function transformBarsTou(markdown) {
//   return markdown.replace(REGEX_BARS_TOU, '<div class="$1">\n');
// }

// function transformBarsWei(markdown) {
//   return markdown.replace(REGEX_BARS_WEI, '\n</div>\n');
// }

// function transformWidth(markdown) {
//   return markdown.replace(REGEX_WIDTH, '<span class="tabb">$1</span>');
// }

// function transform_bars(markdown ){
//   markdown = markdown.replace(REGEX_BARS, "<div class=\"$1\" name=\"$2\">\n$3\n</div>\n");
//   markdown = markdown.replace(REGEX_BARS, "<div class=\"$1\" name=\"$2\">\n$3\n</div>\n");//正则表达式无法匹配多级括号，因此通过多次替换来解决标签套标签时程序会出现的bug，替换次数应大于等于最大嵌套层数
//   return markdown;
// }


// module.exports = {
//   onWillParseMarkdown: function(markdown) {
//     return new Promise((resolve, reject)=> {
//       markdown = transform_bars_tou(markdown);
//       markdown = transform_bars_wei(markdown);
//       markdown = transform_width(markdown);
//       return resolve(markdown)
//     })
//   },
//   onDidParseMarkdown: function(html, {cheerio}) {
//     return new Promise((resolve, reject)=> {
//       return resolve(html)
//     })
//   },
//   onWillTransformMarkdown: function (markdown) {
//         return new Promise((resolve, reject) => {
//             return resolve(markdown);
//         });
//     },
//   onDidTransformMarkdown: function (markdown) {
//       return new Promise((resolve, reject) => {
//           return resolve(markdown);
//       });
//   }
// }

// transform_bars_tou = function(markdown ){
//   reg = /(?<!`)\/\.(.*?)\s*</gm;    // 写法：  /.box <

//   replacement = "<div class=\"$1\">\n";
//   markdown = markdown.replace(reg,replacement);
//   return markdown;
// };

// transform_bars_wei = function(markdown ){
//   reg = /(?<!`)\/\-\>/gm;  // 写法：    /->
//   replacement = "\n</div>\n";
//   markdown = markdown.replace(reg,replacement);
//   return markdown;
// };

// // 根据https://zhuanlan.zhihu.com/p/532888400?utm_id=0修改

// transform_width = function(markdown) {
//   reg = /(?<!`)\/--([^\s]+)/g; // 写法：/--
//   replacement = "<span class=\"tabb\">$1</span>";
//   markdown = markdown.replace(reg,replacement);
//   return markdown;
// }

// module.exports = {
//   onWillParseMarkdown: function(markdown) {
//     return new Promise((resolve, reject)=> {
//       markdown = transform_bars(markdown);
//       return resolve(markdown);
//     })
//   },
//   onDidParseMarkdown: function(html, {cheerio}) { //<div class="mume markdown-preview  "></div>的全部内容
//     return new Promise((resolve, reject)=> {
//       return resolve(html);
//     })
//   },
//   onWillTransformMarkdown: function (markdown) {
//         return new Promise((resolve, reject) => {
//             return resolve(markdown);
//         });
//     },
//   onDidTransformMarkdown: function (markdown) {
//       return new Promise((resolve, reject) => {
//           return resolve(markdown);
//       });
//   }
// }
// transform_bars = function(markdown ){
//   reg = /\\(.*?)\s*\[(.*?)\]\s*{([^{}$]*(((\${1,2}[\w\W]+?\${1,2})|({[^{}]*?}))[^{}$]*)*)}/gm;
//   replacement = "<div class=\"$1\" name=\"$2\">\n$3\n</div>\n";
//   markdown = markdown.replace(reg,replacement);
//   markdown = markdown.replace(reg,replacement);//正则表达式无法匹配多级括号，因此通过多次替换来解决标签套标签时程序会出现的bug，替换次数应大于等于最大嵌套层数
//   return markdown;
