const clickerCounter = document.getElementById('clicker__counter');
const cookie = document.getElementById('cookie');


let clickCount = 0;
let isCookieEnlarged = false;
const originalWidth = cookie.width;

// Функция обработки клика по печеньке
function handleCookieClick() {
    
    clickCount++;
    clickerCounter.textContent = clickCount;
    
    
    if (isCookieEnlarged) {
       
        cookie.width = originalWidth;
    } else {
        // Если печенька нормального размера - увеличиваем ее
        cookie.width = originalWidth * 1.2;
    }
    
    
    isCookieEnlarged = !isCookieEnlarged;
}


cookie.addEventListener('click', handleCookieClick);