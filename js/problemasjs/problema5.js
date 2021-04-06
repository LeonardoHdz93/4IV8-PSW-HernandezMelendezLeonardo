

function validarn(e){
    var teclado = (document.all)?e.keyCode:e.which;
    if(teclado == 8)return true;

    var patron = /[1-9\d ]/;

    var prueba = String.fromCharCode(teclado);
    return patron.test(prueba);
}


function ftotal(){
    
    var mujeres = document.formulario.cantidadm.value;
    var hombres = document.formulario.cantidadh.value;
    

    if(mujeres > 0, hombres > 0 ){
        document.getElementById("mujeres").innerHTML = "";
        document.getElementById("hombres").innerHTML = "";

    var cmujeres = parseInt(mujeres);   
    var chombres = parseInt(hombres);
    var grupo = cmujeres + chombres;
    var pmujeres = cmujeres*100/grupo;
    var phombres = chombres*100/grupo;
    
    document.formulario.cgrupo.value = grupo;
    document.formulario.m.value = pmujeres + "%";
    document.formulario.h.value = phombres + "%";
    }else{
        
        alert("Completa los campos anteriores")
        formulario.cantidad.focus();
    }
    
}


function borrar1(){
    
    window.location.href = "./../problemas/problema3.html"
    document.formulario.sueldoti.value = "";
    document.formulario.cantidad.value = "";

}
