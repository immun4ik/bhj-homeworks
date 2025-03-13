document.addEventListener('DOMContentLoaded', function() {
    // Находим все выпадающие списки на странице
    const dropdowns = document.querySelectorAll('.dropdown');
    
    // Для каждого выпадающего списка добавляем обработчики событий
    dropdowns.forEach(dropdown => {
        const value = dropdown.querySelector('.dropdown__value');
        const list = dropdown.querySelector('.dropdown__list');
        const items = dropdown.querySelectorAll('.dropdown__item');
        
        
        value.addEventListener('click', function() {
            list.classList.toggle('dropdown__list_active');
        });
        
        // Обработчик клика по элементам списка
        items.forEach(item => {
            const link = item.querySelector('.dropdown__link');
            
            link.addEventListener('click', function(event) {
                
                event.preventDefault();
                
                
                value.textContent = link.textContent.trim();
                
                
                list.classList.remove('dropdown__list_active');
            });
        });
    });
    
    
    document.addEventListener('click', function(event) {
        const target = event.target;
        
        // Если клик был не по выпадающему списку и не по его дочерним элементам
        if (!target.closest('.dropdown__value') && !target.closest('.dropdown__list')) {
            
            document.querySelectorAll('.dropdown__list_active').forEach(list => {
                list.classList.remove('dropdown__list_active');
            });
        }
    });
});