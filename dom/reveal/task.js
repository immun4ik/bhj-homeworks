document.addEventListener('DOMContentLoaded', function() {
    
    function isElementInViewport(element) {
      const rect = element.getBoundingClientRect();
      
      // Получаем высоту окна браузера
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;
      
      // Элемент считается видимым, если его верхняя граница находится ниже верхней границы окна
      // и верхняя граница элемента находится выше нижней границы окна
      return rect.top >= 0 && rect.top <= windowHeight * 0.75;
    }
    
    
    function handleRevealElements() {
      const reveals = document.querySelectorAll('.reveal');
      
      reveals.forEach(element => {
        if (isElementInViewport(element)) {
          element.classList.add('reveal_active');
        } else {
          // Опционально: удаляем класс, если элемент выходит из поля зрения
          // element.classList.remove('reveal_active');
        }
      });
    }
    
    
    handleRevealElements();
    
    
    window.addEventListener('scroll', handleRevealElements);
  });