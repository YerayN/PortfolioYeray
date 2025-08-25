// v12-rev: theme toggle, mobile menu stable, card tilt/glow
const html = document.documentElement;
const toggle = document.getElementById('themeToggle');
const yearEl = document.getElementById('year');
const navToggle = document.getElementById('navToggle');
const mobileMenu = document.getElementById('mobileMenu');

// Theme persistence
try { const saved = localStorage.getItem('theme'); if (saved) html.setAttribute('data-theme', saved); } catch {}
toggle?.addEventListener('click', () => {
  const theme = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  html.setAttribute('data-theme', theme);
  try { localStorage.setItem('theme', theme); } catch {}
});
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Mobile menu open/close
function openMenu(){ mobileMenu?.classList.remove('hidden'); navToggle?.setAttribute('aria-expanded','true'); }
function closeMenu(){ mobileMenu?.classList.add('hidden'); navToggle?.setAttribute('aria-expanded','false'); }
navToggle?.addEventListener('click', () => {
  if (!mobileMenu) return;
  const isOpen = !mobileMenu.classList.contains('hidden');
  (isOpen ? closeMenu : openMenu)();
});
document.querySelectorAll('.mobile-link').forEach(a => a.addEventListener('click', () => closeMenu()));
window.addEventListener('resize', () => { if (window.innerWidth > 900) closeMenu(); });
document.addEventListener('scroll', () => { if (window.innerWidth <= 900) closeMenu(); }, { passive: true });

// Glow + Tilt effect for cards
const cards = document.querySelectorAll('.card');
cards.forEach(card => {
  let raf = 0; const maxTilt = 8;
  function update(e){
    const r = card.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width, py = (e.clientY - r.top) / r.height;
    const rx = (py - .5) * -2 * maxTilt, ry = (px - .5) * 2 * maxTilt;
    card.style.setProperty('--mx', (px*100)+'%'); card.style.setProperty('--my', (py*100)+'%');
    card.style.transform = `translateY(-6px) rotateX(${rx}deg) rotateY(${ry}deg)`;
  }
  function reset(){ card.style.transform = 'translateY(0) rotateX(0) rotateY(0)'; }
  card.addEventListener('pointerenter', e => { cancelAnimationFrame(raf); update(e); });
  card.addEventListener('pointermove', e => { cancelAnimationFrame(raf); raf = requestAnimationFrame(() => update(e)); });
  card.addEventListener('pointerleave', () => { cancelAnimationFrame(raf); reset(); });
});

// Copiar al portapapeles (email/teléfono)
document.querySelectorAll('.chip-btn[data-copy]').forEach(btn => {
  btn.addEventListener('click', async () => {
    const value = btn.getAttribute('data-copy');
    try {
      await navigator.clipboard.writeText(value);
      const old = btn.textContent;
      btn.textContent = 'Copiado ✓';
      setTimeout(() => btn.textContent = old, 1200);
    } catch {
      // Fallback simple: seleccionar texto dentro del enlace hermano
      const link = btn.parentElement.querySelector('.chip-link span');
      if (!link) return;
      const r = document.createRange(); r.selectNode(link);
      const sel = window.getSelection(); sel.removeAllRanges(); sel.addRange(r);
      document.execCommand('copy'); sel.removeAllRanges();
      const old = btn.textContent; btn.textContent = 'Copiado ✓';
      setTimeout(() => btn.textContent = old, 1200);
    }
  });
});

// Envío real con Formspree
const form = document.getElementById('contactForm');
const sendBtn = document.getElementById('sendBtn');
const statusEl = document.getElementById('formStatus');

if (form) {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    statusEl.textContent = 'Enviando...';
    sendBtn.disabled = true;

    const data = new FormData(form);
    data.append('_subject', 'Nuevo mensaje desde el portfolio');
    data.append('page', window.location.href);

    try {
      const res = await fetch(form.action, {
        method: 'POST',
        body: data,
        headers: { 'Accept': 'application/json' }
      });

      if (res.ok) {
        form.reset();
        statusEl.textContent = '¡Gracias! Te responderé en cuanto pueda.';
      } else {
        const err = await res.json().catch(() => null);
        statusEl.textContent =
          (err && err.errors && err.errors.map(e => e.message).join(', '))
          || 'Ups, no se pudo enviar. Intenta de nuevo en un momento.';
      }
    } catch (_) {
      statusEl.textContent = 'Error de conexión. Revisa tu red y vuelve a intentar.';
    } finally {
      sendBtn.disabled = false;
    }
  });
}

