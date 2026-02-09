const whitelist = ["teste@aluno.com", "alex@metodoth.com"];
const scripts = {
    logzz: "Ótima notícia! ✅ No seu endereço o motoboy entrega e você PAGA NA PORTA. Me confirme apenas o número da casa para eu agendar aqui!",
    braip: "Para sua região o envio é via Correios com seguro total. 🚚 O pagamento é via Pix ou Cartão para liberação do rastreio oficial. Me passe seu melhor e-mail!",
    kit3: "Pague 2 e leve 3! Você garante o tratamento completo e o 3º frasco é PRESENTE meu. 🎁",
    kit4: "OFERTA RELÂMPAGO: 4 Frascos pelo preço de 2! 🚀 Você leva 4 meses de tratamento e paga apenas 2. Posso reservar?"
};

function checkAccess() {
    const email = document.getElementById('user-email').value;
    if (whitelist.includes(email.toLowerCase())) {
        document.getElementById('login-screen').classList.remove('active');
        document.getElementById('main-app').style.display = 'flex';
        history.pushState({ page: 'main' }, "", "");
    } else { alert("Acesso negado! Use o e-mail da Kiwify."); }
}

function runCheck() {
    const cep = document.getElementById('cep-input').value;
    const badge = document.getElementById('result-display');
    const area = document.getElementById('dynamic-script-area');
    const text = document.getElementById('script-text');

    if (!cep) return;
    badge.style.display = "block";

    if (cep.startsWith('7')) {
        badge.style.background = "#d4edda"; badge.style.color = "#155724";
        badge.innerHTML = "✅ LOGZZ: Pagamento na Entrega";
        text.innerText = scripts.logzz;
    } else {
        badge.style.background = "#f8d7da"; badge.style.color = "#721c24";
        badge.innerHTML = "🚚 BRAIP: Envio via Correios";
        text.innerText = scripts.braip;
    }
    area.style.display = "block";
}

function showTab(tabId, btn) {
    document.querySelectorAll('.tab-pane').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.nav-item').forEach(b => b.classList.remove('active'));
    document.getElementById(tabId).classList.add('active');
    btn.classList.add('active');
    history.pushState({ page: tabId }, "", "");
}

function copyDynamic() {
    const text = document.getElementById('script-text').innerText;
    navigator.clipboard.writeText(text);
    alert("Script copiado!");
}

function copyToClipboard(key) {
    navigator.clipboard.writeText(scripts[key]);
    alert("Script copiado!");
}

window.onpopstate = function(e) { location.reload(); };

