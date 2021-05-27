const form = document.querySelector("form");
const username = document.querySelector("#username");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const password2 = document.querySelector("#password2");

function showError(input, message) {
    const formcontrol = input.parentElement;
    formcontrol.className = 'form-control error';
    const small = formcontrol.querySelector('small');
    small.innerText = message;
}

function showSuccess(input) {
    const formcontrol = input.parentElement;
    formcontrol.className = 'form-control success';
}


form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (username.value === "") {
        showError(username, "Please enter a username");
    } else {
        showSuccess(username);
    }
    if (email.value === "") {
        showError(email, "Please enter a Email");
    } else {
        showSuccess(email);
    }
    if (password.value === "") {
        showError(password, "Please enter a password");
    } else {
        showSuccess(password);
    }
    if (password2.value === "") {
        showError(password2, "Please enter your password again");
    } else {
        showSuccess(password2);
    }
});