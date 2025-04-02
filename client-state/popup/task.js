document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('subscribe-modal');
    const closeModal = document.querySelector('.modal__close');

    // Функция для установки cookie
    function setCookie(name, value, days) {
        const expires = new Date(Date.now() + days * 864e5).toUTCString();
        document.cookie = name + '=' + encodeURIComponent(value) + '; expires=' + expires + '; path=/';
    }

    // Функция для получения значения cookie
    function getCookie(name) {
        return document.cookie.split('; ').reduce((r, c) => {
            const [key, val] = c.split('=');
            return key === name ? decodeURIComponent(val) : r;
        }, '');
    }

    // Проверяем наличие cookie
    if (!getCookie('modalClosed')) {
        modal.classList.add('modal_active'); // Показываем модальное окно
    }

    // Закрытие модального окна
    closeModal.addEventListener('click', function() {
        modal.classList.remove('modal_active');
        setCookie('modalClosed', 'true', 30); // Устанавливаем cookie на 30 дней
    });
});