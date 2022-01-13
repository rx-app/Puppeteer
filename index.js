//引入puppeteer
const puppeteer = require('puppeteer');
/*
4 创建一个Browser浏览器实例，并设置浏览器实例相关参数
5 headless: 是否在无头模式下运行浏览器，默认是true
6 defaultViewport：设置页面视口大小，默认800*600，如果为null的话就禁用视图口
7 args：浏览器实例的其他参数
8 defaultViewport: null, args: ['--start-maximized']：最大化视图窗口展示
9 ignoreDefaultArgs: ['--enable-automation']:
10 禁止展示chrome左上角有个Chrome正受自动软件控制，避免puppeteer被前端JS检测到
11 */
puppeteer.launch({
    headless: false,
    defaultViewport: null,
    args: ['--start-maximized'],
    ignoreDefaultArgs: ['--enable-automation']
}).then(async browser => {
    //创建一个Page实例
    const page = await browser.newPage();
    //打开百度首页
    await page.goto('https://www.baidu.com');
    //定位输入框元素
    const input_area = await page.$('#kw');
    //在输入框元素中输入"hello world"
    await input_area.type("hello world");
    //定位搜索按钮元素
    const search_btn = await page.$('#su');
    //点击按钮元素
    await search_btn.click();
    //等待3s
    await page.waitFor(3000);
    //截图并在根目录保存
    await page.screenshot({
        path: 'baidu.png'
    });
    //关闭Chromium
    await browser.close();
});
