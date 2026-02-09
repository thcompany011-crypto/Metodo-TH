// LISTA DE TESTE
const whitelist = ["teste@aluno.com", "alex@metodoth.com"];

const scripts = {
    kit3: "Consegui validar! Você paga 2 frascos e o 3º é POR MINHA CONTA...",
    kit4: "OLHA QUE OPORTUNIDADE: Consegui liberar agora 4 FRASCOS PELO PREÇO DE 2...",
    logzz: "Ótima notícia! No seu endereço o motoboy entrega e você PAGA NA PORTA...",
    braip: "Para sua região o envio é via Correios com seguro total..."
};

// --- NOVA LÓGICA DE NAVEGAÇÃO ---

function checkAccess() {
    const email = document.getElementById('user-email').value;
    if (whitelist.includes(email)) {
        document.getElementById('login-screen').style.display = 'none';
        document.getElementById('main-app').style.display = 'block';
        // Cria um marco no histórico para que o "voltar" não saia do app
        history.pushState({ page: 'main' }, "Master Check", ""); 
    } else { 
        alert("E-mail não autorizado!"); 
    }
}

function showTab(id) {
    document.querySelectorAll('.tab-page').forEach(p => p.classList.remove('active'));
    document.getElementById(id).classList.add('active');
    // Adiciona a aba ao histórico do navegador
    history.pushState({ page: id }, "Master Check", ""); 
}

// Escuta o botão "voltar" do celular
window.onpopstate = function(event) {
    if (event.state && event.state.page) {
        if (event.state.page === 'main') {
            // Se voltar para o marco inicial, mostra a primeira aba
            showTab('tab-cep'); 
        } else {
            // Volta para a aba específica registrada no histórico
            showTab(event.state.page);
        }
    } else {
        // Se não houver mais histórico interno, o navegador sai da página (comportamento padrão)
        location.reload(); 
    }
};

// Funções de CEP e Cópia continuam as mesmas...
function runCheck() { /* ... */ }
function copyToClipboard(key) { /* ... */ }
