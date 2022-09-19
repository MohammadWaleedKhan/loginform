const form = document.getElementById('form');
const username = document.getElementById('fulname');
const email = document.getElementById('email');
const password = document.getElementById('password');
const cpassword = document.getElementById('cpassword');
const phone = document.getElementById('phone');
let user = [];

(() => {
    let check = JSON.parse(localStorage.getItem('user'))
    if(check)
    {
        user = check
    }
})();


// ADD EVENTLISTENER

form.addEventListener('submit', (event) => {
    event.preventDefault();
    validate();
});

const sendData = (usernameVal, sRate, count) => {
    if (sRate === count) {
        alert('registration successfull');
        swal("Welcome!"+ usernameVal, "Registration Successful", "success");
        if(swal === true) {
            window.href = login.html
        }
        return;
    }
    
}

// FOR FINAL DATA VALIDATION
const successMsg = (usernameVal) => {
    let formCon = document.getElementsByClassName('form-control');
    var count = formCon.length - 1;
    for(var i = 0; i < formCon.length; i++) {
        if (formCon[i].className === "form-control success") {
            var sRate = 0 + i;
            console.log(sRate);
            sendData(usernameVal, sRate, count);
        } else {
            return false;
        }
    }
}

// MORE EMAIL VALIDATE

function isEmail (emailVal)  {
    var atSymbol = emailVal.indexOf("@");
    if (atSymbol < 1)
        return false;
    var dot = emailVal.lastIndexOf('.');
    if (dot <= atSymbol + 2)
        return false;
    if (dot === emailVal.length - 1) return false;
    return true;
}


// DEFINE THE VALIDATE FUNCTION

const validate = () => {
    const usernameVal = username.value.trim();
    const emailVal = email.value.trim();
    const passwordVal = password.value.trim();
    const cpasswordVal = cpassword.value.trim();
    const phoneVal = phone.value.trim();
    
    // VALIDATE USERNAME

    if (usernameVal === "") {
        setErrorMsg(username, 'username cannot be blank');
        return;
    } else if (usernameVal.length <= 2) {
        setErrorMsg(username, 'username min character 3');
        return;
    } else {
        setSuccessMsg(username);
    }

    // VALIDATE EMAIL

    if (emailVal === "") {
        setErrorMsg(email, 'email cannot be blank');
        return;
    } else if (!isEmail(emailVal)) {
        setErrorMsg(email, 'not a valid email');
        return;
    } else {
        setSuccessMsg(email);
    }

    // VALIDATE PHONE

    if (phoneVal === "") {
        setErrorMsg(phone, 'phone cannot be blank');
        return;
    } else if (phoneVal.length != 11) {
        setErrorMsg(phone, 'not a valid phone number');
        return;
    } else {
        setSuccessMsg(phone);
    }

    // VALIDATE PASSWORD

    if (passwordVal === "") {
        setErrorMsg(password, 'password cannot be blank');
        return;
    } else if (passwordVal.length <= 5 ) {
        setErrorMsg(password, 'minimum 6 character');
        return;
    } else {
        setSuccessMsg(password);
    }

    // VALIDATE CONFIRM PASSWORD

    if (cpasswordVal === "") {
        setErrorMsg(cpassword, 'confirm password cannot be blank');
        return;
    } else if (passwordVal !== cpasswordVal ) {
        setErrorMsg(cpassword, "password doesn't match");
        return;
    } else {
        setSuccessMsg(cpassword);
    }
    successMsg(usernameVal);

   

    let newusers = {
        usernameVal,
        emailVal,
        passwordVal,
        cpasswordVal,
        phoneVal,
    };

    user.push(newusers);
    localStorage.setItem("user", JSON.stringify(user));

}

// LOCAL STORAGE


function setErrorMsg(input, errormsgs) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = "form-control error";
    small.innerText = errormsgs;
}

function setSuccessMsg(input) {
    const formControl = input.parentElement;
    formControl.className = "form-control success";
}



















