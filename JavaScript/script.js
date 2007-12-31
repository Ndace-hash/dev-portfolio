const navbarButton = document.querySelector('.navbar-toggle');
const navbar = document.querySelector('.navbar');
const navbarLink = document.querySelectorAll('.navbar-link');


navbarButton.addEventListener('click', () => {
    navbar.classList.toggle('show');
    navbarButton.classList.toggle('show');
})

navbarLink.forEach(link => {
    link.addEventListener('click', () => {
        navbar.classList.remove('show');
        navbarButton.classList.remove('show');
    })
})
