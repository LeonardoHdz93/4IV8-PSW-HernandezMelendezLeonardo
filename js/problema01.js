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
    var result = parseInt(valor);
    var interes = result*0.02;
    var total = result+interes;

    document.formulario.sueldoti.value = "$" + total;
    
    
}

function borrar1(){
    document.formulario.sueldoti.value = "";
    document.formulario.cantidad.value = "";
}