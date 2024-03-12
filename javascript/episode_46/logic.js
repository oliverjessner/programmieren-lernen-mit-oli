const sanitizedButton = document.querySelector('#sanitized');
const unsanitizedButton = document.querySelector('#unsanitized');
const writeButton = document.querySelector('#write');
const textarea = document.querySelector('textarea');
const img = document.querySelector('img');

async function getContentFromClipboardContent(clipboardContent) {
    for (const item of clipboardContent) {
        if (item.types.includes('image/png')) {
            const blob = await item.getType('image/png');
            img.src = URL.createObjectURL(blob);
            return;
        }
        if (item.types.includes('text/html')) {
            const blob = await item.getType('text/html');
            const blobText = await blob.text();

            textarea.value = blobText;
        }
    }

    return '';
}

sanitizedButton.addEventListener('click', async function () {
    const clipboardContent = await navigator.clipboard.read();
    await getContentFromClipboardContent(clipboardContent);
});

unsanitizedButton.addEventListener('click', async function () {
    const clipboardContent = await navigator.clipboard.read({
        unsanitized: ['text/html'],
    });
    await getContentFromClipboardContent(clipboardContent);
});

writeButton.addEventListener('click', async function () {
    const html = '<div>Some HTML content</div>';

    await navigator.clipboard.write([
        new ClipboardItem({
            'text/html': new Blob([html], { type: 'text/html' }),
        }),
    ]);
});
