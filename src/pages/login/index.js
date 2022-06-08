let $buttonSubmit = document.getElementById('button-submit');
let $errorUser = document.getElementById('message-error');
let result;

const ajax = new XMLHttpRequest();
ajax.open('GET', './users.json', true);
ajax.send();

ajax.addEventListener("readystatechange", parseData, false);
$buttonSubmit.addEventListener('click', validatedLoginUser, false);
    
function validatedLoginUser() {
    let email = document.getElementById('email');
    let password = document.getElementById('pass');
    
    for(let i=0; i < result.users.length; i++){
        if(email.value === result.users[i].email && password.value === result.users[i].password) {
            localStorage.setItem("User", email);
            localStorage.getItem(email);
            window.location.href="../../index.html"; 
        } else {
            email.setAttribute("style", "border: 2px solid red");
            password.setAttribute("style", "border: 2px solid red");
            $errorUser.setAttribute("style", "display: block;")
        }
    }
}

function parseData() {
    try {
        return result = JSON.parse(ajax.responseText);
        console.log(result);
    } catch {
        return result = null;
    }
}