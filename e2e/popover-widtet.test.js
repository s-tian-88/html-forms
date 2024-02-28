import puppeteer from 'puppeteer';

describe('poipover widget', () => {

  let browser;
  let page;

  beforeEach(async () => {
    
    browser = await puppeteer.launch({
      headless: 'new',
      slowMo: 100,
      devtools: true,

    });

    page = await browser.newPage();

  });

  test('popover-widget', async () => {

    await page.goto('http://localhost:9000');

    const buttonElement = await page.$('button');

    await buttonElement.click();

    await page.waitForSelector('.popover');

  });

  afterEach(async () => {
    await browser.close();
  });

});
