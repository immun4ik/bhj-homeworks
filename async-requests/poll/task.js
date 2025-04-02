async function fetchPoll() {
    try {
        const response = await fetch('https://students.netoservices.ru/nestjs-backend/poll');
        const data = await response.json();
        displayPoll(data);
    } catch (error) {
        console.error('Ошибка при загрузке опроса:', error);
    }
}

function displayPoll(data) {
    const titleElement = document.getElementById('poll__title');
    const answersElement = document.getElementById('poll__answers');

    titleElement.textContent = data.data.title;

    data.data.answers.forEach(answer => {
        const button = document.createElement('button');
        button.className = 'poll__answer';
        button.textContent = answer;

        button.addEventListener('click', () => {
            alert('Спасибо, ваш голос засчитан!');
        });

        answersElement.appendChild(button);
    });
}

fetchPoll();