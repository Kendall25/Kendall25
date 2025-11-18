// ===== FUNCIONALIDADES DEL PORTFOLIO =====

// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    
    // ===== MENÚ DE NAVEGACIÓN MÓVIL =====
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    // Alternar menú móvil al hacer clic en el icono hamburguesa
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
    
    // Cerrar menú móvil al hacer clic en un enlace
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
    
    // ===== EFECTO DE NAVEGACIÓN SUAVE =====
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                // Calcular posición considerando la barra de navegación fija
                const navbarHeight = document.getElementById('navbar').offsetHeight;
                const targetPosition = targetElement.offsetTop - navbarHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // ===== ANIMACIÓN DE BARRAS DE HABILIDADES =====
    function animateSkills() {
        const skillBars = document.querySelectorAll('.skill-level');
        
        skillBars.forEach(bar => {
            const level = bar.getAttribute('data-level');
            bar.style.width = level + '%';
        });
    }
    
    // ===== DETECCIÓN DE SCROLL PARA ANIMACIONES =====
    function checkScroll() {
        // Animación de la barra de navegación al hacer scroll
        const navbar = document.getElementById('navbar');
        if (window.scrollY > 100) {
            navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.98)';
            navbar.style.padding = '10px 0';
        } else {
            navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
            navbar.style.padding = '15px 0';
        }
        
        // Animación de las barras de habilidades cuando son visibles
        const skillsSection = document.getElementById('sobre-mi');
        const skillsPosition = skillsSection.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if (skillsPosition < screenPosition) {
            animateSkills();
        }
    }
    
    // Ejecutar checkScroll al cargar la página y al hacer scroll
    window.addEventListener('scroll', checkScroll);
    window.addEventListener('load', checkScroll);
    
    // ===== FORMULARIO DE CONTACTO =====
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Obtener valores del formulario
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            // Validación básica
            if (name && email && message) {
                // Aquí normalmente enviarías los datos a un servidor
                // Por ahora, solo mostraremos una alerta
                alert(`¡Gracias ${name}! Tu mensaje ha sido enviado. Te contactaré pronto.`);
                
                // Limpiar el formulario
                contactForm.reset();
            } else {
                alert('Por favor, completa todos los campos del formulario.');
            }
        });
    }
    
    // ===== ANIMACIÓN DE TARJETAS DE PROYECTOS AL HACER SCROLL =====
    function animateProjectCards() {
        const projectCards = document.querySelectorAll('.project-card');
        
        projectCards.forEach(card => {
            const cardPosition = card.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.2;
            
            if (cardPosition < screenPosition) {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }
        });
    }
    
    // Configurar opacidad inicial para las tarjetas de proyectos
    document.querySelectorAll('.project-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    // Ejecutar animación de tarjetas al hacer scroll
    window.addEventListener('scroll', animateProjectCards);
    
    // ===== EFECTO DE TYPING EN EL HERO =====
    // (Opcional) - Puedes descomentar si quieres un efecto de escritura
    /*
    function typeWriter(element, text, speed = 100) {
        let i = 0;
        element.innerHTML = '';
        
        function type() {
            if (i < text.length) {
                element.innerHTML += text.charAt(i);
                i++;
                setTimeout(type, speed);
            }
        }
        
        type();
    }
    
    // Ejemplo de uso:
    // const heroText = document.querySelector('.hero-content h1');
    // typeWriter(heroText, 'Hola, soy Tu Nombre');
    */
    
    // ===== CARGAR MÁS PROYECTOS (FUNCIONALIDAD ADICIONAL) =====
    // (Opcional) - Puedes implementar esto si tienes muchos proyectos
    
    // ===== MODAL PARA PROYECTOS (FUNCIONALIDAD ADICIONAL) =====
    // (Opcional) - Puedes implementar esto para mostrar más detalles de cada proyecto
    
});

// ===== FUNCIONES ADICIONALES ÚTILES =====

// Función para formatear fechas (útil si agregas fechas a los proyectos)
function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('es-ES', options);
}

// Función para validar emails (mejora la validación del formulario)
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Función para hacer peticiones HTTP (útil para enviar el formulario a un backend)
async function sendFormData(url, data) {
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        });
        
        return await response.json();
    } catch (error) {
        console.error('Error al enviar el formulario:', error);
        return null;
    }
}


// Menú hamburguesa
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
    
    // Cerrar menú al hacer clic en un enlace
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
});