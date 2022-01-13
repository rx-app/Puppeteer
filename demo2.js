 const puppeteer = require('puppeteer');
 //puppeteer，获取元素、获取单个元素属性、获取多个元素属性
 async function jd() {
     //创建一个Browser浏览器实例，并设置相关参数
     const browser = await puppeteer.launch({
         headless: false,
         defaultViewport: null,
         args: ['--start-maximized'],
         ignoreDefaultArgs: ['--enable-automation']
     });
     //创建一个Page实例
     const page = await browser.newPage();
     //跳转JD首页
     await page.goto("https://www.jd.com");
     //获取输入框元素并在输入框内输入‘手机’
     const input = await page.$('#key');
     await input.type('手机');
     //模拟键盘“回车”键
     await page.keyboard.press('Enter');
     //等待元素加载成功
     await page.waitForSelector('#J_goodsList > ul > li:nth-child()');
     //获取元素innerText属性
     const firstText = await page.$eval('#J_goodsList > ul > li:nth-child()', el => el.innerText);
     console.log('firstText', firstText);
     //获取一组元素的innerText属性
     //await page.waitForSelector('ul.gl-warp>li');
     //const list = await page.$$eval('ul.gl-warp>li', eles => eles.map(ele => ele.innerText));
     //console.log('list', list);
 }
 jd();