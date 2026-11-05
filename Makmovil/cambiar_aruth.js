import { createClient } from 'https://esm.sh/@supabase/supabase-js'

const supabase = createClient(
    'https://nyjquarbrqovdrzcwlfm.supabase.co',
    'sb_publishable_zSTsvcEm8qTGF6UBN_BtZQ_2fLo9Btv'
);


async function cambiar_ruth() 
{

    const usuario = localStorage.getItem("usuario");

    const checkboxesMarcados =
        document.querySelectorAll(
            'input[type="checkbox"]:checked'
        );

    for (const checkbox of checkboxesMarcados) {

        const { error } = await supabase
            .from("reservas")
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

    window.location.href = "Ruth.html";
}

window.cambiar_ruth = cambiar_ruth;