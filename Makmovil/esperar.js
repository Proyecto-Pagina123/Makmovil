import { createClient } from 'https://esm.sh/@supabase/supabase-js'

const supabase = createClient(
    'https://nyjquarbrqovdrzcwlfm.supabase.co',
    'sb_publishable_zSTsvcEm8qTGF6UBN_BtZQ_2fLo9Btv'
);

async function mostrarPosicion() {

    const usuario = localStorage.getItem("usuario");

    const { data } = await supabase
        .from("cola_espera")
        .select("*")
        .order("fecha");

    const personasAntes =
        data.findIndex(x => x.usuario === usuario);

    document.getElementById("fila").textContent =
        personasAntes;
}

mostrarPosicion();

supabase
  .channel('sesiones')
  .on(
    'postgres_changes',
    {
      event: 'DELETE',
      schema: 'public',
      table: 'sesion_activa'
    },
    async () => {

      const usuario = localStorage.getItem("usuario");

      const { data: cola } = await supabase
        .from("cola_espera")
        .select("*")
        .order("fecha")
        .limit(1);

      if (cola.length > 0 &&
          cola[1].usuario === usuario) {

        await supabase
          .from("sesion_activa")
          .insert({ usuario });

        await supabase
          .from("cola_espera")
          .delete()
          .eq("usuario", usuario);

        window.location.href = "Cuentas.html";
      }
    }
  )
  .subscribe((status) => {
      console.log("Realtime:", status);
  });