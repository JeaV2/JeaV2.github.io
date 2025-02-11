const date = new Date();
const hours = date.getHours();
const dagdeel = document.getElementById('dagdeel');
console.log('Time:', hours);

if (hours >= 6 && hours < 12) {
    dagdeel.innerHTML = 'Goedemorgen';
}
else if (hours >= 12 && hours < 18) {
    dagdeel.innerHTML = 'Goedemiddag';
}
else if (hours >= 18 && hours < 24) {
    dagdeel.innerHTML = 'Goedenavond';
}
else { dagdeel.innerHTML = 'Goedenacht'; }

