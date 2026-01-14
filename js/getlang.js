const getLang = () => {
    let url = window.location.href;
    let lang;
    let fallback = false;
    switch (true) {
        case url.includes('/nl/'):
            lang = 'nl';
            break;
        case url.includes('/en/'):
            lang = 'en';
            break;
        case url.includes('/de/'):
            lang = 'de';
            break;
        default:
            lang = 'en';
            fallback = true;
            break;
    }
    console.log(`Current URL: ${url}, language set to: ${lang}${fallback ? ' (fallback applied)' : ''}`);
    return lang;
};

export { getLang };