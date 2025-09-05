const loginID = document.getElementById("login");
const crearCuentaID = document.getElementById("crear-cuenta");
const btnIniciarSesion = document.querySelector("#btn-login");
const btnVolver = document.getElementById("btn-volver");
const password = document.getElementById("password");
const mostrar = document.getElementById("mostrar");
const mostrarPassword = document.getElementById("mostrarPassword");

btnIniciarSesion.addEventListener("click", (e) => {
  e.preventDefault();
  crearCuentaID.classList.add("ocultar");
  crearCuentaID.classList.remove("crear-cuenta");
  loginID.classList.remove("ocultar");
  loginID.classList.add("login");
});

btnVolver.addEventListener("click", (e) => {
  e.preventDefault();
  loginID.classList.add("ocultar");
  loginID.classList.remove("login");
  crearCuentaID.classList.remove("ocultar");
  crearCuentaID.classList.add("crear-cuenta");
});

document.querySelectorAll(".toggle-password").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    const input = btn.closest(".input-container").querySelector(".password");
    const icon = btn.querySelector("i");
    if (input.type === "password") {
      input.type = "text";
      icon.classList.replace("fa-eye-slash", "fa-eye");
    } else {
      input.type = "password";
      icon.classList.replace("fa-eye", "fa-eye-slash");
    }
  });
});

mostrarPassword.addEventListener("click", () => {
  // Alterna el tipo de input
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    togglePassword.classList.replace("fa-eye", "fa-eye-slash");
  } else {
    passwordInput.type = "password";
    togglePassword.classList.replace("fa-eye-slash", "fa-eye");
  }
});

// Agregar validaciones
// Asegurate de no modificar ids ni clases dentro del hmtl.
// Deje una clase error dentro del css que puedes llamar con {elementoHTML}.classList.add("error").
