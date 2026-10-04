(async () => {
  const htmlRes = await fetch('https://slockahuja.github.io/BrandSip/');
  const html = await htmlRes.text();
  console.log(html);
})();
