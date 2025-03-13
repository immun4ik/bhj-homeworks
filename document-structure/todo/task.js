document.addEventListener('DOMContentLoaded', function() {
    // Получаем необходимые элементы
    const taskInput = document.getElementById('task__input');
    const tasksContainer = document.getElementById('tasks__list');
    
    // Функция для добавления новой задачи
    function addTask(text) {
      if (!text.trim()) return; // Не добавляем пустые задачи
      
      
      const taskElement = document.createElement('div');
      taskElement.className = 'task';
      
      const taskTitle = document.createElement('div');
      taskTitle.className = 'task__title';
      taskTitle.textContent = text;
      
      const taskRemove = document.createElement('a');
      taskRemove.className = 'task__remove';
      taskRemove.href = '#';
      taskRemove.innerHTML = '&times;';
      
      // Добавляем обработчик для удаления задачи
      taskRemove.addEventListener('click', function(event) {
        event.preventDefault();
        taskElement.remove();
      });
      
      // Собираем элементы задачи вместе
      taskElement.appendChild(taskTitle);
      taskElement.appendChild(taskRemove);
      
      
      tasksContainer.appendChild(taskElement);
      
      
      taskInput.value = '';
    }
    
    // Обработчик нажатия Enter в поле ввода
    taskInput.addEventListener('keydown', function(event) {
      if (event.key === 'Enter') {
        event.preventDefault();
        addTask(taskInput.value);
      }
    });
    
    // Также можно добавить обработчик для кнопки "Добавить", если она есть
    const addButton = document.querySelector('.tasks__add');
    if (addButton) {
      addButton.addEventListener('click', function(event) {
        event.preventDefault();
        addTask(taskInput.value);
      });
    }
  });