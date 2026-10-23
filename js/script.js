document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('modalLivro');
  if (modal) {
    modal.addEventListener('show.bs.modal', (evento) => {
      const botao = evento.relatedTarget;
      modal.querySelector('#modalTitulo').textContent = botao.dataset.titulo;
      modal.querySelector('#modalAutor').textContent = `Autor: ${botao.dataset.autor}`;
      modal.querySelector('#modalSinopse').textContent = botao.dataset.sinopse;
    });
  }

  const toastEl = document.getElementById('toastDesejo');
  if (toastEl) {
    const toast = new bootstrap.Toast(toastEl, { delay: 3000 });
    const textoToast = document.getElementById('toastTexto');

    document.querySelectorAll('.btn-desejo').forEach((botao) => {
      botao.addEventListener('click', () => {
        textoToast.textContent = `"${botao.dataset.titulo}" foi adicionado à sua lista de desejos.`;
        toast.show();
      });
    });
  }
});
