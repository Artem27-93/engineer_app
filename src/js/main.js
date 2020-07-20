import './slider'; // подключили слайдер для мобильной версии
import modals from './modules/modals'; // подключили модальное окно
import tabs from './modules/tabs';


window.addEventListener('DOMContentLoaded', () =>{ // после загрузки ДОМ-дерева будет выполняться весь код
    modals();
    tabs('.glazing_slider','.glazing_block','.glazing_content','active');
    tabs('.decoration_slider', '.no_click', '.decoration_content > div > div', 'after_click');
})