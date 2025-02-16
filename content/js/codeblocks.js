const codeblock = document.querySelectorAll('code');
console.log(codeblock);

function toggleCodeblock(i) {
    if (codeblock[i].style.display === 'none') {
        codeblock[i].style.display = 'block';
    } else {
        codeblock[i].style.display = 'none';
    }
}