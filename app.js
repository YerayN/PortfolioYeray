document.addEventListener('DOMContentLoaded', function() {
  
  // ── SERVICE CATEGORY FILTER ──
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

  // ── TELEGRAM FORM SUBMISSION ──
  const contactForm = document.getElementById('telegramForm');

  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();

      const token = "8167286088:AAGXJe2CI-H7_4yjexrJHjJMXjFqLk1NFXc";
      const chatId = "1198285640";

      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const subject = document.getElementById('subject').value;
      const message = document.getElementById('message').value;

      // Usamos HTML en lugar de Markdown para evitar el error 400
      const text = `<b>🚀 Nuevo mensaje de la Web</b>\n\n` +
                  `<b>👤 Nombre:</b> ${name}\n` +
                  `<b>📧 Email:</b> ${email}\n` +
                  `<b>📋 Asunto:</b> ${subject}\n` +
                  `<b>💬 Mensaje:</b>\n${message}`;

      const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(text)}&parse_mode=HTML`;

      fetch(url)
        .then(response => {
          if (response.ok) {
            alert('¡Mensaje enviado con éxito! Te responderé muy pronto.');
            contactForm.reset();
          } else {
            // Si falla, mostramos el error en consola para debuguear
            response.json().then(data => console.error("Error Telegram:", data));
            alert('Hubo un error al enviar. Por favor, inténtalo por WhatsApp.');
          }
        })
        .catch(error => {
          console.error("Error conexión:", error);
          alert('Error de conexión. Inténtalo de nuevo.');
        });
    });
  }
});