let selectElem = document.querySelector('select');
let logo = document.querySelector('img');

selectElem.addEventListener('change', changeTheme);

function changeTheme() {
    let current = selectElem.value;
    if (current == 'dark') {
        document.body.classList.add('dark');
        logo.src = 'images/byui-logo-white.png';
    } 
    else {
        document.body.classList.add('light');
        logo.src = 'images/download.png';
    }
}