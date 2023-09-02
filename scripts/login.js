const userEmail = document.getElementById('userEmail');
const userPassword = document.getElementById('userPassword');
const loginButton = document.getElementById('loginButton');

function validateLogin() {
    const data = {
        userEmail: userEmail.value,
        userPassword: userPassword.value
    }
    if (data.userEmail === "pepe" && data.userPassword === "123") {
        window.location.href = "cuentas.html"
    } else {
        alert("Usuario y/o contraseña incorrectos. (F12 para ver credenciales)")
        console.log("Usuario: pepe - Contraseña: 123");
    }
  }
  loginButton.addEventListener('click', (e) => {
    e.preventDefault()
    validateLogin()
  })