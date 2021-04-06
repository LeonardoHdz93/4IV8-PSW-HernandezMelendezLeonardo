

function validarn(e){
    var teclado = (document.all)?e.keyCode:e.which;
    if(teclado == 8)return true;

    var patron = /[0-9\d .]/;

    var prueba = String.fromCharCode(teclado);
    return patron.test(prueba);
}


function interes(){
    var valor = document.formulario.cantidad.value;
    var valorm = document.formulario.cantidadm.value;

    if(valor > 0, valorm > 0){
    var result = parseInt(valor);
    var meses = parseInt(valorm);
    var interes = result*(meses*0.02);
    var total = result+interes;
    

    document.formulario.sueldoti.value = "$" + total;
    }else{
        alert("Completa los campos anteriores")
    }
    
}

function borrar1(){
    document.formulario.sueldoti.value = "";
    document.formulario.cantidad.value = "";
    document.formulario.cantidadm.value = "";
}