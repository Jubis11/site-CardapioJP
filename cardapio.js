// Lista centralizada de todos os itens do cardápio
const itensCardapio = [
// --- PORÇÕES ---
  {
    categoria: 'porcoes',
    nome: 'Batata Frita',
    desc: 'Sequinha e crocante',
    preco: 'consulte o valor',
    img: 'img/batata-frita.jpg'
  },
  {
    categoria: 'porcoes',
    nome: 'Calabresa Acebolada',
    desc: 'Calabresa grelhada com cebola e acompanhamento',
    preco: 'Consulte o valor',
    img: 'img/calabresa.webp'
  },
  {
    categoria: 'porcoes',
    nome: 'Frango a Passarinho',
    desc: 'Acompanha alho frito e limão',
    preco: 'Consulte o valor',
    img: 'img/frango.avif'
  },
  {
    categoria: 'porcoes',
    nome: 'Empanadinho Família JP',
    desc: 'Empanado de frango especial servido com geleia de abacaxi apimentada',
    preco: 'Consulte o valor',
    img: 'https://via.placeholder.com/350x200?text=Empanadinho+JP'
  },
  // --- SANDUÍCHES ---
  {
    categoria: 'sanduiches',
    nome: 'Americano',
    desc: 'Presunto, queijo, ovo, salada e maionese',
    preco: 'R$ 25,00',
    img: 'img/americano.webp'
  },
  {
    categoria: 'sanduiches',
    nome: 'Bauru',
    desc: 'Presunto, queijo e tomate',
    preco: 'R$ 16,80',
    img: 'img/bauru.jfif'
  },
  {
    categoria: 'sanduiches',
    nome: 'Hambúrguer',
    desc: 'Hambúrguer tradicional',
    preco: 'R$ 16,30',
    img: 'img/hamburguer.jfif'
  },
  {
    categoria: 'sanduiches',
    nome: 'Misto',
    desc: 'Presunto e queijo',
    preco: 'R$ 15,20',
    img: 'img/misto.webp'
  },
  {
    categoria: 'sanduiches',
    nome: 'Queijo',
    desc: 'Quente ou frio',
    preco: 'R$ 19,50',
    img: 'img/queijo.avif'
  },
  {
    categoria: 'sanduiches',
    nome: 'X-Bacon',
    desc: 'Hambúrguer, queijo, bacon e maionese',
    preco: 'R$ 24,80',
    img: 'img/x-bacon.jfif'
  },
  {
    categoria: 'sanduiches',
    nome: 'X-Burger',
    desc: 'Hambúrguer e queijo',
    preco: 'R$ 21,50',
    img: 'img/x-burguer.jfif'
  },
  {
    categoria: 'sanduiches',
    nome: 'X-Egg',
    desc: 'Hambúrguer, queijo, ovo e maionese',
    preco: 'R$ 24,80',
    img: 'img/x-egg.jpg'
  },
  {
    categoria: 'sanduiches',
    nome: 'X-Salada',
    desc: 'Hambúrguer, queijo, salada e maionese',
    preco: 'R$ 24,80',
    img: 'img/x-salada.jfif'
  },
  {
    categoria: 'sanduiches',
    nome: 'X-Tudo',
    desc: 'Hambúrguer, queijo, presunto, bacon, ovo, salada e maionese',
    preco: 'R$ 32,40',
    img: 'img/x-tudo.jfif'
  },

  // --- PRATOS ---
  {
    categoria: 'pratos',
    nome: 'Contra Filé',
    desc: 'Acompanha bases: Arroz, Feijão ou Macarrão (até 3 opções) + Salada ou Fritas',
    preco: 'R$ 32,00',
    img: 'https://via.placeholder.com/350x200?text=Contra+File'
  },
  {
    categoria: 'pratos',
    nome: 'Filé de Frango',
    desc: 'Acompanha bases: Arroz, Feijão ou Macarrão (até 3 opções) + Salada ou Fritas',
    preco: 'R$ 28,00',
    img: 'https://via.placeholder.com/350x200?text=File+de+Frango'
  },
  {
    categoria: 'pratos',
    nome: 'Parmegiana',
    desc: 'Acompanha bases: Arroz, Feijão ou Macarrão (até 3 opções) + Salada ou Fritas',
    preco: 'R$ 34,00',
    img: 'https://via.placeholder.com/350x200?text=Parmegiana'
  },
  {
    categoria: 'pratos',
    nome: 'Milanesas',
    desc: 'Acompanha bases: Arroz, Feijão ou Macarrão (até 3 opções) + Salada ou Fritas',
    preco: 'R$ 30,00',
    img: 'https://via.placeholder.com/350x200?text=Milanesa'
  },
  {
    categoria: 'pratos',
    nome: 'Picadinho',
    desc: 'Acompanha bases: Arroz, Feijão ou Macarrão (até 3 opções) + Salada ou Fritas',
    preco: 'R$ 28,00',
    img: 'https://via.placeholder.com/350x200?text=Picadinho'
  },
  {
    categoria: 'pratos',
    nome: 'Calabresa Defumada',
    desc: 'Acompanha bases: Arroz, Feijão ou Macarrão (até 3 opções) + Salada ou Fritas',
    preco: 'R$ 26,00',
    img: 'https://via.placeholder.com/350x200?text=Calabresa+Defumada'
  },
  {
    categoria: 'pratos',
    nome: 'Bisteca',
    desc: 'Acompanha bases: Arroz, Feijão ou Macarrão (até 3 opções) + Salada ou Fritas',
    preco: 'R$ 26,00',
    img: 'https://via.placeholder.com/350x200?text=Bisteca'
  },
  {
    categoria: 'pratos',
    nome: 'Omelete',
    desc: 'Acompanha bases: Arroz, Feijão ou Macarrão (até 3 opções) + Salada ou Fritas',
    preco: 'R$ 25,00',
    img: 'https://via.placeholder.com/350x200?text=Omelete'
  },
  {
    categoria: 'pratos',
    nome: 'Almôndegas',
    desc: 'Acompanha bases: Arroz, Feijão ou Macarrão (até 3 opções) + Salada ou Fritas (*Confira disponibilidade)',
    preco: 'R$ 28,00',
    img: 'https://via.placeholder.com/350x200?text=Almondegas'
  },
  // --- BEBIDAS ---
  {
    categoria: 'bebidas',
    nome: 'Refrigerante Lata',
    desc: 'Lata 350ml (todos os sabores)',
    preco: 'R$ 8,00',
    img: 'img/refri-lata.jpeg'
  },
  {
    categoria: 'bebidas',
    nome: 'Refrigerante 600ml (Coca-Cola)',
    desc: 'Garrafa 600ml',
    preco: 'R$ 11,00',
    img: 'img/refri-600ml.webp'
  },
  {
    categoria: 'bebidas',
    nome: 'Refrigerante 600ml (Outros sabores)',
    desc: 'Garrafa 600ml',
    preco: 'R$ 10,00',
    img: 'img/refri-garrafa-600ml.webp'
  },
  {
    categoria: 'bebidas',
    nome: 'Refrigerante 2 Litros (Coca-Cola)',
    desc: 'Garrafa 2L',
    preco: 'R$ 19,50',
    img: 'img/2l-coca.webp'
  },
  {
    categoria: 'bebidas',
    nome: 'Refrigerante 2 Litros (Outros sabores)',
    desc: 'Garrafa 2L',
    preco: 'R$ 15,00',
    img: 'img/2l-refri.webp'
  },
  {
    categoria: 'bebidas',
    nome: 'Suco de Laranja',
    desc: 'Suco natural',
    preco: 'R$ 13,00',
    img: 'img/suco-laranja.jpg'
  },
  {
    categoria: 'bebidas',
    nome: 'Sucos (Outros sabores)',
    desc: 'Sucos diversos',
    preco: 'R$ 11,00',
    img: 'img/suco.jpg'
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

  renderizarCardapio('porcoes');
});