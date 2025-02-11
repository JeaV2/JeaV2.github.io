const url = window.location.pathname.split('/');
const currentPage = url[url.length - 2] || 'index';
const buttons = document.getElementById('buttonContainer');
const aTags = buttons.getElementsByTagName('a');

console.log('url', url);
console.log('Current Page:', currentPage);
console.log('Anchor Tags:', aTags);

for (let i = 0; i < aTags.length; i++) {
    const href = aTags[i].getAttribute('href').split('/')[1] || 'index';
    console.log('Href:', href);

    if (href === currentPage) {
        aTags[i].id = 'currentButton';
        break;
    }
}
