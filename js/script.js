

/* function comprarWhatsApp(produto, preco) {
  const numero = "948472815"; 
  const mensagem = `olá, quero comprar o produto: ${produto}, que está no valor de ${preco}`;
  window.open(`https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`);
}
 */


function comprarWhatsApp(produto, preco) {
    const numero = "948472815"; // número do WhatsApp
    const mensagem = `Olá, quero comprar o produto: ${produto} no valor de Kz ${preco}`;
    const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;
    window.open(url, "_blank"); // abre em nova aba
}


function falarwhatsApp() {
    const numero = "948472815";
    const mensagem = "Olá, quero saber mais sobre os produtos da DilciaShop!";
    const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;
    window.open(url, "_blank");
}
