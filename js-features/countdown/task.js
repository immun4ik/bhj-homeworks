const timerElement = document.getElementById('timer');
let seconds = parseInt(timerElement.textContent);

// Функция для обновления таймера
function updateTimer() {
    seconds -= 1;
    
    
    timerElement.textContent = seconds;
    
    
    if (seconds <= 0) {
        
        clearInterval(timerId);
        
        
        alert('Вы победили в конкурсе!');
    }
}


const timerId = setInterval(updateTimer, 1000);