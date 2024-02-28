import puppeteer from 'puppeteer';

describe('start page and show button', () => {

  let browser;
  let page;

  beforeEach (async () => {

    browser = await puppeteer.launch({
      headless: 'new',
      slowmo: 100,
      devtools: true,
    });

    page = await browser.newPage();

  });

  test ('start page', async () => {

    await page.goto('http://localhost:9000');
    await page.waitForSelector('body');

  });

  test ('show button', async () => {

    await page.goto('http://localhost:9000');
    await page.waitForSelector('.popover-button');

  });

  afterEach (async () => {
    await browser.close();
  });

});
