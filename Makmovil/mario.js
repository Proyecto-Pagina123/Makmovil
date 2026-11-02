const mapa = {
    lunes1: "libre-l1",
    martes1: "libre-m1",

    lunes2: "libre-l2",
    martes2: "libre-m2",

    lunes3: "libre-l3",
    martes3: "libre-m3",

    miercoles1: "libre-mi1",
    jueves1: "libre-j1",

    miercoles2: "libre-mi2",
    jueves2: "libre-j2",

    miercoles3: "libre-mi3",
    jueves3: "libre-j3",

    viernes1: "libre-v1",
    viernes2: "libre-v2",
    viernes3: "libre-v3",

    sabado1: "libre-s1",
    sabado2: "libre-s2",
    sabado3: "libre-s3",
    sabado4: "libre-s4",
    sabado5: "libre-s5",
    sabado6: "libre-s6",
    sabado7: "libre-s7",
    sabado8: "libre-s8",
    sabado9: "libre-s9",
    sabado10: "libre-s10"
};

async function cargarReservas() 
{

    const { data, error } = await supabaseClient
        .from("reservas")
        .select("*");

    if (error) {
        console.error(error);
        return;
    }

    data.forEach(reserva => {

        document.getElementById(
        mapa[reserva.horario]
        ).textContent = reserva.usuario;

        document.getElementById(
        reserva.horario).style.display = "none";

    });
}

cargarReservas();