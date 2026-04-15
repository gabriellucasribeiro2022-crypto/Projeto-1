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

/* Variaveis DOM */

const charNome = "Kaelen, o Vingador das Presas";
const charIdade = "32 Ciclos de Lua";
const charFaccao = "Exilado (Ex-Guarda de Prata)";
const charImportancia = "Último Sobrevivente do Massacre";
const charHistoria = "Guerreiro canino motivado por um ódio profundo contra a seita dos Gatos Negros. Ele busca vingança pelo seu clã e a verdade sobre os planos sombrios dos felinos.";

function carregarDadosPersonagem() {
    if (document.getElementById('char-nome')) {
        document.getElementById('char-nome').innerText = charNome;
        document.getElementById('char-idade').innerText = charIdade;
        document.getElementById('char-faccao').innerText = charFaccao;
        document.getElementById('char-importancia').innerText = charImportancia;
        document.getElementById('char-historia').innerText = charHistoria;
    }
}

/* Ano de lançamento */

window.onload = function() {
    const naHome = window.location.pathname.endsWith("index.html") || window.location.pathname === "/";

    if (naHome) {
        const anoLancamentoConst = 2026; 
        const anoAtualComputador = new Date().getFullYear();

        if (anoAtualComputador === anoLancamentoConst) {
            alert("🚀 GRANDE LANÇAMENTO: Fang & Steel já está entre nós!");
        }
    }

    if (window.location.pathname.includes("personagens.html")) {
        verificarAcessoPersonagens();
        carregarDadosPersonagem(); 
    }
};

function gerarSaudacao() {
    const nomeUsuario = document.getElementById('input-nome').value;
    const campoMensagem = document.getElementById('mensagem-boas-vindas');

    if (nomeUsuario.trim() !== "") {
        campoMensagem.innerText = `Saudações, ${nomeUsuario}! Sua jornada em Fang & Steel começa agora.`;
        
        campoMensagem.classList.add('estilo-saudacao'); 
    } else {
        alert("Por favor, digite seu nome para receber as honrarias do reino!");
    }
}