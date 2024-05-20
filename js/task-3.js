const usernameEl = document.querySelector("#name-output");
const usernameInput = document.querySelector("#name-input");
usernameInput.addEventListener('input', OnUsernameInput);
function OnUsernameInput() {
    const value = usernameInput.value.trim();
    if (value === '') {
        usernameEl.textContent = 'Anonymous';
    } else { usernameEl.textContent = value; };
};

