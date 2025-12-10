const getLang = () => {
    let url = window.location.href;
    let lang = 'en';
    switch (true) {
        case url.includes('/nl/'):
            lang = 'nl';
            break;
        case url.includes('/en/'):
            lang = 'en';
            break;
        default:
            lang = 'en';
            break;
    }
    console.log(`Current URL: ${url}, language set to: ${lang}`);
    return lang;
};

export { getLang };