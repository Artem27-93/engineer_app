import './slider'; // подключили слайдер для мобильной версии
import modals from './modules/modals'; // подключили модальное окно
import tabs from './modules/tabs'; // подключили табы
import forms from './modules/forms';
import timer from './modules/timer';
import images from './modules/images';

window.addEventListener('DOMContentLoaded', () =>{ // после загрузки ДОМ-дерева будет выполняться весь код
    "use strict";
    let deadline = "2020-07-22";
    modals();
    tabs('.glazing_slider','.glazing_block','.glazing_content','active');
    tabs('.decoration_slider', '.no_click', '.decoration_content > div > div', 'after_click');
    tabs('.balcon_icons','.balcon_icons_img','.big_img > img','do_image_more','inline-block');
    forms();
    timer('.container1', deadline);
    images();

})