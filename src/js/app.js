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

// Agregar validaciones
// Asegurate de no modificar ids ni clases dentro del hmtl.
// Deje una clase error dentro del css que puedes llamar con {elementoHTML}.classList.add("error").

//formulario de logeo
const formularioLogin = document.getElementById("formulario-login");
const correoLogin = document.getElementById("correo-login");
const claveLogin = document.getElementById("password-login");
const errorlogin = document.getElementById("error-login");

//validar formato del correo
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

formularioLogin.addEventListener("submit", (e) => {
  e.preventDefault();

  //lista errores
  let mensajeserror = [];

  //validar correo
  if (!emailRegex.test(correoLogin.value.trim())) {
    mensajeserror.push("Correo invalido favor revisar.");
    correoLogin.classList.add("error");
  } else {
    correoLogin.classList.remove("error");
  }

  //validar la contraseña
  if (claveLogin.value.trim("") === "") {
    mensajeserror.push("La contraseña no puede estar vacia.");
    claveLogin.classList.add("error");
  } else {
    claveLogin.classList.remove("error");
  }
  errorlogin.innerHTML = mensajeserror.join("<br>");

  //evuar login
  if (mensajeserror.length > 0) {
  } else {
    errorlogin.innerHTML = "";
    alert("login correcto ");
    formularioLogin.reset();
  }
});

//formulario registro

const formularioRegistro = document.getElementById("formulario-crear-cuenta");
const nombreregistro = document.getElementById("nombre-crear");
const correoRegistro = document.getElementById("correo-crear");
const claveregistro = document.getElementById("password-crear");
const errorregistro = document.getElementById("error-crear");

formularioRegistro.addEventListener("submit", (e) => {
  e.preventDefault();
  let mensajeserror = [];
  //validacion nombre
  if (!nombreregistro.value.trim()) {
    mensajeserror.push("Favor revisar el nombre (esta vacio).");
    nombreregistro.classList.add("error");
  } else {
    nombreregistro.classList.remove("error");
  }
  //validacion correo
  if (!emailRegex.test(correoRegistro.value.trim())) {
    mensajeserror.push("Favor revisar el correo.");
    correoRegistro.classList.add("error");
  } else {
    correoRegistro.classList.remove("error");
  }
  //validacion contraseña
  if (claveregistro.value.trim("") === "") {
    mensajeserror.push("La contraseña no puede esta vacia.");
    claveregistro.classList.add("error");
  } else {
    claveregistro.classList.remove("error");
  }
  //mostrar mensaje de error
  errorregistro.innerHTML = mensajeserror.join("<br>");
  //evaluar registro
  if (mensajeserror.length > 0) {
  } else {
    alert("registro correcto");
    mensajeserror.innerHTML = "";
    formularioRegistro.reset();
  }
});
