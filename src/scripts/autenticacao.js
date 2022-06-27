let $buttonSubmit = document.getElementById('button-submit');
let $errorUser = document.getElementById('message-error');
let email = document.getElementById('email');
let password = document.getElementById('pass');
let result;

const ajax = new XMLHttpRequest();
ajax.open('GET', '../../seeds/users.json', true);
ajax.send();
ajax.addEventListener("readystatechange", parseData, false);
$buttonSubmit.addEventListener('click', validatedLoginUserJson, false);
    
function validatedLoginUserJson() {
    for(let i=0; i < result.users.length; i++){
        if(email.value === result.users[i].email && password.value === result.users[i].password) {
            localStorage.setItem("User", email.value);
            localStorage.getItem(email.value);
            return window.location.href="../../index.html"; 
        }
    }
    validatedLoginUserLocal(email.value, password.value);
}

function validatedLoginUserLocal(propsEmail, propsPassword) {
    if(localStorage.getItem("newUsers") != null){
        let data = JSON.parse(localStorage.getItem("newUsers"));
        for(let i=0; i < data.length; i++){
            if(propsEmail === data[i].email && propsPassword === data[i].password) {
                localStorage.setItem("User", propsEmail);
                localStorage.getItem(propsEmail);
                return window.location.href="../../index.html"; 
            }
        }
        invalidLogin();
    } else {
        invalidLogin();
    }
}

function invalidLogin() {
    email.setAttribute("style", "border: 2px solid red");
    password.setAttribute("style", "border: 2px solid red");
    $errorUser.setAttribute("style", "display: block;");
}

function parseData() {
    try {
        return result = JSON.parse(ajax.responseText);
    } catch {
        return result = null;
    }
}