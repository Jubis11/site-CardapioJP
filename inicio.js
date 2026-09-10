// Lista de pratos em destaque
const destaquesData = [
  {
    nome: "Porção de Frango",
    descricao: "Iscas de frango empanadas com molho da casa.",
    preco: "R$ 48,90",
    imagem: "https://images.unsplash.com/photo-1562967914-608f82629710?w=500&auto=format&fit=crop"
  },
  {
    nome: "X-Burguer Artesanal",
    descricao: "Pão brioche, 180g de carne, queijo, bacon e molho especial.",
    preco: "R$ 34,90",
    imagem: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&auto=format&fit=crop"
  },
  {
    nome: "Pastel na Chapa",
    descricao: "Pastel crocante feito na chapa com recheio especial.",
    preco: "R$ 29,90",
    imagem: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?w=500&auto=format&fit=crop"
  }
];

// Função para renderizar os destaques na tela
function renderizarDestaques() {
  const container = document.getElementById("destaques-grid");
  if (!container) return;

  container.innerHTML = "";

  destaquesData.forEach(item => {
    const col = document.createElement("div");
    col.className = "col-md-4";

    col.innerHTML = `
      <div class="card-item-prato">
        <img src="${item.imagem}" alt="${item.nome}">
        <h3 class="prato-title">${item.nome}</h3>
        <p class="prato-desc">${item.descricao}</p>
        <p class="prato-preco">${item.preco}</p>
      </div>
    `;

    container.appendChild(col);
  });
}

// Executa assim que a página carregar
document.addEventListener("DOMContentLoaded", renderizarDestaques);