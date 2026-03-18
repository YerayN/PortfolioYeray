document.addEventListener('DOMContentLoaded', () => {

  /* ──────────────────────────────────
     TYPEWRITER — sin layout shift
     La línea ya tiene min-height reservado en CSS,
     así que cambiar el texto no mueve nada.
  ────────────────────────────────── */
  const phrases = [
    "software eficiente.",
    "apps que escalan.",
    "código con propósito.",
    "soluciones reales."
  ];
  const el = document.getElementById('typewriter');
  let phraseIdx = 0, charIdx = 0, deleting = false, paused = false;

  function type() {
    if (paused) return;
    const current = phrases[phraseIdx];

    if (!deleting) {
      charIdx++;
      el.textContent = current.slice(0, charIdx);
      if (charIdx === current.length) {
        paused = true;
        setTimeout(() => { paused = false; deleting = true; type(); }, 2200);
        return;
      }
      setTimeout(type, 75);
    } else {
      charIdx--;
      el.textContent = current.slice(0, charIdx);
      if (charIdx === 0) {
        deleting = false;
        phraseIdx = (phraseIdx + 1) % phrases.length;
        setTimeout(type, 400);
        return;
      }
      setTimeout(type, 38);
    }
  }
  if (el) { el.textContent = ''; type(); }


  /* ──────────────────────────────────
     HEADER SCROLL
  ────────────────────────────────── */
  const header = document.querySelector('.site-header');
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 40);
  }, { passive: true });


  /* ──────────────────────────────────
     MENÚ MÓVIL
  ────────────────────────────────── */
  const menuBtn   = document.getElementById('menuBtn');
  const mobileNav = document.getElementById('mobileNav');

  menuBtn?.addEventListener('click', () => {
    const open = mobileNav.classList.toggle('open');
    menuBtn.setAttribute('aria-expanded', String(open));
  });

  document.querySelectorAll('.mobile-link').forEach(link => {
    link.addEventListener('click', () => {
      mobileNav.classList.remove('open');
      menuBtn.setAttribute('aria-expanded', 'false');
    });
  });


  /* ──────────────────────────────────
     REVEAL ON SCROLL (sin stagger agresivo)
  ────────────────────────────────── */
  const revealEls = document.querySelectorAll('[data-reveal]');
  const obs = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      // Stagger suave solo entre siblings directos
      const siblings = [...entry.target.parentElement.children].filter(
        el => el.hasAttribute('data-reveal')
      );
      const idx = siblings.indexOf(entry.target);
      entry.target.style.transitionDelay = `${idx * 70}ms`;
      entry.target.classList.add('visible');
      obs.unobserve(entry.target);
    });
  }, { threshold: 0.1 });

  revealEls.forEach(el => obs.observe(el));


  /* ──────────────────────────────────
     BOTÓN VOLVER ARRIBA — scroll real
  ────────────────────────────────── */
  const backTop = document.getElementById('backTop');
  backTop?.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });


  /* ──────────────────────────────────
     FORMULARIO ASYNC
  ────────────────────────────────── */
  const form      = document.getElementById('contactForm');
  const feedback  = document.getElementById('formFeedback');
  const submitBtn = document.getElementById('submitBtn');

  form?.addEventListener('submit', async (e) => {
    e.preventDefault();
    submitBtn.disabled = true;
    submitBtn.textContent = 'enviando...';
    feedback.className = 'form-feedback';
    feedback.textContent = '';

    try {
      const res = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { 'Accept': 'application/json' }
      });
      if (res.ok) {
        feedback.className = 'form-feedback success';
        feedback.textContent = '> mensaje enviado. respondo en menos de 24h.';
        form.reset();
      } else throw new Error();
    } catch {
      feedback.className = 'form-feedback error';
      feedback.textContent = '> error. escríbeme a ny93yeray@gmail.com';
    }

    submitBtn.disabled = false;
    submitBtn.innerHTML = 'enviar_propuesta() <span class="arrow">→</span>';
  });

});
