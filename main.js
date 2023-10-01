import './style.scss'
import 'normalize.css';
import './style_mobile.scss'

const toggleButton = document.querySelector('#menu-button-toggler button');
const appMenu = document.querySelector('.menu');
const menuBlurFilter = document.querySelector('.menu-blur-filter')

const toggleMenu = () => {
    appMenu.classList.toggle('show-menu')
    menuBlurFilter.classList.toggle('show')
}

toggleButton.addEventListener('click', toggleMenu)

toggleButton.onblur = function () {
    appMenu.classList.toggle('show-menu')
    menuBlurFilter.classList.toggle('show')
}
