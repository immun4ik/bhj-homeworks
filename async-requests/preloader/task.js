async function fetchCurrencyRates() {
    const loader = document.getElementById('loader');
    const itemsContainer = document.getElementById('items');

    try {
        
        loader.classList.add('loader_active');

        // Отправляем GET-запрос
        const response = await fetch('https://students.netoservices.ru/nestjs-backend/slow-get-courses');
        const data = await response.json();

        
        const valutes = data.response.Valute;

        
        for (const key in valutes) {
            const currency = valutes[key];

            const itemDiv = document.createElement('div');
            itemDiv.className = 'item';

            itemDiv.innerHTML = 
                '<div class="item__code">' + currency.CharCode + '</div>' +
                '<div class="item__value">' + currency.Value.toFixed(2) + '</div>' +
                '<div class="item__currency">руб.</div>';

            itemsContainer.appendChild(itemDiv);
        }
    } catch (error) {
        console.error('Ошибка при загрузке курсов валют:', error);
    } finally {
        
        loader.classList.remove('loader_active');
    }
}

// Вызываем функцию для загрузки курсов валют
fetchCurrencyRates();