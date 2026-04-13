/* Gatilho para virar a carta do personagem */

function virarCarta(carta) {
    carta.classList.toggle("virada");
}

/* verificação de idade */

function verificarAcessoPersonagens() {
    const idadeParaVer = 18;
    let idadeValida = false;
    let idade;

    while (!idadeValida) {
        const inputIdade = prompt("Saudações viajante, para adentrar o reino informe a sua idade: ");
        
        if (inputIdade === null) return; 

        idade = parseInt(inputIdade);

        if (isNaN(idade)) {
            alert("Por favor, digite um número válido para a idade!");
        } else {
            idadeValida = true; 
        }
    }

    if (idade >= idadeParaVer) {
        alert("Acesso ao reino concedido, Viajante, agora você tem acesso completo ao reino!!!");
        
        const cartas = document.querySelectorAll('.carta-personagem');
        cartas.forEach(carta => {
            carta.classList.remove('carta-blur');
        });
    } else {
        alert("Você ainda é muito jovem para acessar todo conteúdo do reino!!!");
    }
}

window.onload = function() {
    if (window.location.pathname.includes("personagens.html")) {
        verificarAcessoPersonagens();
    }
};

/* Mudança do tema */

const btnTema = document.getElementById('btn-tema');

if (btnTema) {
    btnTema.addEventListener('click', () => {
        document.body.classList.toggle('light-mode');
        
        
        if (document.body.classList.contains('light-mode')) {
            btnTema.innerText = "🌑"; 
        } else {
            btnTema.innerText = "☀️"; 
        }
    });
}
