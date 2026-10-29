async function iniciarSesion() {

    let usuario = document.getElementById("usuario").value;
    let password = document.getElementById("password").value;

    const { data, error } = await supabase
        .from("usuarios")
        .select("*")
        .eq("Nombre", usuario)
        .eq("Contraseña", password);

    if (error) {
        console.log(error);
        alert("Error al consultar la base de datos");
        return;
    }

    if (data.length > 0) {
        window.location.href = "Cuentas.html";
    } else {
        alert("Usuario o contraseña incorrectos");
    }
}