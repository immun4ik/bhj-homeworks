document.addEventListener('DOMContentLoaded', function() {
    
    const rotators = document.querySelectorAll('.rotator');
    
    // Обрабатываем каждый ротатор отдельно
    rotators.forEach(rotator => {
      
      const cases = rotator.querySelectorAll('.rotator__case');
      
      
      if (cases.length === 0) return;
      
      
      setInterval(() => {
        
        const activeCase = rotator.querySelector('.rotator__case_active');
        
        
        let currentIndex = 0;
        for (let i = 0; i < cases.length; i++) {
          if (cases[i] === activeCase) {
            currentIndex = i;
            break;
          }
        }
        
        // Удаляем класс активности с текущего элемента
        activeCase.classList.remove('rotator__case_active');
        
        // Вычисляем индекс следующего элемента
        const nextIndex = (currentIndex + 1) % cases.length;
        
        // Добавляем класс активности следующему элементу
        cases[nextIndex].classList.add('rotator__case_active');
      }, 1000); 
    });
  });