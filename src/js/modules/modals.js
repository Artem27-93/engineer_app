const modals = () => {
    function bindModal(triggerSelector,modalSelector,closeSelector){  // привязка модального окна к определённому тригеру(селектору)
         
        
        const trigger = document.querySelectorAll(triggerSelector), // селектор кнопки
                modal = document.querySelector(modalSelector), // модальное окно с формой
                close = document.querySelector(closeSelector); // кнопка "крестик" для закрытия окна

        trigger.forEach(item => {
            item.addEventListener('click',(event)=>{
                if(event.target){ // отменяем стандартное поведение браузера
                    event.preventDefault();
                }
                modal.style.display = 'block'; // модальное окно становится видимым на экране
                document.body.style.overflow = 'hidden'; // прокрутка документа не возможна

            });
        })

            close.addEventListener('click', ()=>{
                modal.style.display = 'none';  // модальное окно становится невидимым 
                document.body.style.overflow = '';
            })

            modal.addEventListener('click',(event) => { // клик по пустой области закрывает мод.окно
                
                if(event.target === modal){
                    modal.style.display = 'none';
                    document.body.style.overflow = '';
                }
            })
    }

    function showModalByTyme(selector,time){
        setTimeout(()=>{
            document.querySelector(selector).style.display = 'block';
            document.body.style.overflow = 'hidden';
        },time)
    }

    bindModal('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close');
    bindModal('.phone_link','.popup', '.popup .popup_close');
    bindModal('.popup_calc_btn','.popup_calc','.popup_calc_close');

    showModalByTyme('.popup',60000);
}

export default modals;