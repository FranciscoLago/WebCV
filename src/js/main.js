// Seleccionamos todas las secciones y proyectos
const elements = document.querySelectorAll(".section, .project-card");

// Intersection Observer para animaciones fade-in
const observer = new IntersectionObserver(entries => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.classList.add("visible");
            }, index * 100); // ligero retraso en cascada
        }
    });
}, {
    threshold: 0.15
});

// Observamos cada elemento
elements.forEach(el => observer.observe(el));
