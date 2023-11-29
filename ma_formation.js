const onglets = document.querySelectorAll('[data-target]');
const contenusOnglets = document.querySelectorAll('[data-content]');

onglets.forEach(onglet => {
    onglet.addEventListener('click', () => {
        const cible = document.querySelector(onglet.dataset.target);

        contenusOnglets.forEach(contenuOnglet => {
            contenuOnglet.classList.remove('qualification_active');
        });
        
        onglets.forEach(onglet => {
            onglet.classList.remove('qualification_active');
        });

        cible.classList.add('qualification_active');
        onglet.classList.add('qualification_active');
    });
});

const typed = new Typed('.multiple-text-formation', {
    strings: ['Ma formation','étudiante'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
})