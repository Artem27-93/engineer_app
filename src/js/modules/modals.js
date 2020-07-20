const modals = () => {
    function bindModal(trigger,modal,close){  // привязка модального окна к определённому тригеру(селектору)
            trigger.addEventListener('click',(event)=>{
                if(event.target){ // отменяем стандартное поведение браузера
                    event.preventDefault();
                }
                modal.style.display = 'block'; // модальное окно становится видимым на экране
                document.body.style.overflow = 'hidden'; // прокрутка документа не возможна

            });

            close.addEventListener('click', ()=>{
                modal.style.display = 'none';  // модальное окно становится невидимым 
                document.body.style.overflow = '';
            })
    }

    const callEngineerBtn = document.querySelector('.popup_engineer_btn'), // селектор кнопки
        modalEngineer = document.querySelector('.popup_engineer'), // модальное окно с формой
        modalEngineerClose = document.querySelector('.popup_engineer .popup_close') // кнопка "крестик" для закрытия окна

    bindModal(callEngineerBtn, modalEngineer, modalEngineerClose);
}

export default modals;