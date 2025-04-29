//MOVIMENTO FORMULÁRIO
const btnLogin = document.querySelector('#button');
const form = document.querySelector('form');

btnLogin.addEventListener('click', event =>{
    event.preventDefault();//impede a página de carregar
    form.classList.add('oculta-form');//oculta-form esta no css login.css
})

form.addEventListener('animationend', event =>{
    if(event.animationName == 'top') {//top é a animação que esta no login.css
        form.style.display = 'none';
        window.location.href = 'index.html';
    }
})