document.getElementById('uploadForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(this);
    const progress = document.getElementById('progress');
    const status = document.getElementById('status');

    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload', true);

    
    xhr.upload.addEventListener('progress', function(event) {
        if (event.lengthComputable) {
            const percentComplete = (event.loaded / event.total);
            progress.value = percentComplete;
        }
    });

    xhr.onload = function() {
        if (xhr.status >= 200 && xhr.status < 300) {
            const result = JSON.parse(xhr.responseText);
            status.textContent = 'Файл успешно загружен: ' + result.message;
        } else {
            status.textContent = 'Ошибка: ' + xhr.statusText;
        }
    };

    xhr.onerror = function() {
        status.textContent = 'Ошибка при загрузке файла.';
    };

    xhr.send(formData);
});