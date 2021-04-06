

function validarn(e){
    var teclado = (document.all)?e.keyCode:e.which;
    if(teclado == 8)return true;

    var patron = /[0-9\d .]/;

    var prueba = String.fromCharCode(teclado);
    return patron.test(prueba);
}


function comision(){
    var valor = document.formulario.sueldo.value;
    var valorm = document.formulario.cantidadv.value;

    if(valor > 0, valorm > 0){
    var result = parseInt(valor);
    var ventas = parseInt(valorm);
    var comision = (ventas*(0.1 * result));
    var total = result+comision;
    

    document.formulario.sueldoti.value = "$" + total;
    document.formulario.sueldoc.value = "$" + comision;
    }else{
        alert("Completa los campos anteriores")
    }
    
}

function borrar1(){
    document.formulario.sueldo.value = "";
    document.formulario.cantidadv.value = "";
    document.formulario.sueldoti.value = "";
    document.formulario.sueldoc.value = "";    
}