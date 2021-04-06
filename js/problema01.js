/*
Vamos a crear una funcion que se encargue 
de que solo se admitan numeros
*/

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
}

function validardos(formulario){

    if(formulario.cantidadm.value <3 > 24){
        alert("Pon un numero entre 3 y 24 meses");
        formulario.cantidadm.focus();
    return false;
    }

    var checkOk = "3"+"4"+"5"+"6"+"7"+"8"+"9"+"10"+"11"+"12"+"13"+"14"+"15"+"16"+"17"+"18"+"19"+"20"+"21"+"22"+"23"+"24";

    var checkStr = formulario.cantidadm.value;

    var allValid = true;

    for(var i  = 0; i < checkStr.length; i++) {
        var ch = checkStr.charAt(i);
        for(var j = 0;  j < checkOk.length; j++)
        if(ch == checkOk.charAt(j))    
                break;
        
       if(j == checkOk.length){
           allValid = false;
           break;
       } 
    }

    if(!allValid){
        alert("Pon un numero entre 3 y 24 meses");
        formulario.cantidadm.focus();
        return false;
    }
}
