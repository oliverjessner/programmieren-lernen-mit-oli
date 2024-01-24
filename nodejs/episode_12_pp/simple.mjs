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
const linkCollector = new Set();
const mainPage = 'https://oliverjessner.github.io/';

async function getAllLinksFromPage() {
    return await page.evaluate(() => {
        return [...document.querySelectorAll('a')].map(anchor => {
            return anchor.getAttribute('href');
        });
    });
}

function addExternalLinks(links) {
    links.forEach(function (link) {
        if (link.startsWith('https:') || link.startsWith('http:')) {
            linkCollector.add(link);
        }
    });
}

await page.goto(mainPage);
const links = await getAllLinksFromPage();
const internalLinks = links.filter(l => !l.startsWith('https:') && !l.startsWith('http:'));

for (const link of internalLinks) {
    await page.goto(mainPage + link);
    const links = await getAllLinksFromPage();

    addExternalLinks(links);
}

addExternalLinks(links);

console.log(linkCollector);
