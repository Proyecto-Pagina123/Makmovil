import { createClient } from 'https://esm.sh/@supabase/supabase-js'

const supabase = createClient(
    'https://nyjquarbrqovdrzcwlfm.supabase.co',
    'sb_publishable_zSTsvcEm8qTGF6UBN_BtZQ_2fLo9Btv'
);


async function confirmar() 
{

    const usuario = localStorage.getItem("usuario");

    const checkboxesMarcados =
        document.querySelectorAll(
            'input[type="checkbox"]:checked'
        );

    for (const checkbox of checkboxesMarcados) {

        const { error } = await supabase
            .from("reservasruth")
            .insert({
                horario: checkbox.id,
                usuario: usuario
            });

        if (error) {
            console.error(error);
            alert("Error al guardar la reserva");
            return;
        }
    }

    alert("Reserva realizada correctamente");

    // Cerrar sesión
    await supabase
        .from("sesion_activa")
        .delete()
        .eq("usuario", usuario);

    localStorage.removeItem("usuario");

    window.location.href = "Confirmacion.html";
}

window.confirmar = confirmar;