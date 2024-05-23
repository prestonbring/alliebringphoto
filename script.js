// JavaScript code for smooth scrolling effect
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// JavaScript code for adding some simple animations
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (sectionTop < windowHeight - 50) {
            section.classList.add('visible');
        } else {
            section.classList.remove('visible');
        }
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const smoothScrollLinks = document.querySelectorAll('.smooth-scroll');

    smoothScrollLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            const offset = window.innerHeight / 2 - targetElement.offsetHeight / 2;

            window.scrollTo({
                top: targetElement.offsetTop - offset,
                behavior: 'smooth'
            });
        });
    });
});



// Add this script to the bottom of your HTML file, just before the closing </body> tag
document.addEventListener('DOMContentLoaded', function () {
  const nav = document.querySelector('nav');
  let lastScrollTop = 0;

  window.addEventListener('scroll', function () {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {
      // Scrolling down
      nav.classList.add('hidden');
      nav.classList.remove('visible');
    } else {
      // Scrolling up
      nav.classList.add('visible');
      nav.classList.remove('hidden');
    }
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
  }, false);

  // Show navbar when hovering at the top of the screen
  window.addEventListener('mousemove', function (e) {
    if (e.clientY < 50) {
      nav.classList.add('visible');
      nav.classList.remove('hidden');
    }
  });
});







    document.querySelectorAll('.gallery-item').forEach(item => {
        item.addEventListener('click', function() {
            window.location.href = this.getAttribute('onclick').replace('window.location.href=', '').replace(/'/g, '');
        });
    });







let slideIndex = 0;
let slideInterval;

showSlides();

function plusSlides(n) {
    clearInterval(slideInterval);  // Clear existing interval
    slideIndex += n;
    showSlides();
    slideInterval = setInterval(() => plusSlides(1), 6000);  // Restart interval
}

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    if (slideIndex >= slides.length) { slideIndex = 0 }
    if (slideIndex < 0) { slideIndex = slides.length - 1 }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex].style.display = "block";
}

// Set interval to automatically change slides every 10 seconds
slideInterval = setInterval(() => plusSlides(1), 6000);








