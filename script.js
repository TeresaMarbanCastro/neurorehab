// script.js

document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('nav ul li a');

    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = e.target.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('nav ul li a');
    const nav = document.querySelector('nav');
    const navUl = nav.querySelector('ul');

    // Añadir un botón de toggle
    const toggleButton = document.createElement('button');
    toggleButton.classList.add('nav-toggle');
    toggleButton.textContent = '\u2630'; // Ícono de hamburguesa
    nav.insertBefore(toggleButton, navUl);

    toggleButton.addEventListener('click', () => {
        navUl.classList.toggle('visible');
        toggleButton.textContent = navUl.classList.contains('visible') ? '✖' : '\u2630';
    });

    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = e.target.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth'
                });
            }

            // Cerrar menú al hacer clic (solo móvil)
            if (window.innerWidth <= 768) {
                navUl.classList.remove('visible');
                toggleButton.textContent = '\u2630';
            }
        });
    });
});

