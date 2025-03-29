// js/scripts.js
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link');
    const contentSections = document.querySelectorAll('#content section');
    const homeButton = document.getElementById('homeButton');

    function showPage(pageName) {
        contentSections.forEach(section => {
            section.style.display = section.dataset.page === pageName ? 'block' : 'none';
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.dataset.page === pageName) {
                link.classList.add('active');
            }
        });
    }

    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const page = this.dataset.page;
            showPage(page);
        });
    });

    homeButton.addEventListener('click', function() {
        showPage('home');
    });

    // Initial page load
    showPage('home');
});
