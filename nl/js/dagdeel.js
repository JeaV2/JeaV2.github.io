const dagdeel = document.getElementById('dagdeel');

updatedagdeel = () => {
    const now = new Date();
    const hours = now.getHours();
    let partOfDay = '';

    if (hours >= 5 && hours < 12) {
        partOfDay = 'Goedemorgen,';
    } else if (hours >= 12 && hours < 17) {
        partOfDay = 'Goedemiddag,';
    } else if (hours >= 17 && hours < 21) {
        partOfDay = 'Goedenavond,';
    } else {
        partOfDay = 'Goedenacht,';
    }
    
    dagdeel.textContent = partOfDay;
}

updatedagdeel();

setInterval(updatedagdeel, 3600000);