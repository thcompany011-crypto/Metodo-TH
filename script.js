// CONFIGURAÇÃO DE ADMIN (Bypass Master)
const ADMIN_MASTER_KEY = "Admin Metodo TH Alexth11";

// 1. Controle de Histórico para o Botão Voltar do Celular
window.addEventListener('popstate', function(event) {
    if (event.state && event.state.screen) {
        exibirTela(event.state.screen, false);
    }
});

function irPara(screenId) {
    history.pushState({ screen: screenId }, "", "#" + screenId);
    exibirTela(screenId, true);
}

function exibirTela(screenId, anima) {
    document.querySelectorAll('.app-screen').forEach(s => s.classList.remove('active'));
    document.getElementById(screenId).classList.add('active');
    window.scrollTo(0, 0);
}

function voltar() {
    window.history.back();
}

// 2. Identificação Única do Dispositivo
function obterDeviceId() {
    let id = localStorage.getItem('th_device_id');
    if (!id) {
        id = 'TH-' + Math.random().toString(36).substr(2, 9).toUpperCase();
        localStorage.setItem('th_device_id', id);
    }
    return id;
}

// 3. Lógica de Login Vitalício e Segurança
async function tentarLogin() {
    const inputLogin = document.getElementById('user-email').value.trim();
    const msg = document.getElementById('login-msg');
    const deviceId = obterDeviceId();

    // --- VERIFICAÇÃO DE LOGIN VITALÍCIO DO SR. ALEX (ADMIN) ---
    if (inputLogin === ADMIN_MASTER_KEY) {
        msg.style.color = "#D4AF37";
        msg.innerText = "Acesso Master Identificado. Bem-vindo, Sr. Alex.";
        
        // Salva que este dispositivo é o do Administrador
        localStorage.setItem('th_admin_auth', 'true');
        
        setTimeout(() => {
            document.getElementById('display-email').innerText = "ADMINISTRADOR (VITALÍCIO)";
            irPara('screen-dashboard');
        }, 1500);
        return;
    }

    // --- LOGIN DE ALUNOS COMUNS (COM VALIDAÇÃO) ---
    if(!inputLogin.includes("@")) {
        msg.style.color = "#ff4444";
        msg.innerText = "E-mail inválido ou credencial incorreta.";
        return;
    }

    msg.style.color = "yellow";
    msg.innerText = "Validando licença Kiwify...";
    
    try {
        // Quando você tiver o Google Script, a URL irá aqui:
        // const URL_API = "SUA_URL_DO_GOOGLE_SCRIPT";
        // const resp = await fetch(`${URL_API}?email=${inputLogin}&device=${deviceId}`);
        // const status = await resp.json();
        
        // Simulação temporária para alunos:
        setTimeout(() => {
            document.getElementById('display-email').innerText = inputLogin;
            irPara('screen-dashboard');
        }, 2000);

    } catch (e) {
        msg.innerText = "Erro na rede. Tente novamente.";
    }
}

// 4. Ferramentas Internas
function validarLogzz() {
    const link = document.getElementById('logzz-link').value;
    const res = document.getElementById('logzz-result');
    if(!link.includes("logzz")) return alert("Link inválido da Logzz");

    res.innerHTML = "<div class='premium-card'>🔍 Cruzando dados Master Check...</div>";
    setTimeout(() => {
        res.innerHTML = `
            <div class="premium-card" style="border-left: 5px solid #D4AF37;">
                <h4 style="color: #D4AF37;">MÉTODO TH - ANALISE CONCLUÍDA</h4>
                <p><strong>Status:</strong> Produto Válido</p>
                <p><strong>Logística:</strong> Priorizar capitais e regiões metropolitanas.</p>
                <p><strong>Bloqueios:</strong> 12 Ceps identificados com alta taxa de devolução.</p>
            </div>
        `;
    }, 2000);
}

function gerarFluxoDrive() {
    const link = document.getElementById('drive-link').value;
    const res = document.getElementById('drive-result');
    
    res.innerHTML = "<div class='premium-card'>🤖 Arquiteto 360 lendo o Drive...</div>";
    setTimeout(() => {
        res.innerHTML = `
            <div class="premium-card">
                <h4 style="color: #D4AF37;">FLUXO DE ATENDIMENTO GERADO</h4>
                <p>O App identificou 3 scripts de quebra de objeção neste Drive.</p>
                <button class="btn-gold" style="padding: 10px; font-size: 0.8rem;" onclick="window.open('${link}')">ACESSAR PASTA ORGANIZADA</button>
            </div>
        `;
    }, 2000);
}

