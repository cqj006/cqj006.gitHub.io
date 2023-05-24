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
    'https://chatgptmirror.com/?ref=',
    'https://chatbot.theb.ai/?ref=',
    'https://www.promptboom.com/?ref=',
    'https://chat.gptplus.one/?ref=',
    'https://smart-chat.xiami.one/?ref=',
    'https://chat19.xeasy.me/?ref=',
    'https://xc.com/?ref=',
    'https://freegpt.one/?ref=',
    'https://chatgpt-cn.co/?ref='
]
var reg=/\/\/(.*?)\//;
var l = list.map((item) => {
    return {
        title: reg.exec(item)[1].trim(),
        icon: 'el-icon-s-tools',
        url: item,
    }
})
// console.log(l);
// console.log(123);