// Get references to the navbar and all sections
const navbar = document.getElementById('navbar');
const sections = document.querySelectorAll('section');

// Function to change navbar color based on the section
const changeNavbarColor = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            switch (entry.target.id) {
                case 'home':
                    navbar.style.backgroundColor = '#000000';
                    break;
                case 'about':
                    navbar.style.backgroundColor = '#FF8C00';
                    break;
                case 'services':
                    navbar.style.backgroundColor = '#FFB6C1';
                    break;
                case 'contact':
                    navbar.style.backgroundColor = '#00FF7F';
                    break;
            }
        }
    });
};

// Create a new IntersectionObserver instance
const observer = new IntersectionObserver(changeNavbarColor, {
    threshold: 0.5
});

// Observe each section
sections.forEach(section => {
    observer.observe(section);
});

// Hover effect for nav items
document.querySelectorAll('nav ul li a').forEach(item => {
    item.addEventListener('mouseover', event => {
        event.target.style.backgroundColor = '#777';
    });
    item.addEventListener('mouseout', event => {
        event.target.style.backgroundColor = '';
    });
});
