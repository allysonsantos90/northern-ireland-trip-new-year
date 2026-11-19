const carousel = document.querySelector('#carousel');
const cards = [...document.querySelectorAll('.place-card')];
const dots = document.querySelector('#dots');
let current = 0;

cards.forEach((card, index) => {
  const dot = document.createElement('button');
  dot.type = 'button';
  dot.setAttribute('aria-label', `Ir para destino ${index + 1}`);
  dot.addEventListener('click', () => goTo(index));
  dots.appendChild(dot);
});
const dotButtons = [...dots.children];
function updateDots() {
  const cardWidth = cards[0].getBoundingClientRect().width + 21;
  current = Math.max(0, Math.min(cards.length - 1, Math.round(carousel.scrollLeft / cardWidth)));
  dotButtons.forEach((dot, index) => dot.classList.toggle('active', index === current));
}
function goTo(index) {
  cards[index].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
  current = index;
  updateDots();
}
document.querySelector('#prev').addEventListener('click', () => goTo(Math.max(0, current - 1)));
document.querySelector('#next').addEventListener('click', () => goTo(Math.min(cards.length - 1, current + 1)));
carousel.addEventListener('scroll', () => window.requestAnimationFrame(updateDots));
carousel.addEventListener('keydown', event => {
  if (event.key === 'ArrowRight') goTo(Math.min(cards.length - 1, current + 1));
  if (event.key === 'ArrowLeft') goTo(Math.max(0, current - 1));
});
updateDots();

const copyText = `NOSSA VIAGEM – IRLANDA DO NORTE\n30/12/2026 a 02/01/2027\n\n30/12: Limerick → Belfast, check-in e passeio pelo centro.\n31/12: Carrick-a-Rede → Giant's Causeway → Dunluce Castle → Mussenden Temple. À noite, Réveillon com o grupo.\n01/01: Dia tranquilo, com opção de Bangor Marina e Ballyholme Beach.\n02/01: Check-out e retorno para Limerick.\n\nPasseio costeiro sujeito ao clima, horários especiais de feriado e disponibilidade de ingressos.`;
document.querySelector('#copyPlan').addEventListener('click', async () => {
  const status = document.querySelector('#copyStatus');
  try {
    await navigator.clipboard.writeText(copyText);
    status.textContent = 'Resumo copiado! Agora é só colar no WhatsApp.';
  } catch {
    status.textContent = 'Não foi possível copiar automaticamente neste navegador.';
  }
});
