const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  // Set viewport for a nice desktop view
  await page.setViewport({ width: 1440, height: 900 });
  
  console.log("Navigating to production site...");
  await page.goto('https://slockahuja.github.io/BrandSip/', { waitUntil: 'networkidle2' });
  
  console.log("Taking full page screenshot...");
  await page.screenshot({ path: 'final_brandsip_screenshot.png', fullPage: true });
  
  const content = await page.content();
  console.log("Root element length:", content.length);
  
  await browser.close();
  console.log("Screenshot saved as final_brandsip_screenshot.png");
})();
