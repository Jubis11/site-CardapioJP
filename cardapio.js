document.addEventListener('DOMContentLoaded', () => {
  const botoesCategoria = document.querySelectorAll('.btn-categoria');
  const itensCardapio = document.querySelectorAll('.item-cardapio');

  botoesCategoria.forEach(botao => {
    botao.addEventListener('click', () => {
      // Remove a classe 'active' de todos os botões
      botoesCategoria.forEach(btn => btn.classList.remove('active'));
      
      // Adiciona 'active' no botão clicado
      botao.classList.add('active');

      const categoriaSelecionada = botao.getAttribute('data-categoria');

      // Exibe/oculta os itens da categoria correspondente
      itensCardapio.forEach(item => {
        if (item.classList.contains(categoriaSelecionada)) {
          item.classList.remove('d-none');
        } else {
          item.classList.add('d-none');
        }
      });
    });
  });
});