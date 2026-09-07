const loader = document.getElementById('loader');
const year = document.getElementById('year');
year.textContent = new Date().getFullYear();

window.addEventListener('load', () => {
  setTimeout(() => loader.classList.add('hide'), 750);
});

document.querySelectorAll('[data-scroll]').forEach(el => {
  el.addEventListener('click', () => {
    const target = document.querySelector(el.dataset.scroll);
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  });
});

const reveals = document.querySelectorAll('.reveal:not(.active)');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.14 });
reveals.forEach(el => observer.observe(el));

const glow = document.querySelector('.cursor-glow');
window.addEventListener('pointermove', e => {
  glow.style.left = `${e.clientX}px`;
  glow.style.top = `${e.clientY}px`;
});
window.addEventListener('pointerleave', () => glow.style.opacity = '0');
window.addEventListener('pointerenter', () => glow.style.opacity = '1');

const heroArt = document.querySelector('.hero-art');
window.addEventListener('pointermove', e => {
  if (window.innerWidth < 900) return;
  const x = (e.clientX / window.innerWidth - 0.5) * 10;
  const y = (e.clientY / window.innerHeight - 0.5) * 8;
  heroArt.style.transform = `translate(${x}px, calc(-49% + ${y}px))`;
});

document.querySelectorAll('.cta.primary').forEach(btn => {
  btn.addEventListener('pointerdown', () => {
    btn.style.transform = 'scale(.97)';
    setTimeout(() => btn.style.transform = '', 160);
  });
});
