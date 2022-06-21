const header = document.querySelector('header');

let inicioURL;
let agendamentoURL;
let horariosURL;
let unidadesURL;
let loginURL;

if(window.location.pathname.includes("agendamento")){
    inicioURL = '../../index.html';
    agendamentoURL = '#';
    horariosURL = '../horarios/index.html';
    unidadesURL = '../unidades/index.html';
    loginURL = '../login/index.html';
} else if (window.location.pathname.includes("horarios")) {
    inicioURL = '../../index.html';
    agendamentoURL = '../agendamento/index.html';
    horariosURL = '#';
    unidadesURL = '../unidades/index.html';
    loginURL = '../login/index.html';
} else if (window.location.pathname.includes("unidades")) {
    inicioURL = '../../index.html';
    agendamentoURL = '../agendamento/index.html';
    horariosURL = '../horarios/index.html';
    unidadesURL = '#';
    loginURL = '../login/index.html';
} else {
    inicioURL = '#';
    agendamentoURL = './pages/agendamento/index.html';
    horariosURL = './pages/horarios/index.html';
    unidadesURL = './pages/unidades/index.html';
    loginURL = './pages/login/index.html';
}

header.innerHTML = '';
const menu = document.createElement("div");
header.append(menu);
menu.innerHTML = `
    <nav class="menu">        
        <a href="` + inicioURL + `" class="button-menu inicio ` 
        + (window.location.pathname.includes("src/index.html") ? 'active' : '') + 
        `">Início</a>
        <hr />
        <a href="` + agendamentoURL + `" class="button-menu agendamento ` 
        + (window.location.pathname.includes("agendamento") ? 'active' : '') + 
        `">Agendamento</a>
        <hr />
        <a href="` + horariosURL + `" class="button-menu horarios ` 
        + (window.location.pathname.includes("horarios") ? 'active' : '') + 
        `">Meus Horários</a>
        <hr />
        <a href="` + unidadesURL + `" class="button-menu unidades ` 
        + (window.location.pathname.includes("unidades") ? 'active' : '') + 
        `">Unidades</a>
    </nav>
    ` +
        (window.localStorage.getItem("User") == null ?
            '<a href="' + loginURL + '" class="login-button">Login</a>'
        :
            `
            <button class="loggout">   
                <img src="`+ 
                    (window.location.pathname.includes("src/index.html") 
                    ? './assets/images/log-out.png' 
                    : '../../assets/images/log-out.png') + 
                `" alt="loggout" />
            </button>
            `)
        + `
    `
let login = document.querySelector('.login-button');
let limparLogin = document.querySelector('.loggout');

limparLogin.addEventListener('click', (ev) => {
    ev.preventDefault();
    window.localStorage.clear();
    document.location.reload(true);
});
