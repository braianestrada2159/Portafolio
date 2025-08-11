// Alternar menú móvil
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

// Activar el menú de navegación al hacer clic.
menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    menuToggle.innerHTML = navLinks.classList.contains('active') ? 
        '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
});

// Cerrar el menú al hacer clic en un enlace.
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
    });
});

//Desplazamiento suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Desplazamiento suave al ancla
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Filtro de Portfolio
const filterBtns = document.querySelectorAll('.filter-btn');
const portfolioItems = document.querySelectorAll('.portfolio-item');

// Inicializar todos los elementos del portafolio como visibles
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remover la clase 'active' de todos los botones
        filterBtns.forEach(btn => btn.classList.remove('active'));
        // Agregar la clase 'active' al botón clicado
        btn.classList.add('active');
        
        const filter = btn.getAttribute('data-filter');
        
        // Mostrar/ocultar elementos del portafolio según el filtro
        portfolioItems.forEach(item => {
            if (filter === 'all' || item.getAttribute('data-category') === filter) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });
});

// Validación del formulario de contacto
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Validar campos del formulario
    alert('¡Gracias por tu mensaje! Me pondré en contacto contigo pronto.');
    contactForm.reset();
});

// Animación al hacer scroll
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.skill-item, .timeline-item, .portfolio-item');
    
    // Recorrer cada elemento y aplicar animación si está en la vista
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        // Si el elemento está en la vista, aplicar animación
        if (elementPosition < screenPosition) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
};

// Inicializar los elementos con animación
document.querySelectorAll('.skill-item, .timeline-item, .portfolio-item').forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
});

// Añadir el evento de scroll para animar los elementos al desplazarse
window.addEventListener('scroll', animateOnScroll);
// Añadir el evento de carga para animar los elementos al cargar la página
window.addEventListener('load', animateOnScroll);