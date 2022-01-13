 const puppeteer = require('puppeteer');
 async function keyboard() {
     //创建一个Browser浏览器实例，并设置相关参数
     const browser = await puppeteer.launch({
         headless: false,
         defaultViewport: null,
         args: ['--start-maximized'],
         ignoreDefaultArgs: ['--enable-automation']
     });
     //创建一个Page实例
     const page = await browser.newPage();
     //打开百度首页
     await page.goto("https://www.baidu.com");
     await page.$('#kw');
     //键盘输入'Hello World!'
     await page.keyboard.type('Hello World!');
     await page.waitFor();
     //键盘按下鼠标左键
     await page.keyboard.press('ArrowLeft');
     //按住键盘shift
     await page.keyboard.down('Shift');
     for (let i = 0; i < ' World'.length; i++)
         await page.keyboard.press('ArrowLeft');
     await page.keyboard.up('Shift');
     //键盘按住回车键盘
     await page.keyboard.press('Backspace');
     //紧接着模拟键盘按下大写的"A",
     await page.keyboard.down('Shift');
     await page.keyboard.press('KeyA');
     await page.keyboard.up('Shift');
     //结果字符串最终为 'HelloA!'
     await page.waitFor();
     //截图并保存至keyboad.png
     await page.screenshot({
         path: 'keyboard.png'
     });
     await browser.close();
 }
 keyboard();
