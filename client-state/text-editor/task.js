document.addEventListener('DOMContentLoaded', function() {
    const textEditor = document.getElementById('text-editor');

    // Восстанавливаем текст из локального хранилища при загрузке страницы
    const savedText = localStorage.getItem('editorContent');
    if (savedText) {
        textEditor.value = savedText;
    }

    
    textEditor.addEventListener('input', function() {
        localStorage.setItem('editorContent', textEditor.value);
    });
});