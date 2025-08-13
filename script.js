// Обработка клика по кнопке
document.getElementById('cta-button').addEventListener('click', function() {
    alert('Спасибо за интерес! Скоро мы с вами свяжемся.');
});

// Плавная прокрутка при клике на ссылки (если будут добавлены)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
