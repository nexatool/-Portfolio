// ===== TYPEWRITER =====
const roles = ["Full Stack Software Engineer", "SaaS Architect", "AI Integration Expert", "Product Builder"];
let roleIndex = 0, charIndex = 0, typing = true;
const twEl = document.getElementById('typewriter');

function typeLoop() {
  const current = roles[roleIndex];
  if (typing) {
    charIndex++;
    twEl.textContent = current.slice(0, charIndex);
    if (charIndex >= current.length) {
      typing = false;
      setTimeout(typeLoop, 1800);
      return;
    }
    setTimeout(typeLoop, 55);
  } else {
    charIndex--;
    twEl.textContent = current.slice(0, charIndex);
    if (charIndex <= 0) {
      typing = true;
      roleIndex = (roleIndex + 1) % roles.length;
      setTimeout(typeLoop, 300);
      return;
    }
    setTimeout(typeLoop, 28);
  }
}
typeLoop();

// ===== MOBILE MENU =====
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
hamburger.addEventListener('click', () => navLinks.classList.toggle('open'));
navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => navLinks.classList.remove('open')));

// ===== NAVBAR SCROLL EFFECT =====
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.style.boxShadow = window.scrollY > 20 ? '0 8px 30px rgba(0,0,0,0.3)' : 'none';
});

// ===== CONTACT FORM (front-end only — connect to a real backend/service to receive messages) =====
const contactForm = document.getElementById('contactForm');
const formSuccess = document.getElementById('formSuccess');
contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  formSuccess.classList.add('show');
  contactForm.reset();
  setTimeout(() => formSuccess.classList.remove('show'), 6000);
});



// ===== SCROLL REVEAL =====
const revealEls = document.querySelectorAll('.skill-card, .project-card, .founder-card, .why-card, .service-card');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

revealEls.forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(24px)';
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(el);
});

// ===== FAQ TOGGLE =====
function toggleFaq(btn) {
  const answer = btn.nextElementSibling;
  const isOpen = answer.classList.contains('open');
  // Close all
  document.querySelectorAll('.faq-a').forEach(a => a.classList.remove('open'));
  document.querySelectorAll('.faq-q').forEach(b => b.classList.remove('open'));
  // Open clicked if was closed
  if (!isOpen) {
    answer.classList.add('open');
    btn.classList.add('open');
  }
}

// ===== SCROLL REVEAL EXTENDED =====
const extraReveal = document.querySelectorAll('.testimonial-card, .pricing-card, .process-step, .faq-item');
extraReveal.forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(24px)';
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(el);
});
