document.addEventListener('DOMContentLoaded', function() {
    // Находим все элементы с классом has-tooltip
    const tooltipElements = document.querySelectorAll('.has-tooltip');
    
    // Создаем элемент для подсказки
    const tooltipDiv = document.createElement('div');
    tooltipDiv.className = 'tooltip';
    document.body.appendChild(tooltipDiv);
    
    // Добавляем обработчик клика для каждого элемента с подсказкой
    tooltipElements.forEach(function(element) {
      element.addEventListener('click', function(event) {
        
        event.preventDefault();
        
        
        const tooltipText = this.getAttribute('title');
        
        
        tooltipDiv.textContent = tooltipText;
        
        
        const isActive = tooltipDiv.classList.contains('tooltip_active') && 
                         tooltipDiv.dataset.forElement === this.textContent;
        
        
        tooltipDiv.classList.remove('tooltip_active');
        
        // Если подсказка не была активна, показываем её
        if (!isActive) {
          // Позиционируем подсказку относительно элемента
          const rect = this.getBoundingClientRect();
          tooltipDiv.style.left = rect.left + 'px';
          tooltipDiv.style.top = (rect.bottom + 5) + 'px'; 
          
          tooltipDiv.classList.add('tooltip_active');
          
          
          tooltipDiv.dataset.forElement = this.textContent;
        }
      });
    });
    
    // Закрываем подсказку при клике в любом месте страницы
    document.addEventListener('click', function(event) {
      
      if (!event.target.classList.contains('has-tooltip')) {
        tooltipDiv.classList.remove('tooltip_active');
      }
    }, true);
  });