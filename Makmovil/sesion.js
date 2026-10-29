async function iniciarSesion() 
{

    let usuario = document.getElementById("usuario").value;
    let password = document.getElementById("password").value;

    const { data, error } = await supabaseClient
        .from("Usuarios")
        .select("*")
        .eq("Nombre", usuario)
        .eq("Contraseña", password);

    if (error) {
        console.error(error);
        alert("Error al consultar Supabase");
        return;
    }

    if (data.length > 0) {
        window.location.href = "Cuentas.html";
    } else {
        alert("Usuario o contraseña incorrectos");
    }
}