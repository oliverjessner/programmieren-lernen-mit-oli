import puppeteer from 'puppeteer';

const browser = await puppeteer.launch({
    headless: true,
    args: [`--window-size=1920,1080`],
    defaultViewport: {
        width: 1920,
        height: 1080,
    },
});
const page = await browser.newPage();
const infoLabel = '.about-info-box__info-label';
const infoValue = '.about-info-box__info-value';

await page.goto('https://duckduckgo.com/?q=derstandard&ia=web');

const content = await page.evaluate(
    (label, value) => {
        const labels = [...document.querySelectorAll(label)].map(i => i.innerText);
        const values = [...document.querySelectorAll(value)].map(i => i.innerText);

        return labels.map((l, i) => l + ' ' + values[i]);
    },
    infoLabel,
    infoValue,
);

console.log(content);
