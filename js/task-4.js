const registerForm = document.querySelector(".login-form");
registerForm.addEventListener("submit", e => {
    e.preventDefault();
    const email = registerForm.elements.email.value.trim();
    const password = registerForm.elements.password.value.trim();
    const data = {
        email: email,
        password: password,   
    };
    if (email === "" || password === "") {
        return alert('All form fields must be filled in');
    };
    console.log(data);
    registerForm.reset();
});
