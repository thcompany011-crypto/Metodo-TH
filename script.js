const whitelist = ["teste@aluno.com", "alex@metodoth.com"]; 
const scripts = {
    logzz: "Ótima notícia! ✅ No seu endereço o entregador faz a entrega e você PAGA NA PORTA. Me confirme os dados abaixo para eu agendar agora!",
    braip: "Para sua região o envio é via Correios com seguro total. 🚚 O pagamento é via Pix ou Cartão para liberação imediata do rastreio oficial.",
    kit3: "Pague 2 e leve 3! 🎁 Você garante o tratamento completo e o 3º frasco é PRESENTE meu.",
    kit4: "OFERTA RELÂMPAGO: 4 Frascos pelo preço de 2! 🚀 São 4 meses de tratamento e paga apenas 2."
};

function checkAccess() {
    const email = document.getElementById('user-email').value.toLowerCase().trim();
    if (whitelist.includes(email)) {
        document.getElementById('login-screen').classList.remove('active');
        document.getElementById('main-app').classList.add('active');
        lucide.createIcons();
    } else { alert("Acesso negado!"); }
}

function runCheck() {
    const cep = document.getElementById('cep-input').value;
    const badge = document.getElementById('result-display');
    const area = document.getElementById('dynamic-script-area');
    const logzzForm = document.getElementById('logzz-form');
    const text = document.getElementById('script-text');

    if (!cep) return;
    badge.style.display = "block";
    area.style.display = "block";

    if (cep.startsWith('7')) { // Logística Entregador
        badge.style.background = "#d1fae5"; badge.style.color = "#065f46";
        badge.innerHTML = "✅ STATUS: ENTREGADOR (Logzz)";
        text.innerText = scripts.logzz;
        logzzForm.style.display = "block";
    } else { // Logística Correios
        badge.style.background = "#fee2e2"; badge.style.color = "#991b1b";
        badge.innerHTML = "🚚 STATUS: CORREIOS (Braip)";
        text.innerText = scripts.braip;
        logzzForm.style.display = "none";
    }
    lucide.createIcons();
}

function copyFinalOrder() {
    const cep = document.getElementById('cep-input').value;
    const num = document.getElementById('cust-num').value;
    const ref = document.getElementById('cust-ref').value;
    const data = document.getElementById('cust-date').value;
    const periodo = document.getElementById('cust-period').value;
    const obs = document.getElementById('cust-obs').value;

    const resumo = `DADOS PARA O ENTREGADOR:\nCEP: ${cep}\nNº: ${num}\nREF: ${ref}\nDATA: ${data}\nPERÍODO: ${periodo}\nOBS: ${obs}`;
    
    navigator.clipboard.writeText(resumo);
    alert("Dados para agendamento copiados!");
}

function showTab(tabId, btn) {
    document.querySelectorAll('.tab-content').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
    document.getElementById(tabId).classList.add('active');
    btn.classList.add('active');
    lucide.createIcons();
}

function copyDynamic() {
    navigator.clipboard.writeText(document.getElementById('script-text').innerText);
    alert("Script de fechamento copiado!");
}

function copyToClipboard(key) {
    navigator.clipboard.writeText(scripts[key]);
    alert("Script do Kit copiado!");
}
