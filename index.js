const detailsBtns = document.querySelectorAll('.details-btn');
detailsBtns.forEach(button => {
    button.addEventListener('click', function() {
        const menu = this.nextElementSibling; 

        if (menu.style.display === 'block') {
            menu.style.display = 'none';
        } else {
            const allMenus = document.querySelectorAll('.dropdown-menu');
            allMenus.forEach(m => m.style.display = 'none');
            menu.style.display = 'block';
        }
    });
});

const hamburgerBtn = document.getElementById('hamburger-btn');
const navLinks = document.getElementById('nav-links');

hamburgerBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active'); 
});