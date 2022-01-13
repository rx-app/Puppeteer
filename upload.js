 const puppeteer = require('puppeteer');
 //puppeteer文件上传操作，适用原声控件：<input type=file/>
 async function upload() {
     //创建一个Browser浏览器实例，并设置相关参数
     const browser = await puppeteer.launch({
         headless: false,
         defaultViewport: null,
         args: ['--start-maximized'],
         ignoreDefaultArgs: ['--enable-automation']
     });
     //创建一个Page实例
     const page = await browser.newPage();
     //跳转百度首页
     await page.goto("https://www.baidu.com");
     //等待元素加载成功
     const soutuBtn = await page.waitForSelector('span.soutu-btn');
     //点击上传图片按钮
     await soutuBtn.click();
     //uploadFile上传图片
     const uploadPic = await page.waitForSelector('input.upload-pic');
     //上传图片目录自定义
     await uploadPic.uploadFile('D:\\MyConfiguration\\ww\\Desktop\\Test\\uploadPic.jpg');
     await page.waitFor();
     //关闭浏览器
     await browser.close();
 }
 upload();