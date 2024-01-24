import puppeteer from 'puppeteer-extra';
import { executablePath } from 'puppeteer';
import stealthPlugin from 'puppeteer-extra-plugin-stealth';

puppeteer.use(stealthPlugin());

const browser = await puppeteer.launch({
    headless: true,
    executablePath: executablePath(),
});
const page = await browser.newPage();

await page.goto('https://www.instagram.com/oliverjessner/');
const response = await page.waitForResponse(async function (response) {
    const url = response.url();
    const success = response.status() === 200;

    if (success && url === 'https://www.instagram.com/api/v1/users/web_profile_info/?username=oliverjessner') {
        return true;
    }
});
const data = await response.json();
const {
    data: {
        user: {
            edge_followed_by: { count },
        },
    },
} = data;
console.log(count);
