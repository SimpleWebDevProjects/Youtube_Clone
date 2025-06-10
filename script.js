document.addEventListener('DOMContentLoaded', function() {
    const infoButton = document.getElementById('infoButton');
    const infoPanel = document.getElementById('infoPanel');
    const closeButton = document.getElementById('closeButton');
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const sidebar = document.querySelector('.sidebar');
    const themeToggle = document.querySelector('.theme-toggle');
    const categoryItems = document.querySelectorAll('.category-item');

    infoButton.addEventListener('click', () => {
        infoPanel.classList.add('visible');
    });

    closeButton.addEventListener('click', () => {
        infoPanel.classList.remove('visible');
    });

    mobileMenuBtn.addEventListener('click', () => {
        sidebar.classList.toggle('visible');
    });

    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('light-mode');
        const isLightMode = document.body.classList.contains('light-mode');
        themeToggle.innerHTML = isLightMode ?
            '<i class="fas fa-sun"></i>' :
            '<i class="fas fa-moon"></i>';

        if (isLightMode) {
            document.body.style.backgroundColor = '#f9f9f9';
            document.body.style.color = '#0f0f0f';
        } else {
            document.body.style.backgroundColor = '#0f0f0f';
            document.body.style.color = '#f1f1f1';
        }
    });

    categoryItems.forEach(item => {
        item.addEventListener('click', () => {
            categoryItems.forEach(i => i.classList.remove('active'));
            item.classList.add('active');
        });
    });

    // Close panel when clicking outside
    document.addEventListener('click', (e) => {
        if (infoPanel.classList.contains('visible') &&
            !infoPanel.contains(e.target) &&
            !infoButton.contains(e.target)) {
            infoPanel.classList.remove('visible');
        }
    });
});
