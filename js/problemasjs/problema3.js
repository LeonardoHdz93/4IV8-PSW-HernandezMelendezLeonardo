

function validarn(e){
    var teclado = (document.all)?e.keyCode:e.which;
    if(teclado == 8)return true;

    var patron = /[1-9\d ]/;

    var prueba = String.fromCharCode(teclado);
    return patron.test(prueba);
}


function ftotal(){
    
    var valor = document.formulario.cantidad.value;
    

    if(valor > 0 ){
        document.getElementById("articulos").innerHTML = "";
    var result = parseInt(valor);    
    var interes = result*15;
    var vsubtotal = interes;
    var vtotal = vsubtotal-(vsubtotal*0.15);

    document.formulario.subtotal.value = "$" + vsubtotal;
    document.formulario.total.value = "$" + vtotal;
    }else{
        if(valor<0.9){
            alert("El minimo de productos permitidos es 1")
        formulario.cantidad.focus();
        }
        alert("Completa los campos anteriores")
        formulario.cantidad.focus();
    }
    
}


function borrar1(){
    
    window.location.href = "./../problemas/problema3.html"
    document.formulario.sueldoti.value = "";
    document.formulario.cantidad.value = "";

}
