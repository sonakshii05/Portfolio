// ==================== HAMBURGER MENU ====================
const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobile-menu");
const closeMenu = document.getElementById("close-menu");

// Open mobile menu
hamburger.addEventListener("click", () => mobileMenu.classList.add("active"));

// Close mobile menu
closeMenu.addEventListener("click", () => mobileMenu.classList.remove("active"));

// Close mobile menu when a link is clicked
document.querySelectorAll(".mobile-menu a").forEach(link => {
  link.addEventListener("click", () => mobileMenu.classList.remove("active"));
});

// ==================== SMOOTH SCROLL FOR ALL NAV LINKS ====================
const allLinks = document.querySelectorAll('.links a, .mobile-menu a');

allLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();

    // Make ID lowercase for case-insensitive matching
    const targetId = this.getAttribute('href').substring(1).toLowerCase();
    const targetSection = Array.from(document.querySelectorAll('section, div[id]'))
      .find(sec => sec.id.toLowerCase() === targetId);

    if (targetSection) {
      const headerHeight = document.querySelector('.header').offsetHeight;
      const elementPosition = targetSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }

    // Close mobile menu after clicking link
    if (mobileMenu.classList.contains('active')) {
      mobileMenu.classList.remove('active');
    }
  });
});

// ==================== SKILL BARS ANIMATION ====================
const fills = document.querySelectorAll('.fill');

function animateBars() {
  fills.forEach(fill => {
    const top = fill.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    if(top < windowHeight - 50) fill.classList.add('animate');
  });
}

window.addEventListener('scroll', animateBars);
animateBars();

// Animate timeline items on scroll
const timelineItems = document.querySelectorAll('.timeline-item');

function animateTimeline() {
  const windowHeight = window.innerHeight;
  timelineItems.forEach(item => {
    const top = item.getBoundingClientRect().top;
    if (top < windowHeight - 50) {
      item.classList.add('active');
    }
  });
}

window.addEventListener('scroll', animateTimeline);
animateTimeline(); // animate visible items on page load

// Animate experience items on scroll
const experienceItems = document.querySelectorAll('.experience-item');

function animateExperience() {
  const windowHeight = window.innerHeight;
  experienceItems.forEach(item => {
    const top = item.getBoundingClientRect().top;
    if (top < windowHeight - 50) {
      item.classList.add('active');
    }
  });
}

window.addEventListener('scroll', animateExperience);
animateExperience(); // animate visible items on page load

// ======== Contact Animation ========
const contactCards = document.querySelectorAll('.contact-card');

function animateContacts() {
  const windowHeight = window.innerHeight;

  contactCards.forEach(card => {
    const top = card.getBoundingClientRect().top;
    if (top < windowHeight - 80) {
      card.classList.add('active');
    }
  });
}

window.addEventListener('scroll', animateContacts);
animateContacts();

