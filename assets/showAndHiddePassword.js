const eyeOn = document.querySelector(".eye-on");
const eyeOff = document.querySelector(".eye-off");
const inputPassword = document.querySelector("#inputPassword");

eyeOn.addEventListener("click", () => {
    eyeOn.style.display = "none";
    eyeOff.style.display = "block";
    inputPassword.type = "text";
});
eyeOff.addEventListener("click", () => {
    eyeOff.style.display = "none";
    eyeOn.style.display = "block";
    inputPassword.type = "password";
});