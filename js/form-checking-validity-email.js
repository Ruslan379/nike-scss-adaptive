document.addEventListener('DOMContentLoaded', () => {
    const emailInput = document.querySelector('input[type="email"]');
    const textInputs = document.querySelectorAll('input[type="text"]');
    const confirmButton = document.querySelector('.order-form__button-confirm');
    const submitButton = document.querySelector('.order-form__button-submit');

    let confirmButtonState = true // Початковий стан кнопки "Confirm"- Є (display = 'block')

    // Блокуємо та зменшуємо прозорість інпутів, поки Є кнопка "Confirm"
    function updateTextInputOpacity() {
        // прозорість інпутів
        // const opacity = confirmButton.disabled ? 0.3 : 1;
        const opacity = confirmButtonState ? 0.3 : 1;
        textInputs.forEach(function(input) {
            input.style.opacity = opacity;
        });
        // Блокування інпутів
        // confirmButton.disabled
        confirmButtonState
        ? 
        textInputs.forEach(function(input) {
            input.setAttribute('disabled', 'true');
        }) 
        : 
        textInputs.forEach(function(input) {
            input.removeAttribute('disabled');
        });
    }
    
    // Зміна статусу кнопки "Сonfirm" (disabled)
    emailInput.addEventListener('input', () => {
        if (emailInput.validity.valid) {
            confirmButton.removeAttribute('disabled'); // Вмикаємо кнопку "Сonfirm"
        } else {
            confirmButton.setAttribute('disabled', 'true'); // Вимикаємо кнопку "Сonfirm"
        }
        updateTextInputOpacity();
    });

    // Приховуємо кнопку "Сonfirm" після кліка
    confirmButton.addEventListener('click', function () {
        confirmButton.style.display = 'none';
        submitButton.removeAttribute('disabled'); // Вмикаємо кнопку "submit"
        confirmButtonState = false
        updateTextInputOpacity(); // Обновление прозрачности после скрытия кнопки "Сonfirm"
    });

    // Змінюємо кольори для тих інпутів у яких type="text"
    textInputs.forEach(function(input) {
        // Добавление события focus для всех input с type="text"
        input.addEventListener('focus', function () {
            input.style.border = '2px solid green'; // Изменяем цвет рамки при фокусе
            input.style.backgroundColor = '#d6ffdf'; 
        });

        // Добавление события blur для всех input с type="text"
        input.addEventListener('blur', function () {
            input.style.border = ''; // Сбрасываем цвет рамки при потере фокуса
            input.style.backgroundColor = ''; 
        });
    });

    // Инициализация прозрачности текстовых полей при загрузке страницы
    updateTextInputOpacity();
});