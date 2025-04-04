const userAgent = navigator.userAgent;
const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
let show = false;

const aTagButtons = buttonContainer.querySelectorAll('a');
console.log(aTags);

function isMobileDevice() {
    if (isMobile) {
        aTagButtons.forEach((aTag) => {
            aTag.style.display='none';
        });
        const menuButton = document.createElement('a');
        menuButton.className = 'button';
        menuButton.id = 'menuButton';
        menuButton.setAttribute('onclick', 'buttonSwitch()');
        menuButton.textContent = 'Menu';
        buttonContainer.prepend(menuButton);
    }
}

function buttonSwitch() {
    const menuButton = document.getElementById('menuButton');
    if (show === false) {
        const aTagButtons = buttonContainer.querySelectorAll('a');
        aTagButtons.forEach((aTag) => {
            aTag.style.display='block';
        });
        menuButton.className += ' currentButton';
        show = true;
    } else {
        const aTagButtons = buttonContainer.querySelectorAll('a');
        aTagButtons.forEach((aTag) => {
            aTag.style.display='none';
        });
        menuButton.remove();
        show = false;
        isMobileDevice();
    }
}

isMobileDevice();