// ── SERVICE CATEGORY FILTER ──
document.addEventListener('DOMContentLoaded', function() {
  const pills = document.querySelectorAll('.cat-pill');
  const categories = document.querySelectorAll('.srv-category');

  function showCategory(target) {
    categories.forEach(c => {
      c.style.display = c.dataset.cat === target ? 'block' : 'none';
    });
    pills.forEach(p => p.classList.toggle('active', p.dataset.cat === target));
  }

  if (pills.length) {
    showCategory(pills[0].dataset.cat);
    pills.forEach(pill => pill.addEventListener('click', () => showCategory(pill.dataset.cat)));
  }

  // ── MOBILE HAMBURGER ──
  const hamburger = document.querySelector('.nav-hamburger');
  const mobileMenu = document.querySelector('.mobile-menu');
  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => mobileMenu.classList.toggle('open'));
  }
});
