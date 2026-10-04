import puppeteer from 'puppeteer';

(async () => {
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  
  page.on('console', msg => console.log('PAGE LOG:', msg.text()));
  page.on('pageerror', error => console.log('PAGE ERROR:', error.message));
  page.on('response', response => {
    if (!response.ok()) {
      console.log('FAILED REQUEST:', response.url(), response.status());
    }
  });

  console.log('Navigating to GitHub Pages...');
  await page.goto('https://slockahuja.github.io/BrandSip/', { waitUntil: 'networkidle0' });
  
  console.log('Done.');
  await browser.close();
})();
