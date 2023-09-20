

$(document).ready(function (){

    alert("Bienvenido(a) a Viajes Chile");

    $("#enviar").click(function(){  /* Función anonima + selector por ID*/
        alert("El correo fue enviado correctamente");
    });

    $(".card-title").click(function(){ /* selector en la etiqueta h4 se usa this para q se cambie solo de a 1*/
        $(this).css("color", "green");
    });

    $(".card-title").click(function(){  /* selector por CLASE pagina 29 dia 2 java, si hago clic en los titulos*/
    $(".card-text").toggle(); /* desaparecen los contenidos*/
});

});


/* tooltip */
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
