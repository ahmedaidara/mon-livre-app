const themeButton = document.getElementById('theme-button');
const themeIcon = document.getElementById('theme-icon');

// Fonction pour basculer entre les thèmes
themeButton.addEventListener('click', () => {
    if (document.body.classList.contains('dark')) {
        document.body.classList.remove('dark');
        themeIcon.innerHTML = '<path d="M12 2a1 1 0 011 1V4a1 1 0 01-2 0V3a1 1 0 011-1zM12 16a1 1 0 011 1v1a1 1 0 01-2 0v-1a1 1 0 011-1zM12 8a1 1 0 011 1V9a1 1 0 01-2 0V8a1 1 0 011-1zM5.22 5.22a1 1 0 111.415 1.415l-1.415 1.415a1 1 0 11-1.415-1.415L5.22 5.22zM18.364 5.22a1 1 0 111.415 1.415L18.364 7.05a1 1 0 11-1.415-1.415l1.415-1.415zM18 12a1 1 0 011 1v1a1 1 0 01-2 0v-1a1 1 0 011-1zM6 12a1 1 0 011 1v1a1 1 0 01-2 0v-1a1 1 0 011-1zM12 10a1 1 0 011 1V11a1 1 0 01-2 0v-1a1 1 0 011-1zM4 12a1 1 0 011 1v1a1 1 0 01-2 0v-1a1 1 0 011-1zM16 4a1 1 0 011 1v1a1 1 0 01-2 0V5a1 1 0 011-1zM16 20a1 1 0 011 1v1a1 1 0 01-2 0v-1a1 1 0 011-1zM4 4a1 1 0 011 1v1a1 1 0 01-2 0V5a1 1 0 011-1zM4 20a1 1 0 011 1v1a1 1 0 01-2 0v-1a1 1 0 011-1zM12 14a1 1 0 011 1V15a1 1 0 01-2 0v-1a1 1 0 011-1z"/>';
    } else {
        document.body.classList.add('dark');
        themeIcon.innerHTML = '<path d="M12 2a1 1 0 011 1V4a1 1 0 01-2 0V3a1 1 0 011-1zM12 16a1 1 0 011 1v1a1 1 0 01-2 0v-1a1 1 0 011-1zM12 8a1 1 0 011 1V9a1 1 0 01-2 0V8a1 1 0 011-1zM5.22 5.22a1 1 0 111.415 1.415l-1.415 1.415a1 1 0 11-1.415-1.415L5.22 5.22zM18.364 5.22a1 1 0 111.415 1.415L18.364 7.05a1 1 0 11-1.415-1.415l1.415-1.415zM18 12a1 1 0 011 1v1a1 1 0 01-2 0v-1
