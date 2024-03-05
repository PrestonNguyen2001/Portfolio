let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
});

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

// Add scroll event listener
window.addEventListener('scroll', () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });

            sec.classList.add('show-animate');
        } else {
            sec.classList.remove('show-animate');
        }
    });

    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    // Close navbar and reset menu icon on scroll
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
});

// Add event listeners for "Read More" buttons
let readMoreButtons = document.querySelectorAll('#readMoreBtn');
let additionalTexts = document.querySelectorAll('.additional-text');

readMoreButtons.forEach((button, index) => {
    button.addEventListener('click', (event) => {
        event.preventDefault(); 
        additionalTexts[index].classList.toggle('show');

        // Hide the button when the additional text is shown
        if (additionalTexts[index].classList.contains('show')) {
            button.style.display = 'none';
        }
    });
});