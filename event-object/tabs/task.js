document.addEventListener('DOMContentLoaded', function() {
    const tabContainers = document.querySelectorAll('.tab__navigation');
    
    // Обрабатываем каждую группу вкладок отдельно
    tabContainers.forEach(tabContainer => {
      
      const tabs = tabContainer.querySelectorAll('.tab');
      
      // Находим ближайший родительский элемент, содержащий контент вкладок
      const tabContentsContainer = tabContainer.nextElementSibling;
      if (!tabContentsContainer || !tabContentsContainer.classList.contains('tab__contents')) {
        return; // Пропускаем, если структура не соответствует ожидаемой
      }
      
      
      const tabContents = tabContentsContainer.querySelectorAll('.tab__content');
      
      // Добавляем обработчик клика для каждой вкладки
      tabs.forEach((tab, index) => {
        tab.addEventListener('click', function() {
          // Удаляем активный класс у всех вкладок
          tabs.forEach(t => t.classList.remove('tab_active'));
          
          
          tabContents.forEach(content => content.classList.remove('tab__content_active'));
          
          
          tab.classList.add('tab_active');
          
          
          if (index < tabContents.length) {
            tabContents[index].classList.add('tab__content_active');
          }
        });
      });
    });
  });