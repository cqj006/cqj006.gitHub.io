var list = [
    'https://chat.aidutu.cn/?ref=',
    'https://cool-js.com/ai/chat/index.html?ref=',
    'https://chatgpt.qdymys.cn//?ref=',
    'https://chat.wobcw.com/?ref=',
    'https://chat.jinshutuan.com/?ref=',
    'https://f1.xjai.cc/?ref=',
    'https://dev.yqcloud.top/?ref=',
    'https://1chat.cc/?ref=',
    'https://chat.lingdong5.com/?ref=',
    'https://ai.hxkj.vip/?ref=',
    'https://dev.yqcloud.top/?ref=',
    'https://1chat.cc/?ref=',
    'https://chat.lingdong5.com/?ref=',
    'https://ai.hxkj.vip/?ref=',
    'https://dev.yqcloud.top/?ref=',
    'https://1chat.cc/?ref=',
    'https://chat.lingdong5.com/?ref=',
    'https://ai.hxkj.vip/?ref=',
    'https://dev.yqcloud.top/?ref=',
    'https://1chat.cc/?ref=',
    'https://chat.lingdong5.com/?ref=',
    'https://ai.hxkj.vip/?ref=',
    'https://dev.yqcloud.top/?ref=',
    'https://1chat.cc/?ref=',
    'https://chat.lingdong5.com/?ref=',
    'https://ai.hxkj.vip/?ref=',
    'https://dev.yqcloud.top/?ref=',
    'https://1chat.cc/?ref=',
    'https://chat.lingdong5.com/?ref=',
    'https://ai.hxkj.vip/?ref='
]
var reg = /\/\/(.*?)\//;
var l = list.map((item, index) => {
    return {
        id: index,
        title: reg.exec(item)[1].trim(),
        icon: 'el-icon-s-tools',
        url: item,
    }
})
// console.log(l);
// console.log(123);