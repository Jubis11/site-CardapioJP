document.addEventListener('DOMContentLoaded', () => {
  const botoes = document.querySelectorAll('.btn-categoria');
  const itens = document.querySelectorAll('.item-cardapio');

  botoes.forEach(botao => {
    botao.addEventListener('click', () => {
      // 1. Remove a classe 'active' de todos os botões e adiciona no clicado
      botoes.forEach(b => b.classList.remove('active'));
      botao.classList.add('active');

      // 2. Pega o nome da categoria do botão
      const categoria = botao.getAttribute('data-categoria');

      // 3. Filtra os cards exibidos na tela
      itens.forEach(item => {
        if (item.classList.contains(categoria)) {
          item.classList.remove('d-none');
        } else {
          item.classList.add('d-none');
        }
      });
    });
  });
});