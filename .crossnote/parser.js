// module.exports = {
//     extendMarked(marked, renderer) {
//       // 自定义容器扩展
//       marked.setOptions({
//         extensions: [{
//           name: 'admonition',
//           level: 'block',
//           start(src) { return src.match(/^:::/m)?.index; }, // 匹配 ::: 开头
//           tokenizer(src) {
//             const rule = /^:::(\+?)\s*([\w-]+)(.*?)\n([\s\S]*?)^:::/gm;
//             const match = rule.exec(src);
//             if (match) {
//               return {
//                 type: 'admonition',
//                 raw: match[0],         // 原始内容
//                 collapsible: !!match[1], // 是否可折叠
//                 variant: match[2],     // 容器类型
//                 title: match[3].trim(),// 自定义标题
//                 content: match[4].trim() // 内容部分
//               };
//             }
//           },
//           renderer(token) {
//             // 预设图标映射
//             const icons = {
//               tip: '💡',
//               note: '📝',
//               info: 'ℹ️',
//               warning: '⚠️',
//               danger: '🔥',
//               success: '✅'
//             };
  
//             // 默认标题处理
//             const defaultTitles = {
//               tip: '小技巧',
//               note: '注意',
//               info: '信息',
//               warning: '警告',
//               danger: '危险',
//               success: '成功'
//             };
  
//             const title = token.title || defaultTitles[token.variant] || token.variant;
//             const icon = icons[token.variant] || '📌';
  
//             // 折叠功能实现
//             const collapseControl = token.collapsible ? 
//               `<div class="collapse-handle">${icon}</div>` : '';
  
//             return `
//   <div class="admonition ${token.variant} ${token.collapsible ? 'collapsible' : ''}">
//     ${collapseControl}
//     <div class="admonition-header">
//       ${icon} ${title}
//     </div>
//     <div class="admonition-content">
//       ${this.parse(token.content)}
//     </div>
//   </div>`;
//           }
//         }]
//       });
  
//       return renderer;
//     }
//   };