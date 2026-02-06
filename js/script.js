// Função para comprar via WhatsApp
function comprarWhatsApp(botao) {
  // Pega o card mais próximo do botão clicado
  const card = botao.closest('.card');

  // Pega informações do card
  const nome = card.querySelector('h3').innerText;
  const preco = card.querySelector('.preco').innerText;
  const img = card.querySelector('img').src;

  // Número de WhatsApp
  const numero = "948472815";

  // Mensagem personalizada
  const mensagem = `
Olá, quero comprar este produto:

 Produto: ${nome}
 Preço: ${preco}
 
`;

  // Abre o WhatsApp com a mensagem
  const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;
  window.open(url, "_blank");
}

// Função para falar com o WhatsApp sem produto
function falarWhatsApp() {
  const numero = "948472815";
  const mensagem = "Olá, quero saber mais sobre os produtos da PalmiraArtFest!";
  const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;
  window.open(url, "_blank");
}

// Animação de fade-in dos cards ao scroll
const cards = document.querySelectorAll('.animate-card');
const fadeOptions = { threshold: 0.3 };
const fadeObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('fade-in');
      observer.unobserve(entry.target);
    }
  });
}, fadeOptions);

cards.forEach(card => fadeObserver.observe(card));
