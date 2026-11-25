const menuButton = document.querySelector('.menu-toggle');
const mainNav = document.querySelector('#main-nav');

menuButton?.addEventListener('click', () => {
  const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!isOpen));
  menuButton.setAttribute('aria-label', isOpen ? 'Abrir menu' : 'Fechar menu');
  mainNav.classList.toggle('open', !isOpen);
});

mainNav?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    mainNav.classList.remove('open');
    menuButton?.setAttribute('aria-expanded', 'false');
    menuButton?.setAttribute('aria-label', 'Abrir menu');
  });
});

document.querySelectorAll('.filter-button').forEach((button) => {
  button.addEventListener('click', () => {
    const filter = button.dataset.filter;
    document.querySelectorAll('.filter-button').forEach((item) => {
      const selected = item === button;
      item.classList.toggle('active', selected);
      item.setAttribute('aria-pressed', String(selected));
    });
    document.querySelectorAll('.pet-card').forEach((card) => {
      card.hidden = filter !== 'todos' && card.dataset.kind !== filter;
    });
  });
});

document.querySelector('#report-form')?.addEventListener('submit', (event) => {
  event.preventDefault();
  const feedback = document.querySelector('.form-feedback');
  feedback.hidden = false;
  feedback.textContent = 'Esta é uma prévia do projeto: nenhum dado foi enviado ou armazenado. Para uma situação real, procure os serviços públicos ou autoridades competentes da sua região.';
});
