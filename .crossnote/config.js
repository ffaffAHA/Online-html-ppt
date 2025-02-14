// ({
//   katexConfig: {
//   "macros": {}
// },
  
//   mathjaxConfig: {
//   "tex": {},
//   "options": {},
//   "loader": {}
// },
  
//   mermaidConfig: {
//   "startOnLoad": false
// },
// })
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
// 显示/隐藏侧边栏
document.querySelector('.sidebar-toggle').addEventListener('click', () => {
    document.querySelector('.md-sidebar').classList.toggle('md-sidebar-active');
  });
  
  // 点击遮罩关闭
  document.querySelector('.sidebar-mask').addEventListener('click', () => {
    document.querySelector('.md-sidebar').classList.remove('md-sidebar-active');
  });