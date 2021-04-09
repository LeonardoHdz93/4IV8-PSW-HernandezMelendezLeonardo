

function validarn(e){
    var teclado = (document.all)?e.keyCode:e.which;
    if(teclado == 8)return true;

    var patron = /[0-9\d .]/;

    var prueba = String.fromCharCode(teclado);
    return patron.test(prueba);
}
function Siguiente1(){
    var cantidad = document.formulario.cantidad_valor.value;
    if(cantidad > '0'){
        document.getElementById('div__cantidad').style.display = 'none';
        document.getElementById('div__meses').style.display = 'block';
        formulario.meses_valor.focus();
    }else{
        formulario.cantidad_valor.focus();
        document.getElementById('error__dato').style.display = 'block';
        document.getElementById('texto1').classList.add('texto-error');
        setTimeout(() => {
            document.getElementById('error__dato').style.display = 'none';
            document.getElementById('texto1').classList.remove('texto-error');
        }, 2500);
    }
}
function BorrarCantidad(){
    formulario.cantidad_valor.focus();
    var cantidad = document.formulario.cantidad_valor.value;
    if(cantidad < '0'){
        document.getElementById('error__borrar_dato').style.display = 'block';
        document.getElementById('texto1').classList.add('texto-error');
        setTimeout(() => {
            document.getElementById('error__borrar_dato').style.display = 'none';
            document.getElementById('texto1').classList.remove('texto-error');
        }, 2000);
    }else{
        document.formulario.cantidad_valor.value = '';
    }
}
function RegresarCantidad(){
    document.getElementById('div__cantidad').style.display = 'block';
    document.getElementById('div__meses').style.display = 'none';
}
function comision(){
    var valor = document.formulario.cantidad_valor.value;
    var valorm = document.formulario.meses_valor.value;

    if(valor > 0, valorm > 0){
        document.getElementById('div__resultado').style.display = 'block';
        document.getElementById('div__meses').style.display = 'none';

    var result = parseFloat(valor);
    var ventas = parseFloat(valorm);
    var comision = (ventas*(0.1 * result));
    var total = result+comision;
    

    document.formulario.resultado_valor.value = total;
    
    }else{
        document.getElementById('error__borrar_dato2').style.display = 'block';
        document.getElementById('texto2').classList.add('texto-error');
        setTimeout(() => {
            document.getElementById('error__borrar_dato2').style.display = 'none';
            document.getElementById('texto2').classList.remove('texto-error');
        }, 2000);
    }
    
}
function RegresarMeses(){
    document.getElementById('div__resultado').style.display = 'none';
    document.getElementById('div__meses').style.display = 'block';
}
function BorrarMeses(){
    formulario.meses_valor.focus();
    var cantidad = document.formulario.meses_valor.value;
    if(cantidad < '0'){
        document.getElementById('error__borrar_dato2').style.display = 'block';
        document.getElementById('texto2').classList.add('texto-error');
        setTimeout(() => {
            document.getElementById('error__borrar_dato2').style.display = 'none';
            document.getElementById('texto2').classList.remove('texto-error');
        }, 2000);
    }else{
        document.formulario.meses_valor.value = '';
    }
}

function BorrarTodo(){
    document.formulario.meses_valor.value = "";
    document.formulario.cantidad_valor.value = "";
    document.formulario.resultado_valor.value = "";

    document.getElementById('div__resultado').style.display = 'none';
    document.getElementById('div__cantidad').style.display = 'block';

    formulario.cantidad_valor.focus();
}