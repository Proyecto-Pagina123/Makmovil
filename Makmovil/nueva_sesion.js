const usuario = localStorage.getItem("usuario");

if (!usuario) {
    window.location.href = "Registro.html";
}

document.getElementById("saludo").textContent = "Hola " + usuario + ", bienvenido";