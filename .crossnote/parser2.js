module.exports = {
  onWillParseMarkdown: function(markdown) {
    return new Promise((resolve, reject)=> {
      markdown = transform_bars_tou(markdown);
      markdown = transform_bars_wei(markdown);
      markdown = transform_width(markdown);
      return resolve(markdown)
    })
  },
  onDidParseMarkdown: function(html, {cheerio}) {
    return new Promise((resolve, reject)=> {
      return resolve(html)
    })
  },
  onWillTransformMarkdown: function (markdown) {
        return new Promise((resolve, reject) => {
            return resolve(markdown);
        });
    },
  onDidTransformMarkdown: function (markdown) {
      return new Promise((resolve, reject) => {
          return resolve(markdown);
      });
  }
}

transform_bars_tou = function(markdown ){
  reg = /(?<!`)\/\.(.*?)\s*</gm;    // 写法：  /.box <

  replacement = "<div class=\"$1\">\n";
  markdown = markdown.replace(reg,replacement);
  return markdown;
};

transform_bars_wei = function(markdown ){
  reg = /(?<!`)\/\-\>/gm;  // 写法：    /->
  replacement = "\n</div>\n";
  markdown = markdown.replace(reg,replacement);
  return markdown;
};

根据https://zhuanlan.zhihu.com/p/532888400?utm_id=0修改

transform_width = function(markdown) {
  reg = /(?<!`)\/--([^\s]+)/g; // 写法：/--
  replacement = "<span class=\"tabb\">$1</span>";
  markdown = markdown.replace(reg,replacement);
  return markdown;
}

module.exports = {
  onWillParseMarkdown: function(markdown) {
    return new Promise((resolve, reject)=> {
      markdown = transform_bars(markdown);
      return resolve(markdown);
    })
  },
  onDidParseMarkdown: function(html, {cheerio}) { //<div class="mume markdown-preview  "></div>的全部内容
    return new Promise((resolve, reject)=> {
      return resolve(html);
    })
  },
  onWillTransformMarkdown: function (markdown) {
        return new Promise((resolve, reject) => {
            return resolve(markdown);
        });
    },
  onDidTransformMarkdown: function (markdown) {
      return new Promise((resolve, reject) => {
          return resolve(markdown);
      });
  }
}
transform_bars = function(markdown ){
  reg = /\\(.*?)\s*\[(.*?)\]\s*{([^{}$]*(((\${1,2}[\w\W]+?\${1,2})|({[^{}]*?}))[^{}$]*)*)}/gm;
  replacement = "<div class=\"$1\" name=\"$2\">\n$3\n</div>\n";
  markdown = markdown.replace(reg,replacement);
  markdown = markdown.replace(reg,replacement);//正则表达式无法匹配多级括号，因此通过多次替换来解决标签套标签时程序会出现的bug，替换次数应大于等于最大嵌套层数
  return markdown;




提取正则表达式为常量
const REGEX_BARS_TOU = /(?<!`)\/\.(.*?)\s*</gm; // 写法：  /.box <
const REGEX_BARS_WEI = /(?<!`)\/\-\>/gm; // 写法：    /->
const REGEX_WIDTH = /(?<!`)\/--([^\s]+)/g; // 写法：/--
const REGEX_BARS = /\\(.*?)\s*\[(.*?)\]\s*{([^{}$]*(((\${1,2}[\w\W]+?\${1,2})|({[^{}]*?}))[^{}$]*)*)}/gm;

// 转换函数
function transformBarsTou(markdown) {
    const replacement = "<div class=\"$1\">\n";
    return markdown.replace(REGEX_BARS_TOU, replacement);
}

function transformBarsWei(markdown) {
    const replacement = "\n</div>\n";
    return markdown.replace(REGEX_BARS_WEI, replacement);
}

function transformWidth(markdown) {
    const replacement = "<span class=\"tabb\">$1</span>";
    return markdown.replace(REGEX_WIDTH, replacement);
}

function transformBars(markdown) {
    const replacement = "<div class=\"$1\" name=\"$2\">\n$3\n</div>\n";
    // 正则表达式无法匹配多级括号，因此通过多次替换来解决标签套标签时程序会出现的bug
    // 替换次数应大于等于最大嵌套层数
    markdown = markdown.replace(REGEX_BARS, replacement);
    markdown = markdown.replace(REGEX_BARS, replacement);
    return markdown;
}

// 模拟 crossnote markdown transformer
function crossnoteMarkdownTransformer(markdown) {
    // 这里可以添加 crossnote 具体的转换逻辑
    // 目前简单返回传入的 markdown
    return markdown;
}

// 模拟 markdown-it 或 pandoc renderer
function markdownRenderer(markdown) {
    // 这里可以使用 markdown-it 或 pandoc 进行实际渲染
    // 目前简单将 markdown 替换为 <p> 标签模拟转换为 HTML
    return `<p>${markdown}</p>`;
}

module.exports = {
    onWillParseMarkdown: function (markdown) {
        return new Promise((resolve, reject) => {
            try {
                markdown = transformBarsTou(markdown);
                markdown = transformBarsWei(markdown);
                markdown = transformWidth(markdown);
                markdown = transformBars(markdown);
                resolve(markdown);
            } catch (error) {
                reject(error);
            }
        });
    },
    onDidParseMarkdown: function (html, { cheerio }) {
        // 可以在这里对渲染后的 HTML 进行进一步处理
        return html;
    },
    parseMarkdown: async function (markdown) {
        try {
            // 调用 onWillParseMarkdown 钩子
            const preprocessedMarkdown = await this.onWillParseMarkdown(markdown);
            // 调用 crossnote markdown transformer
            const transformedMarkdown = crossnoteMarkdownTransformer(preprocessedMarkdown);
            // 调用 markdown-it 或 pandoc renderer
            const html = markdownRenderer(transformedMarkdown);
            // 调用 onDidParseMarkdown 钩子
            const finalHtml = await this.onDidParseMarkdown(html, { cheerio: null });
            return finalHtml;
        } catch (error) {
            console.error('Markdown parsing error:', error);
            throw error;
        }
    }
};


// 定义 transform_bars 函数
function transform_bars(markdown) {
    // 正则表达式，用于匹配特定格式的文本
    const reg = /\\(.*?)\s*\[(.*?)\]\s*{([^{}$]*(((\${1,2}[\w\W]+?\${1,2})|({[^{}]*?}))[^{}$]*)*)}/gm;
    const replacement = "<div class=\"$1\" name=\"$2\">\n$3\n</div>\n";
    // 多次替换以处理嵌套结构
    let newMarkdown = markdown;
    const maxReplaceCount = 10; // 最大替换次数，可根据实际情况调整
    for (let i = 0; i < maxReplaceCount; i++) {
        const tempMarkdown = newMarkdown.replace(reg, replacement);
        if (tempMarkdown === newMarkdown) {
            break;
        }
        newMarkdown = tempMarkdown;
    }
    return newMarkdown;
}

// 模块导出
module.exports = {
    onWillParseMarkdown: function (markdown) {
        return new Promise((resolve, reject) => {
            try {
                // 调用 transform_bars 函数进行转换
                markdown = transform_bars(markdown);
                resolve(markdown);
            } catch (error) {
                // 处理可能出现的错误
                reject(error);
            }
        });
    },
    onDidParseMarkdown: function (html, { cheerio }) {
        return new Promise((resolve, reject) => {
            try {
                // 这里可以添加更多对解析后的 HTML 进行处理的逻辑
                // 目前直接返回解析后的 HTML
                resolve(html);
            } catch (error) {
                // 处理可能出现的错误
                reject(error);
            }
        });
    }
};