/* ═══════════════════════════════════════════
   EverTurn Games — Site Scripts
   ═══════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {

  /* ── Star Field ── */
  const field = document.getElementById('starField');
  if (field) {
    const count = Math.min(120, Math.floor(window.innerWidth / 12));
    for (let i = 0; i < count; i++) {
      const star = document.createElement('div');
      star.className = 'star';
      star.style.left   = Math.random() * 100 + '%';
      star.style.top    = Math.random() * 100 + '%';
      star.style.width   = (Math.random() * 2 + 1) + 'px';
      star.style.height  = star.style.width;
      star.style.setProperty('--dur',   (Math.random() * 3 + 2) + 's');
      star.style.setProperty('--min-o', (Math.random() * 0.15 + 0.05).toFixed(2));
      star.style.setProperty('--max-o', (Math.random() * 0.5 + 0.4).toFixed(2));
      star.style.animationDelay = (Math.random() * 4) + 's';
      field.appendChild(star);
    }
  }

  /* ── Nav scroll effect ── */
  const nav = document.getElementById('nav');
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 40);
  }, { passive: true });

  /* ── Mobile nav toggle ── */
  const toggle = document.getElementById('navToggle');
  const links  = document.getElementById('navLinks');
  toggle.addEventListener('click', () => {
    links.classList.toggle('open');
  });
  // Close on link click
  links.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => links.classList.remove('open'));
  });

  /* ── Scroll reveal ── */
  const reveals = document.querySelectorAll(
    '.section-title, .section-subtitle, .about-text, .value-card, .game-card, .contact-form'
  );
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  reveals.forEach(el => observer.observe(el));
});
