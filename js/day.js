const dayPart = document.getElementById('dayPart');

updateDayPart = () => {
    const now = new Date();
    const hours = now.getHours();
    let partOfDay = '';

    if (hours >= 5 && hours < 12) {
        partOfDay = 'Good morning,';
    } else if (hours >= 12 && hours < 17) {
        partOfDay = 'Good afternoon,';
    } else if (hours >= 17 && hours < 21) {
        partOfDay = 'Good evening,';
    } else {
        partOfDay = 'Good night,';
    }
    
    dayPart.textContent = partOfDay;
}

updateDayPart();

setInterval(updateDayPart, 3600000);