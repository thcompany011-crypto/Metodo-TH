const whitelist = ["teste@aluno.com", "alex@metodoth.com"]; // Adicione o seu e-mail aqui
const scripts = {
    logzz: "Ótima notícia! ✅ No seu endereço o motoboy entrega e você PAGA NA PORTA. Me confirme apenas o número da casa para eu agendar!",
    braip: "Para sua região o envio é via Correios com seguro total. 🚚 O pagamento é via Pix ou Cartão para liberação imediata do rastreio.",
    kit3: "Pague 2 e leve 3! 🎁 Você garante o tratamento completo e o 3º frasco é PRESENTE meu.",
    kit4: "OFERTA RELÂMPAGO: 4 Frascos pelo preço de 2! 🚀 São 4 meses de tratamento e paga apenas 2."
};

function checkAccess() {
    const email = document.getElementById('user-email').value.toLowerCase().trim();
    if (whitelist.includes(email)) {
        document.getElementById('login-screen').classList.remove('active');
        document.getElementById('main-app').classList.add('active');
        lucide.createIcons(); // Recarrega os ícones na nova tela
    } else { alert("Acesso não autorizado! Verifique seu e-mail da Kiwify."); }
}

function runCheck() {
    const cep = document.getElementById('cep-input').value;
    const badge = document.getElementById('result-display');
    const area = document.getElementById('dynamic-script-area');
    const text = document.getElementById('script-text');

    if (!cep) return;
    badge.style.display = "block";
    area.style.display = "block";

    if (cep.startsWith('7')) {
        badge.style.background = "#d1fae5"; badge.style.color = "#065f46";
        badge.innerHTML = "✅ LOGZZ: Pagamento na Entrega";
        text.innerText = scripts.logzz;
    } else {
        badge.style.background = "#fee2e2"; badge.style.color = "#991b1b";
        badge.innerHTML = "🚚 BRAIP: Envio via Correios";
        text.innerText = scripts.braip;
    }
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
    alert("Script de kit copiado!");
}
