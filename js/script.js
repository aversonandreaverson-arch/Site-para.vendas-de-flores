function comprarWhatsApp(produto, preco) {
    const numero = "948472815"; 
    const mensagem = `Olá, quero comprar o produto: ${produto} no valor de Kz ${preco}`;
    const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;
    window.open(url, "_blank");
}

function falarwhatsApp() {
    const numero = "948472815";
    const mensagem = "Olá, quero saber mais sobre os produtos da PalmiraArtFest!";
    const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;
    window.open(url, "_blank");
}

// animação de fade-in dos cards ao scroll
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
