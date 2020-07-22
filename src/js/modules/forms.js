const forms = () => {
  const form = document.querySelectorAll('form'), // все формы на странице
        input = document.querySelectorAll('input'), // все инпуты в формах
        inputNum = document.querySelectorAll('input[name="user_phone"]'),
        inputString = document.querySelectorAll('input[name="user_name"]');


    inputString.forEach((item) => {
        item.addEventListener('input', ()=>{
            item.value = item.value.replace(/\d/,'');
        })
    })

    console.log(inputString)


    inputNum.forEach((item)=>{
        item.addEventListener('input',()=>{
            item.value = item.value.replace(/\D/,'');
        })
       
    })
    const message = {  // объект с сообщениями для пользователя
        loading: 'Загрузка...',
        success: "Спасибо!Скоро мы с вами свяжемся",
        failure: "Что-то пошло не так!"
    }

    const postData = async(url,data) => { // отправка запроса
        document.querySelector('.status').textContent = message.loading;
        let res = await fetch(url,{ // настройка запроса
            method: "POST",
            body: data
        });
        return await res.text();
    }


    const clearInputs = () => { // очистка инпутов
        input.forEach(item => {
            item.value = ''
        })
    }
    

    form.forEach(item => {
        item.addEventListener('submit', (event)=>{
            event.preventDefault();

            let statusMessage = document.createElement('div');
            statusMessage.classList.add('status');
            item.appendChild(statusMessage);

            const formData = new FormData(item); // собираем все данные из формы

            postData('assets/server.php', formData) // отправка формы
            .then(res => {
                console.log(res);
                statusMessage.textContent = message.success;
            })
            .catch(()=> statusMessage.textContent = message.failure)
            .finally(()=>{
                clearInputs();
                setTimeout(()=>{
                    statusMessage.remove();
                },5000)
            })
        })
    })
}
export default forms;