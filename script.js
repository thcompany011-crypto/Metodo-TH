const whitelist = ["teste@aluno.com", "alex@metodoth.com"];
const scripts = {
    logzz: "Ótima notícia! ✅ No seu endereço o motoboy entrega e você PAGA NA PORTA. Me confirme apenas o número da casa para eu agendar aqui!",
    braip: "Para sua região o envio é via Correios com seguro total. 🚚 O pagamento é via Pix ou Cartão para liberação imediata do código de rastreio oficial. Me passe seu melhor e-mail!",
    kit3: "Pague 2 e leve 3! Você garante o tratamento completo e o 3º frasco é PRESENTE meu. 🎁",
    kit4: "OFERTA RELÂMPAGO: 4 Frascos pelo preço de 2! 🚀 Você leva 4 meses de tratamento e paga apenas 2. Posso reservar?"
};

function checkAccess() {
    const email = document.getElementById('user-email').value;
    if (whitelist.includes(email.toLowerCase())) {
        document.getElementById('login-screen').style.display = 'none';
        document.getElementById('main-app').style.display = 'flex';
        history.pushState({ page: 'main' }, "Master Check", ""); 
    } else { alert("Acesso não autorizado. Verifique seu e-mail da Kiwify."); }
}

function runCheck() {
    const input = document.getElementById('cep-input').value;
    const res = document.getElementById('result-display');
    const area = document.getElementById('dynamic-script-area');
    const text = document.getElementById('script-text');

    if (!input) return alert("Digite um CEP!");
    res.style.display = "block";

    if (input.startsWith('7')) {
        res.style.background = "#d4edda"; res.style.color = "#155724";
        res.innerHTML = '<i class="fas fa-truck-loading"></i> LOGZZ: Pagamento na Entrega';
        text.innerText = scripts.logzz;
    } else {
        res.style.background = "#f8d7da"; res.style.color = "#721c24";
        res.innerHTML = '<i class="fas fa-shipping-fast"></i> BRAIP: Envio Nacional';
        text.innerText = scripts.braip;
    }
    area.style.display = 'block';
}

function showTab(id, btn) {
    document.querySelectorAll('.tab-content').forEach(p => p.classList.remove('active'));
    document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
    document.getElementById(id).classList.add('active');
    btn.classList.add('active');
    history.pushState({ page: id }, "Master Check", "");
}

window.onpopstate = function(event) {
    if (event.state && event.state.page) {
        if (event.state.page === 'main') showTab('tab-cep', document.querySelector('.nav-btn'));
        else showTab(event.state.page, Array.from(document.querySelectorAll('.nav-btn')).find(b => b.innerText.includes("Consultar")));
    }
};

function copyToClipboard(key) {
    navigator.clipboard.writeText(scripts[key]);
    alert("Script copiado para o WhatsApp!");
}

function copyDynamic() {
    const text = document.getElementById('script-text').innerText;
    navigator.clipboard.writeText(text);
    alert("Script de fechamento copiado!");
}

