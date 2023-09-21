

$(document).ready(function (){

    alert("Bienvenido(a) a Viajes Chile");

    $("#enviar").click(function(){  /* Función anonima + selector por ID*/
        alert("El correo fue enviado correctamente");
    });

    $(".card-title2").click(function(){ /* q se cambie solo de a 1*/
        $(this).css("color", "green");
    });

    $(".card-title2").click(function(){  
    $(".card-text2").toggle(); /* desaparecen los contenidos*/
    });

});


/* tooltip */
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
