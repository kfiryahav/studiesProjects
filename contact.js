const form = document.querySelector("form");
const Fname = document.querySelector("#firstName");
const lastName = document.querySelector("#lastName");
const email = document.querySelector("#email");
const addMore = document.querySelector("#addMore");

function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = "form-control error";
    const small = formControl.querySelector("small");
    small.innerText = message;
};

function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = ('form-control success');
}

form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (Fname.value === "") {
        showError(Fname, "Please enter your name");
    } else {
        showSuccess(Fname);
    }



    if (lastName.value === "") {
        showError(lastName, "Please enter your last name");
    } else {
        showSuccess(lastName);
    }



    if (email.value === "") {
        showError(email, "Please enter your Email");
    } else {
        showSuccess(email);
    }



    if (addMore.value === "") {
        showError(addMore, "Please enter your content");
    } else {
        showSuccess(addMore);
    }
});

const togglebtn = document.getElementsByClassName("toggle-button")[0];
const navBarLinks = document.getElementsByClassName("navbarlinks")[0];

togglebtn.addEventListener('click', () => {
    navBarLinks.classList.toggle('active');
})