const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const mobileNav = document.getElementById('mobileNav');
const backdrop = document.getElementById('navBackdrop');

function openMenu() {
  hamburger.classList.add('open');
  mobileNav.classList.add('open');
  backdrop.classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeMenu() {
  hamburger.classList.remove('open');
  mobileNav.classList.remove('open');
  backdrop.classList.remove('open');
  document.body.style.overflow = '';
}

hamburger.addEventListener('click', () => {
  mobileNav.classList.contains('open') ? closeMenu() : openMenu();
});
backdrop.addEventListener('click', closeMenu);
mobileNav.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeMenu(); });

window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 60);
  document.getElementById('scrollTop').classList.toggle('visible', window.scrollY > 300);
});
document.getElementById('scrollTop').addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver(
  entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
  { threshold: 0.08 }
);
reveals.forEach(r => observer.observe(r));
