import { getLang } from './getlang.js';

const dayPart = document.getElementById('dayPart');

const lang = getLang();

const dayPartLangs = {
    'en': {
        morning: 'Good morning,',
        afternoon: 'Good afternoon,',
        evening: 'Good evening,',
        night: 'Good night,',
        default: 'Good day,'
    },
    'nl': {
        morning: 'Goedemorgen,',
        afternoon: 'Goedemiddag,',
        evening: 'Goedenavond,',
        night: 'Goedenacht,',
        default: 'Goede dag,'
    },
    'de': {
        morning: 'Guten Morgen,',
        afternoon: 'Guten Tag,',
        evening: 'Guten Abend,',
        night: 'Gute Nacht,',
        default: 'Guten Tag,'
    }
};


const updateDayPart = () => {
    const now = new Date();
    const hours = now.getHours();
    let partOfDay = '';

    switch (true) {
        case (hours >= 5 && hours < 12):
            partOfDay = dayPartLangs[lang].morning;
            break;
        case (hours >= 12 && hours < 17):
            partOfDay = dayPartLangs[lang].afternoon;
            break;
        case (hours >= 17 && hours < 21):
            partOfDay = dayPartLangs[lang].evening;
            break;
        case (hours >= 21 || hours < 5):
            partOfDay = dayPartLangs[lang].night;
            break;
        default:
            partOfDay = dayPartLangs[lang].default;
    }
    
    dayPart.textContent = partOfDay;
}

updateDayPart();

setInterval(updateDayPart, 3600000);