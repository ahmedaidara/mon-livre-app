document.addEventListener('DOMContentLoaded', () => {
    // Protection contre copie, téléchargement, etc.
    document.addEventListener('contextmenu', (e) => e.preventDefault());
    document.addEventListener('copy', (e) => e.preventDefault());
    document.addEventListener('cut', (e) => e.preventDefault());
    document.addEventListener('dragstart', (e) => e.preventDefault());
    document.addEventListener('selectstart', (e) => e.preventDefault());

    // Mode sombre/clair
    const themeToggle = document.getElementById('theme-toggle');
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        themeToggle.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
    });

    // Ajustement de la taille de la police
    const fontIncrease = document.getElementById('font-increase');
    const fontDecrease = document.getElementById('font-decrease');
    let fontSize = 16;

    fontIncrease.addEventListener('click', () => {
        if (fontSize < 24) {
            fontSize += 2;
            document.body.style.fontSize = `${fontSize}px`;
        }
    });

    fontDecrease.addEventListener('click', () => {
        if (fontSize > 12) {
            fontSize -= 2;
            document.body.style.fontSize = `${fontSize}px`;
        }
    });

    // Gestion des favoris
    const favoritesBtn = document.getElementById('favorites-btn');
    const favoritesSection = document.getElementById('favorites');
    const homeSection = document.getElementById('home');
    const chapters = document.querySelectorAll('.chapter');
    const favoritesList = document.getElementById('favorites-list');
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

    favoritesBtn.addEventListener('click', () => {
        homeSection.classList.add('hidden');
        chapters.forEach(chapter => chapter.classList.add('hidden'));
        favoritesSection.classList.remove('hidden');
        renderFavorites();
    });

    document.querySelectorAll('.add-favorite').forEach(button => {
        button.addEventListener('click', () => {
            const chapterId = button.getAttribute('data-chapter');
            if (!favorites.includes(chapterId)) {
                favorites.push(chapterId);
                localStorage.setItem('favorites', JSON.stringify(favorites));
                renderFavorites();
            }
        });
    });

    function renderFavorites() {
        favoritesList.innerHTML = '';
        favorites.forEach(chapterId => {
            const li = document.createElement('li');
            li.innerHTML = `<a href="#chapter${chapterId}">Chapitre ${chapterId}</a>`;
            favoritesList.appendChild(li);
        });
    }

    // Navigation entre sections
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = anchor.getAttribute('href').substring(1);
            document.querySelectorAll('section').forEach(section => {
                section.classList.add('hidden');
            });
            document.getElementById(targetId).classList.remove('hidden');
        });
    });

    // Lecture vocale
    const synth = window.speechSynthesis;
    document.querySelectorAll('.read-aloud').forEach(button => {
        button.addEventListener('click', () => {
            const chapterId = button.getAttribute('data-chapter');
            const chapterText = document.querySelector(`#chapter${chapterId} p`).textContent;
            const utterance = new SpeechSynthesisUtterance(chapterText);
            utterance.lang = 'fr-FR';
            synth.speak(utterance);
        });
    });
});
