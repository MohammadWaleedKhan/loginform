const form = document.getElementById('form');
const email = document.getElementById('email');
const password = document.getElementById('password');

// ADD EVENTLISTENER

form.addEventListener('submit', (event) => {
    event.preventDefault();
    validate();
});


// MORE EMAIL VALIDATION

function isEmail (emailVal) {
    let atSymbol = emailVal.indexOf('@');
    if(atSymbol < 1)
        return false;
    var dot = emailVal.lastIndexOf('.');
    if(dot <= atSymbol + 2)
        return false;
    if(dot === emailVal.length - 1) return false;
    return true;
}
// DEFINE THE VALIDATE FUNCTION

const validate = () => {
    const emailVal = email.value.trim();
    const passwordVal = password.value.trim();

    // EMAIL VALIDATION

    if(emailVal === "") {
        setErrorMsg(email, 'email cannot be blank');
        return;
    }else if (!isEmail(emailVal)){
        setErrorMsg(email, 'not a valid email');
        return;
    }else {
        setSuccessMsg(email);
    }

    // PASSWORD VALIDATION

    if(passwordVal === ""){
        setErrorMsg(password, 'password cannot be blank');
        return;
    }else if(passwordVal <= 5){
        setErrorMsg(password, 'minimum 6 characters');
        return;
    }else {
        setSuccessMsg(password);
    }
}

function setErrorMsg(input, errormsgs) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = "form-control error"
    small.innerText = errormsgs;
}

function setSuccessMsg(input) {
    const formControl = input.parentElement;
    formControl.className = "form-control success"
}
