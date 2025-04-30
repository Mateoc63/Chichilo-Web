// Seleccionamos todos los botones de "Ver detalles"
const detailsBtns = document.querySelectorAll('.details-btn');

// Recorremos los botones para agregar el evento
detailsBtns.forEach(button => {
    button.addEventListener('click', function() {
        const menu = this.nextElementSibling; // El div dropdown-menu correspondiente al botón

        // Si el menú ya está visible, lo ocultamos
        if (menu.style.display === 'block') {
            menu.style.display = 'none';
        } else {
            // Primero, ocultamos todos los menús desplegables abiertos
            const allMenus = document.querySelectorAll('.dropdown-menu');
            allMenus.forEach(m => m.style.display = 'none');
            
            // Luego, mostramos el menú actual
            menu.style.display = 'block';
        }
    });
});

const hamburgerBtn = document.getElementById('hamburger-btn');
const navLinks = document.getElementById('nav-links');

hamburgerBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');  // Alterna la visibilidad del menú
});