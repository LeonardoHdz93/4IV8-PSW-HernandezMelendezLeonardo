

function validarn(e){
    var teclado = (document.all)?e.keyCode:e.which;
    if(teclado == 8)return true;

    var patron = /[1-9\d ]/;

    var prueba = String.fromCharCode(teclado);
    return patron.test(prueba);
}

function Siguiente(){
    var mujeres = document.formulario.cantidad_mujeres.value;
    if(mujeres > '0'){
        document.getElementById('div_cantidad_mujeres').style.display = 'none';
        document.getElementById('div_cantidad_hombres').style.display = 'block';
        formulario.cantidad_hombres.focus();
    }else{
        formulario.cantidad_mujeres.focus();
        document.getElementById('error__dato').style.display = 'block';
        document.getElementById('mujeres').classList.add('texto-error');
        setTimeout(() => {
            document.getElementById('error__dato').style.display = 'none';
            document.getElementById('mujeres').classList.remove('texto-error');
            
        }, 2000);
    }
}
function Calcular(){
    
    var mujeres = document.formulario.cantidad_mujeres.value;
    var hombres = document.formulario.cantidad_hombres.value;
    

    if(mujeres > 0, hombres > 0 ){
        document.getElementById("div_cantidad_hombres").style.display = 'none';
        document.getElementById("div_resultado").style.display = 'block';

    var cmujeres = parseInt(mujeres);   
    var chombres = parseInt(hombres);
    var grupo = cmujeres + chombres;
    var pmujeres = cmujeres*100/grupo;
    var phombres = chombres*100/grupo;
    
    
    document.formulario.porcentaje_mujeres.value = pmujeres + "%";
    document.formulario.porcentaje_hombres.value = phombres + "%";
    }else{
        formulario.cantidad_hombres.focus();
        document.getElementById('error__dato2').style.display = 'block';
        document.getElementById('hombres').classList.add('texto-error');
        setTimeout(() => {
            document.getElementById('error__dato2').style.display = 'none';
            document.getElementById('hombres').classList.remove('texto-error');
            
        }, 2000);
    }
    
}
// Funciones Regresar
function Regresar(){
    document.getElementById('div_cantidad_hombres').style.display ='none';
    document.getElementById('div_cantidad_mujeres').style.display ='block';
    formulario.cantidad_mujeres.focus();
}
function Regresar2(){
    document.getElementById('div_cantidad_hombres').style.display ='block';
    document.getElementById('div_resultado').style.display ='none';
    formulario.cantidad_hombres.focus();
}
// Funciones Borrar

function Borrar(){
    var mujeres = document.formulario.cantidad_mujeres.value;
    formulario.cantidad_mujeres.focus();
    if(mujeres > '0'){
        document.formulario.cantidad_mujeres.value = "";
    }else {
        formulario.cantidad_mujeres.focus();
        document.getElementById('error__borrar_dato').style.display = 'block';
        document.getElementById('mujeres').classList.add('texto-error');
        setTimeout(() => {
            document.getElementById('error__borrar_dato').style.display = 'none';
            document.getElementById('mujeres').classList.remove('texto-error');
            
        }, 2000);
    }
}
function Borrar2(){
    var hombres = document.formulario.cantidad_hombres.value;
    formulario.cantidad_hombres.focus();
    if(hombres > '0'){
        document.formulario.cantidad_hombres.value = "";
    }else {
        formulario.cantidad_hombres.focus();
        document.getElementById('error__borrar_dato2').style.display = 'block';
        document.getElementById('hombres').classList.add('texto-error');
        setTimeout(() => {
            document.getElementById('error__borrar_dato2').style.display = 'none';
            document.getElementById('hombres').classList.remove('texto-error');
            
        }, 2000);
    }
}

function BorrarTodo(){
    document.getElementById('div_cantidad_mujeres').style.display = 'block';
    document.getElementById('div_resultado').style.display = 'none';

    document.formulario.cantidad_mujeres.value = "";
    document.formulario.cantidad_hombres.value = "";
    document.formulario.porcentaje_mujeres.value = "";
    document.formulario.porcentaje_hombres.value = "";

    formulario.cantidad_mujeres.focus();
}
