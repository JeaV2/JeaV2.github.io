function toggleCRT() { 
    var css = document.getElementById('switch'); 
    if (css.getAttribute('href') == '') { 
        css.setAttribute('href', '../content/css/crt.css'); 
        localStorage.setItem('crt', 'true');
    } 
    else {
        css.setAttribute('href', '');
        localStorage.setItem('crt', 'false');
    } 
}

function loadCRT() {
    var css = document.getElementById('switch');
    if (localStorage.getItem('crt') == 'false') {
        css.setAttribute('href', '');
    }
}
loadCRT();