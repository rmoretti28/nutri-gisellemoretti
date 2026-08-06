const toggle = document.getElementById('menuToggle');
  const links = document.getElementById('navLinks');
  toggle.addEventListener('click', () => {
    const open = links.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open);
    toggle.textContent = open ? '✕' : '☰';
  });
  links.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    links.classList.remove('open');
    toggle.setAttribute('aria-expanded', false);
    toggle.textContent = '☰';
  }));

  const revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('is-visible'); io.unobserve(e.target); } });
    }, { threshold: 0.12 });
    revealEls.forEach(el => io.observe(el));
  } else {
    revealEls.forEach(el => el.classList.add('is-visible'));
  }

  window.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => document.getElementById('plateSvg').classList.add('drawn'), 200);
  });

  document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const nome = this.nome.value.trim();
    alert('Obrigado, ' + (nome || 'visitante') + '! Este formulário ainda não está conectado a um serviço de envio — configure Formspree, EmailJS ou similar para receber mensagens de verdade.');
  });
