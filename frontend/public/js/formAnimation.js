//public/js/formAnimation
document.addEventListener('DOMContentLoaded', () => {
  const currentPath = window.location.pathname;

  // Apenas nas rotas desejadas
  if (!['/login', '/register'].includes(currentPath)) return;

  // Use setTimeout para garantir que o DOM foi carregado
  window.addEventListener('load', () => {
    const form = document.querySelector('form');
    const submitButton = document.querySelector('#button');

    if (!form || !submitButton) return;

    const handleSubmit = (event) => {
      event.preventDefault();
      form.classList.add('oculta-form');
    };

    submitButton.addEventListener('click', handleSubmit);

    form.addEventListener('animationend', (event) => {
      if (event.animationName === 'top') {
        form.style.display = 'none';
        window.location.href = '/'; // Redireciona após animação
      }
    });
  });
});