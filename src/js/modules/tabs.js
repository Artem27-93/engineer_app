const tabs = (headerSelector,tabSelector, contentSelector, activeClass) => {
    const header = document.querySelector(headerSelector),  //выбираем селекторы
          tab = document.querySelectorAll(tabSelector),
          content = document.querySelectorAll(contentSelector);
          

    function hideTabContent(){   // скрываем весь контент со страницы
        content.forEach(item => {
            item.style.display = 'none';
        });
        tab.forEach(item => {  // убираем со всег табов активный класс
            item.classList.remove(activeClass);
        });

    }
    function showTabContent(i = 0){  // показываем первый(любой) таб на странице
        content[i].style.display = 'block';
        tab[i].classList.add(activeClass);  // добавляем класс активности для первого таба

    }
    hideTabContent(); 
    showTabContent();

    header.addEventListener('click', (event) => {
         const target = event.target;
         if(target.classList.contains(tabSelector.replace(/\./,"")) || 
            target.parentNode.classList.contains(tabSelector.replace(/\./,""))
         ){
             tab.forEach((item,index) => {
                 if(target === item || target.parentNode === item){
                    hideTabContent();
                    showTabContent(index);
                 }
             })
         }


})
}


export default tabs;