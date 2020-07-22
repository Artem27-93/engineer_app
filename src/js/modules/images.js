const images = () => {
    const imgPop = document.createElement('div'), // создаём пустой div
          workSection = document.querySelector('.works'), // получаем секцию с картинками
          bigImage = document.createElement('img'); // создаём пустой тег изображения



        imgPop.classList.add('popup'); // назначаем класс со стилями
        workSection.appendChild(imgPop); // добавляем в конец секции тег div


        imgPop.style.justifyContent = 'center'; //выравниваем по главной оси
        imgPop.style.alignItems = 'center'; // выравниваем по перпендикулярной оси
        imgPop.style.display = 'none'; // скрываем div со страницы


        imgPop.appendChild(bigImage); //помещаем тег с изображением в контейнер-родитель
        console.log(imgPop)
        
        // Делегирование события


        workSection.addEventListener('click', (event)=>{
            event.preventDefault(); // убираем станд. поведение браузера
            let target = event.target; // объект события, по клику на который будет срабатывать обработчик
            
            if(target && target.classList.contains('preview')){ // условие
                imgPop.style.display = 'flex'; //показываем div на страницу
                imgPop.style.position = 'fixed';
                const path = target.parentNode.getAttribute('href'); 
                bigImage.setAttribute('src',path);
                
            
            }
            
            
            if(target && target.matches('div.popup')){
                imgPop.style.display = 'none';
            }
        })

}

export default images;

