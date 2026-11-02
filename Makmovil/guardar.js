import { createClient } from 'https://esm.sh/@supabase/supabase-js'

const supabase = createClient(
    'https://nyjquarbrqovdrzcwlfm.supabase.co',
    'sb_publishable_zSTsvcEm8qTGF6UBN_BtZQ_2fLo9Btv'
);

async function confirmar() {

    const usuario = localStorage.getItem("usuario");

    const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');

    for (const checkbox of checkboxes) {

        await supabaseClient
            .from("reservas")
            .insert({
                horario: checkbox.id,
                usuario: usuario
            });

    }

    location.reload();
}