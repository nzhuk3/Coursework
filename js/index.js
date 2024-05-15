const storage = window.localStorage;
if (storage.getItem('theme') == 'dark') {
    enableDarkTheme();
    document.querySelector('.theme-switch-input').checked = true;
} else if(storage.getItem('theme') == 'light') {
    enableLightTheme();
    document.querySelector('.theme-switch-input').checked = false;
} else {
    storage.setItem('theme', 'light');
}

window.onload = () => {
    const input = document.querySelector('.theme-switch-input');
    console.log(input.checked);
    input.onchange = (e) => {
        if (input.checked) {
            enableDarkTheme(); 
            storage.setItem('theme', 'dark');           
        } else {
           enableLightTheme();
           storage.setItem('theme', 'light');      
        }
    }
}

function setProp(propName, value) {
    document.documentElement.style.setProperty(propName, value);
}

const burgerBtn = document.querySelector('.burger-button')
const nav = document.querySelector('nav');
const closeNav = document.querySelector('.nav-close-button')

burgerBtn.addEventListener('click', (e) => {
    nav.style.display = 'flex';
    nav.classList.add('nav-active');
    closeNav.style.display = 'block';
})

closeNav.addEventListener('click', (e) => {
    nav.classList.remove('nav-active');
    closeNav.style.display = '';
    nav.style.display = '';
})

function enableDarkTheme() {
    document.querySelectorAll('img').forEach(element => {
        console.log(element.src);
        element.src = element.src.replace('_light', '');
        console.log(element.src);
    })
    setProp('--text', '#5DC8B4');
    setProp('--background', '#1D1D1F');
    setProp('--panelbg', 'rgba(0, 0, 0, 0.2)'); 
}

function enableLightTheme() {
    document.querySelectorAll('img').forEach(element => {
        console.log(element.src);
        element.src = element.src.replace('.svg', '_light.svg');
        console.log(element.src);
    })
    setProp('--text', '#161618');
    setProp('--background', '#DCDCDC');
    setProp('--panelbg', 'rgba(255, 255, 255, 0.2)'); 
}





