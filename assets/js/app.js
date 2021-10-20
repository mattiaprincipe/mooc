const form = document.getElementById('form');
const username = document.getElementById('nome');
const lastname = document.getElementById('cognome');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
//error function
function showError(input, _message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = _message;
}
//success function
function showSuccess(input,) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}
// email validator 
function checkEmail(input) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(input.value.trim())){ showSuccess(input)}
    else {showError(input , 'Inserisci una mail valida') }
}
//check required function
function checkRequired(inputArr) {
    inputArr.forEach(function(input) {
        if(input.value.trim() === '') { showError(input, `Inserisci un valore valido`)}
        else { showSuccess (input)}
    })
}
//check input lenght
function checkLength(input, min, max) {
    if(input.value.length < min) {
        showError(input, `Inserisci un valore tra ${min} e ${max} caratteri`);
    } else if (input.value.length > max) {
        showError(input, `Inserisci un valore con meno di ${max} caratteri.`);
    } else { showSuccess(input)}
}
// First letter uppercase
function getFieldName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}
// check password match
function checkPasswordMatch(input1, input2) {
    if(input1.value !== input2.value) {
        showError(input2, 'Le Password non corrispondono');
    }
}
//Event Listner
form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    checkRequired([username, email, password, password2]);
    checkLength(username, 3 , 25);
    checkLength(lastname, 3 , 25);
    checkLength(password, 6 , 25);
    checkEmail(email);
    checkPasswordMatch(password, password2);
});
