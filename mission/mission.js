let selectElem = document.querySelector('select');
let logo = document.querySelector('img');

selectElem.addEventListener('change', changeTheme);

function changeTheme() {
    let current = selectElem.value;
    if (current == 'dark') {
        document.body.className = 'dark';
        logo.src = 'images/byui-logo-white.png';
    } 
    else {
        document.body.className = 'light';
        logo.src = 'images/download.png';
    }
}