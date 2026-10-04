import puppeteer from 'puppeteer';

(async () => {
  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    
    let consoleErrors = [];
    let failedRequests = [];

    page.on('console', msg => {
      if (msg.type() === 'error') {
        consoleErrors.push(msg.text());
      }
    });

    page.on('pageerror', err => {
      consoleErrors.push(err.toString());
    });

    page.on('requestfailed', request => {
      failedRequests.push(`${request.url()} - ${request.failure().errorText}`);
    });

    page.on('response', response => {
      if (!response.ok()) {
        failedRequests.push(`${response.url()} - ${response.status()}`);
      }
    });

    console.log("Navigating to local site...");
    await page.goto('http://localhost:4173/BrandSip/', { waitUntil: 'networkidle2' });

    console.log("Console Errors:", consoleErrors);
    console.log("Failed Requests:", failedRequests);

    const rootContent = await page.$eval('#root', el => el.innerHTML).catch(() => 'ROOT NOT FOUND');
    console.log("Root innerHTML length:", rootContent.length);
    if (rootContent.length < 50) {
      console.log("Root content preview:", rootContent);
    }
    
    const bodyText = await page.$eval('body', el => el.innerText).catch(() => 'BODY NOT FOUND');
    console.log("Body visible text length:", bodyText.length);

    await browser.close();
  } catch (e) {
    console.error('Test script error:', e);
  }
})();
