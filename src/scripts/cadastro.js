const novosUsuarios = [];

function validarDtNasc() {
    let value = document.querySelector('.nascimento');
    let re = /^[0-9]{2}\/[0-9]{2}\/[0-9]{4}$/;
    if (!re.test(value.value)) {
      alert('Data de Nascimento Inválida!');
      value.setAttribute("style", "border: 1px solid red;");
      document.form.nascimento.focus();
      return false;
    }
    return true;
}

function mascaraData( campo, e ) {
	let kC = (document.all) ? event.keyCode : e.keyCode;
	let data = campo.value;
	
	if(kC!=8 && kC!=46) {
		if( data.length==2 )
		{
			campo.value = data += '/';
		} else if( data.length==5 )
		{
			campo.value = data += '/';
		} else
			campo.value = data;
	}
}

function validarNome() {
    let value = document.querySelector('.nome');
    let re = /^[a-zA-ZéúíóáÉÚÍÓÁèùìòàçÇÈÙÌÒÀõãñÕÃÑêûîôâÊÛÎÔÂëÿüïöäËYÜÏÖÄ\-\ \s]+$/;
    if (!re.test(value.value)) {
      alert('Nome Inválido! O nome deve possuir apenas letras e no mínimo 3 caracteres.');
      value.setAttribute("style", "border: 1px solid red;");
      document.form.nome.focus();
      return false;
    }
    return true;
}

function validarSenha() {
    let value = document.querySelector('.senha');
    let re = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%*()_+^&}{:;?.])(?:([0-9a-zA-Z!@#$%;*(){}_+^&])(?!\1)){6,}$/;
    if (!re.test(value.value)) {
      alert('Senha Inválida! Sua senha precisa conter no mínimo 1 letra maiuscula, 1 letra minúscula, sem repetições de letras ou números em sequeência(11, LL,hh) e possuir no mínimo 6 caracteres.');
      value.setAttribute("style", "border: 1px solid red;");
      document.form.senha.focus();
      return false;
    }
    return true;
}

function validarTudo() {
    if(validarNome() &&  validarDtNasc() && validarSenha()){
        novosUsuarios.push(...novosUsuarios, {"email": document.querySelector('.email').value, "password": document.querySelector('.senha').value});
        localStorage.setItem("newUsers", JSON.stringify(novosUsuarios));
        return true;
    }
}
