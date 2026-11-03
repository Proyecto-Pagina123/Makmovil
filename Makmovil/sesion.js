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

        // Revisar si hay una sesión activa
        const { data: sesionActiva } = await supabaseClient
            .from("sesion_activa")
            .select("*");

        if (sesionActiva.length === 0) {

            // Entrar directamente
            await supabaseClient
                .from("sesion_activa")
                .insert({
                    usuario: usuario
                });

            localStorage.setItem("usuario", usuario);
            window.location.href = "Cuentas.html";

        } else 
            {

                // Verificar si ya está en la cola
                const { data: enCola } = await supabaseClient
                 .from("cola_espera")
                 .select("*")
                 .eq("usuario", usuario);

                if (enCola.length === 0)   
                {

                    await supabaseClient
                    .from("cola_espera")
                    .insert({
                        usuario: usuario
                    });
                }

                localStorage.setItem("usuario", usuario);
                window.location.href = "Esperar.html";
            }

    } else {
        alert("Usuario o contraseña incorrectos");
    }
}