(async () => {
  const htmlRes = await fetch('https://slockahuja.github.io/BrandSip/');
  const html = await htmlRes.text();
  console.log('HTML fetched, length:', html.length);
  
  // parse the script src
  const match = html.match(/<script.*?src=["'](.*?)["'].*?>/);
  if (match && match[1]) {
    const jsPath = match[1];
    const jsUrl = new URL(jsPath, 'https://slockahuja.github.io/BrandSip/').href;
    console.log('JS URL:', jsUrl);
    const jsRes = await fetch(jsUrl);
    console.log('JS status:', jsRes.status);
    if (jsRes.status === 200) {
      console.log('JS loaded successfully');
    } else {
      console.log('JS failed to load');
    }
  } else {
    console.log('No script tag found');
  }
})();
