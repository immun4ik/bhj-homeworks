document.addEventListener('DOMContentLoaded', function() {
    
    const fontSizeControls = document.querySelectorAll('.font-size');
    
    const bookElement = document.getElementById('book');
    
    
    fontSizeControls.forEach(control => {
      control.addEventListener('click', function(event) {
        // Предотвращаем стандартное поведение ссылки
        event.preventDefault();
        
        // Удаляем класс active у всех элементов управления
        fontSizeControls.forEach(item => {
          item.classList.remove('font-size_active');
        });
        
        // Добавляем класс active текущему элементу
        this.classList.add('font-size_active');
        
        
        bookElement.classList.remove('book_fs-small', 'book_fs-big');
        
        
        const fontSize = this.dataset.size;
        
        
        if (fontSize === 'small') {
          bookElement.classList.add('book_fs-small');
        } else if (fontSize === 'big') {
          bookElement.classList.add('book_fs-big');
        }
        
      });
    });
  });