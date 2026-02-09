// LISTA DE TESTE (E-mails que compraram na Kiwify)
const whitelist = ["teste@aluno.com", "alex@metodoth.com"];

// SCRIPTS DE VENDA
const scripts = {
    kit3: "Consegui validar! Você paga 2 frascos e o 3º é POR MINHA CONTA. Sai por apenas 12x de R$ 29,82. Posso separar seu brinde?",
    kit4: "OLHA QUE OPORTUNIDADE: Consegui liberar agora 4 FRASCOS PELO PREÇO DE 2. São 2 brindes exclusivos para você fechar agora!",
    logzz: "Ótima notícia! No seu endereço o motoboy entrega e você PAGA NA PORTA. Me confirme o número da casa.",
    braip: "Para sua região o envio é via Correios com seguro total. O pagamento é antecipado via Pix ou Cartão para liberação do rastreio."
};

function checkAccess() {
    const email = document.getElementById('user-email').value;
    if (whitelist.includes(email)) {
        document.getElementById('login-screen').style.display = 'none';
        document.getElementById('main-app').style.display = 'block';
    } else { alert("E-mail não autorizado! Verifique seu e-mail de compra na Kiwify."); }
}

function showTab(id) {
    document.querySelectorAll('.tab-page').forEach(p => p.classList.remove('active'));
    document.getElementById(id).classList.add('active');
}

function runCheck() {
    const input = document.getElementById('cep-input').value;
    const res = document.getElementById('result-display');
    // Lógica simplificada: CEPs que começam com "7" (como Anápolis) são Logzz
    if (input.startsWith('7')) {
        res.style.background = "#d4edda"; res.style.color = "#155724";
        res.innerHTML = "✅ STATUS: LOGZZ (Pagamento na Entrega)";
    } else {
        res.style.background = "#f8d7da"; res.style.color = "#721c24";
        res.innerHTML = "🚚 STATUS: BRAIP (Envio Nacional)";
    }
}

function copyToClipboard(key) {
    navigator.clipboard.writeText(scripts[key]);
    alert("Script copiado para o WhatsApp!");
}
