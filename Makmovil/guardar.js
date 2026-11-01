import { createClient } from 'https://esm.sh/@supabase/supabase-js'

const supabase = createClient(
    'https://nyjquarbrqovdrzcwlfm.supabase.co',
    'sb_publishable_zSTsvcEm8qTGF6UBN_BtZQ_2fLo9Btv'
);

function confirmar() 
{

    let usuario = "Mario";

    for(let i = 1; i <= 3; i++){

        let checkbox = document.getElementById(`lunes${i}`);
        let libre = document.getElementById(`libre-l${i}`);

        if(checkbox.checked){
            libre.innerText = usuario;
        }

    }

}