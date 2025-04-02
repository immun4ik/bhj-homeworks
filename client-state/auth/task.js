document.addEventListener('DOMContentLoaded', function() {
    const signinForm = document.getElementById('signin__form');
    const welcomeBlock = document.getElementById('welcome');
    const userIdSpan = document.getElementById('user_id');
    const errorMessage = document.getElementById('error-message');

    // Проверяем локальное хранилище при загрузке страницы
    const userId = localStorage.getItem('user_id');
    if (userId) {
        showWelcome(userId);
    } else {
        document.getElementById('signin').classList.add('signin_active');
    }

    
    signinForm.addEventListener('submit', function(event) {
        event.preventDefault(); 

        const formData = new FormData(signinForm);
        const data = {
            login: formData.get('login'),
            password: formData.get('password')
        };

        // Отправка AJAX-запроса
        fetch('https://students.netoservices.ru/nestjs-backend/auth', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(result => {
            if (result.success) {
                
                localStorage.setItem('user_id', result.user_id);
                showWelcome(result.user_id);
            } else {
                
                errorMessage.textContent = 'Неверный логин/пароль';
            }
        })
        .catch(error => {
            console.error('Ошибка:', error);
            errorMessage.textContent = 'Произошла ошибка. Попробуйте снова.';
        });
    });

    function showWelcome(userId) {
        welcomeBlock.classList.add('welcome_active');
        userIdSpan.textContent = userId;
        document.getElementById('signin').classList.remove('signin_active');
    }
});