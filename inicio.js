// Dados dos pratos em destaque
const destaquesData = [
  {
    nome: 'Batata Frita',
    descricao: 'Sequinha e crocante',
    preco: 'consulte o valor',
    imagem: 'img/batata-frita.jpg'
  },
  {
     nome: 'Americano',
    descricao: 'Presunto, queijo, ovo, salada e maionese',
    preco: 'R$ 25,00',
    imagem: 'img/americano.webp'
  },
  {
    nome: 'Contra Filé',
    descricao: 'Acompanha bases: Arroz, Feijão ou Macarrão (até 3 opções) + Salada ou Fritas',
    preco: 'R$ 32,00',
    imagem: 'img/marmitex-de-contra-file.jpg'
  },
];

// Função para injetar os pratos no HTML
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
        <div>
          <h3 class="prato-title">${item.nome}</h3>
          <p class="prato-desc">${item.descricao}</p>
        </div>
        <p class="prato-preco">${item.preco}</p>
      </div>
    `;

    container.appendChild(col);
  });
}

// Carrega os elementos após o carregamento da página
document.addEventListener("DOMContentLoaded", renderizarDestaques);