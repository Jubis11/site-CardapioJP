// Lista centralizada de todos os itens do cardápio
const itensCardapio = [
  // --- PORÇÕES ---
  {
    categoria: 'porcoes',
    nome: 'Batata Frita',
    desc: 'Sequinha e crocante',
    preco: 'R$ 24,90',
    img: 'https://via.placeholder.com/350x200?text=Batata+Frita'
  },
  {
    categoria: 'porcoes',
    nome: 'Calabresa Acebolada',
    desc: 'Calabresa grelhada com cebola e acompanhamento',
    preco: 'R$ 38,90',
    img: 'https://via.placeholder.com/350x200?text=Calabresa+Acebolada'
  },
  {
    categoria: 'porcoes',
    nome: 'Frango a Passarinho',
    desc: 'Acompanha alho frito e limão',
    preco: 'R$ 42,90',
    img: 'https://via.placeholder.com/350x200?text=Frango+a+Passarinho'
  },

  // --- SANDUÍCHES ---
  {
    categoria: 'sanduiches',
    nome: 'Americano',
    desc: 'Presunto, queijo, ovo, salada e maionese',
    preco: 'R$ 25,00',
    img: 'https://via.placeholder.com/350x200?text=Americano'
  },
  {
    categoria: 'sanduiches',
    nome: 'Bauru',
    desc: 'Presunto, queijo e tomate',
    preco: 'R$ 16,80',
    img: 'https://via.placeholder.com/350x200?text=Bauru'
  },
  {
    categoria: 'sanduiches',
    nome: 'Hambúrguer',
    desc: 'Hambúrguer tradicional',
    preco: 'R$ 16,30',
    img: 'https://via.placeholder.com/350x200?text=Hamb%C3%Barguer'
  },
  {
    categoria: 'sanduiches',
    nome: 'Misto',
    desc: 'Presunto e queijo',
    preco: 'R$ 15,20',
    img: 'https://via.placeholder.com/350x200?text=Misto'
  },
  {
    categoria: 'sanduiches',
    nome: 'Queijo',
    desc: 'Quente ou frio',
    preco: 'R$ 19,50',
    img: 'https://via.placeholder.com/350x200?text=Queijo'
  },
  {
    categoria: 'sanduiches',
    nome: 'X-Bacon',
    desc: 'Hambúrguer, queijo, bacon e maionese',
    preco: 'R$ 24,80',
    img: 'https://via.placeholder.com/350x200?text=X-Bacon'
  },
  {
    categoria: 'sanduiches',
    nome: 'X-Burger',
    desc: 'Hambúrguer e queijo',
    preco: 'R$ 21,50',
    img: 'https://via.placeholder.com/350x200?text=X-Burger'
  },
  {
    categoria: 'sanduiches',
    nome: 'X-Egg',
    desc: 'Hambúrguer, queijo, ovo e maionese',
    preco: 'R$ 24,80',
    img: 'https://via.placeholder.com/350x200?text=X-Egg'
  },
  {
    categoria: 'sanduiches',
    nome: 'X-Salada',
    desc: 'Hambúrguer, queijo, salada e maionese',
    preco: 'R$ 24,80',
    img: 'https://via.placeholder.com/350x200?text=X-Salada'
  },
  {
    categoria: 'sanduiches',
    nome: 'X-Tudo',
    desc: 'Hambúrguer, queijo, presunto, bacon, ovo, salada e maionese',
    preco: 'R$ 32,40',
    img: 'https://via.placeholder.com/350x200?text=X-Tudo'
  },

  // --- PRATOS ---
  {
    categoria: 'pratos',
    nome: 'Parmegiana',
    desc: 'Bases: Arroz, Feijão ou Macarrão (até 3) + Salada ou Fritas',
    preco: 'Consulte o valor',
    img: 'https://via.placeholder.com/350x200?text=Parmegiana'
  },
  {
    categoria: 'pratos',
    nome: 'Contra Filé',
    desc: 'Bases: Arroz, Feijão ou Macarrão (até 3) + Salada ou Fritas',
    preco: 'Consulte o valor',
    img: 'https://via.placeholder.com/350x200?text=Contra+File'
  },
  {
    categoria: 'pratos',
    nome: 'Milanesas',
    desc: 'Bases: Arroz, Feijão ou Macarrão (até 3) + Salada ou Fritas',
    preco: 'Consulte o valor',
    img: 'https://via.placeholder.com/350x200?text=Milanesa'
  },
  {
    categoria: 'pratos',
    nome: 'Omelete',
    desc: 'Bases: Arroz, Feijão ou Macarrão (até 3) + Salada ou Fritas',
    preco: 'Consulte o valor',
    img: 'https://via.placeholder.com/350x200?text=Omelete'
  },
  {
    categoria: 'pratos',
    nome: 'Picadinho',
    desc: 'Bases: Arroz, Feijão ou Macarrão (até 3) + Salada ou Fritas',
    preco: 'Consulte o valor',
    img: 'https://via.placeholder.com/350x200?text=Picadinho'
  },
  {
    categoria: 'pratos',
    nome: 'Calabresa Defumada',
    desc: 'Bases: Arroz, Feijão ou Macarrão (até 3) + Salada ou Fritas',
    preco: 'Consulte o valor',
    img: 'https://via.placeholder.com/350x200?text=Calabresa+Defumada'
  },
  {
    categoria: 'pratos',
    nome: 'Almôndegas',
    desc: 'Bases: Arroz, Feijão ou Macarrão (até 3) + Salada ou Fritas (*Confira a disponibilidade)',
    preco: 'Consulte o valor',
    img: 'https://via.placeholder.com/350x200?text=Almondegas'
  },
  {
    categoria: 'pratos',
    nome: 'Bisteca',
    desc: 'Bases: Arroz, Feijão ou Macarrão (até 3) + Salada ou Fritas',
    preco: 'Consulte o valor',
    img: 'https://via.placeholder.com/350x200?text=Bisteca'
  },
  {
    categoria: 'pratos',
    nome: 'Filé de Frango',
    desc: 'Bases: Arroz, Feijão ou Macarrão (até 3) + Salada ou Fritas',
    preco: 'Consulte o valor',
    img: 'https://via.placeholder.com/350x200?text=File+de+Frango'
  },

  // --- BEBIDAS ---
  {
    categoria: 'bebidas',
    nome: 'Refrigerante Lata',
    desc: 'Lata 350ml gelada',
    preco: 'R$ 6,00',
    img: 'https://via.placeholder.com/350x200?text=Refrigerante'
  }
];

// Lógica de Renderização e Filtro
document.addEventListener('DOMContentLoaded', () => {
  const gridCardapio = document.getElementById('grid-cardapio');
  const botoesCategoria = document.querySelectorAll('.btn-categoria');

  function renderizarCardapio(categoriaAtiva) {
    gridCardapio.innerHTML = '';

    const itensFiltrados = itensCardapio.filter(item => item.categoria === categoriaAtiva);

    if (itensFiltrados.length === 0) {
      gridCardapio.innerHTML = '<p class="text-center text-muted my-5">Nenhum item encontrado nesta categoria.</p>';
      return;
    }

    itensFiltrados.forEach(item => {
      const cardHTML = `
        <div class="col-12 col-md-6 col-lg-4">
          <div class="card card-item border-0 p-3 h-100">
            <img src="${item.img}" class="rounded mb-3" alt="${item.nome}">
            <div>
              <h5 class="fw-bold mb-1 fs-6">${item.nome}</h5>
              <p class="text-muted small mb-2">${item.desc}</p>
              <p class="fw-bold mb-0 fs-6" style="color: var(--cor-barra);">${item.preco}</p>
            </div>
          </div>
        </div>
      `;
      gridCardapio.innerHTML += cardHTML;
    });
  }

  botoesCategoria.forEach(botao => {
    botao.addEventListener('click', () => {
      botoesCategoria.forEach(btn => btn.classList.remove('active'));
      botao.classList.add('active');

      const categoria = botao.getAttribute('data-categoria');
      renderizarCardapio(categoria);
    });
  });

  // Exibe a categoria inicial
  renderizarCardapio('porcoes');
});