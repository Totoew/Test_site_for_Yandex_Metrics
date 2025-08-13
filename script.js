// Плавная прокрутка для навигации
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Демо-кнопка
document.getElementById('demo-btn').addEventListener('click', () => {
    alert('Это просто фронтенд — никаких запросов на сервер!');
});

// Подсветка email при клике
document.querySelector('.email').addEventListener('click', () => {
    const email = 'example@test.ru';
    navigator.clipboard.writeText(email).then(() => {
        alert('Email скопирован: ' + email);
    });
});
