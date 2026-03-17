// ГЛАВНАЯ СТРАНИЦА (index.html)
const glavnayaKnopka = document.querySelector('.glavnaya-knopka');
const projectsContainer = document.querySelector('.projects-container');
const gamesSectionHeading = document.querySelector('#games-section h2');

// Если мы на главной странице
if (projectsContainer && glavnayaKnopka) {
    // Сохраняем позицию скролла при переходе на страницу проекта
    document.querySelectorAll('.project-card').forEach(card => {
        card.addEventListener('click', function() {
            sessionStorage.setItem('scrollPosition', document.querySelector('#games-section').offsetTop);
            sessionStorage.setItem('projectsVisible', 'true');
        });
    });

    // Восстанавливаем позицию скролла и видимость проектов при возврате назад
    window.addEventListener('pageshow', function() {
        const savedPosition = sessionStorage.getItem('scrollPosition');
        const projectsVisible = sessionStorage.getItem('projectsVisible');
        
        if (savedPosition && projectsVisible === 'true') {
            setTimeout(() => {
                window.scrollTo(0, parseInt(savedPosition));
                
                // Восстанавливаем видимость
                if (projectsContainer) projectsContainer.classList.add('visible');
                if (gamesSectionHeading) gamesSectionHeading.classList.add('visible');
            }, 100);
        }
    });

    glavnayaKnopka.addEventListener('click', function(e) {
        e.preventDefault();
        
        if (projectsContainer) projectsContainer.classList.add('visible');
        if (gamesSectionHeading) gamesSectionHeading.classList.add('visible');

        // Плавный скролл к проектам
        document.querySelector('#games-section').scrollIntoView({
            behavior: 'smooth'
        });
    });
}


//СТРАНИЦЫ ПРОЕКТОВ (lizunyasha.html, redhood.html, pigdinner.html)
const projectPageKnopka = document.querySelector('.project-page .glavnaya-knopka');

// Если мы на странице проекта
if (projectPageKnopka) {
    // Сохраняем что проекты должны быть видны при возврате
    projectPageKnopka.addEventListener('click', function() {
        sessionStorage.setItem('projectsVisible', 'true');
    });

    // Восстанавливаем позицию скролла при возврате назад
    window.addEventListener('pageshow', function() {
        const savedPosition = sessionStorage.getItem('scrollPosition');
        if (savedPosition) {
            setTimeout(() => {
                window.scrollTo(0, parseInt(savedPosition));
            }, 100);
        }
    });
}
