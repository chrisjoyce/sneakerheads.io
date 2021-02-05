import { chromium, firefox } from 'playwright';

async function start() {
  console.log('starting')
  const browser = await firefox.launch({headless: false});
  const page = await browser.newPage();
  await page.goto('http://google.com');
  await browser.close();
}

start();