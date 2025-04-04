const url = window.location.pathname.split('/');
const currentPage = url[url.length - 2] || 'index';
const buttons = document.getElementById('buttonContainer');
const aTags = buttons.getElementsByTagName('a');


for (let i = 0; i < aTags.length; i++) {
    const href = aTags[i].getAttribute('href').split('/')[1] || 'index';

    if (href === currentPage) {
        aTags[i].className += ' currentButton';
        break;
    }
}
