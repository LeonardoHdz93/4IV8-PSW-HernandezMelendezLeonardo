
function validarn(e){    
    var teclado = (document.all)?e.keyCode:e.which;
    if(teclado == 8)return true;
    
    var patron = /[1-9\d]/;
    
    var prueba = String.fromCharCode(teclado);
    return patron.test(prueba);
    }

function Siguiente1(){
    var meses_empresa = document.formulario.formulario__antiguedad_valor.value;
    

    if(meses_empresa > '0'){
        
        document.getElementById('formulario__antiguedad').style.display = 'none';
        document.getElementById('formulario__sueldo').style.display = 'block';
        formulario.formulario__sueldo_valor.focus();   
    }else {
        formulario.formulario__antiguedad_valor.focus();
        document.getElementById('error__dato').style.display = 'block';
        document.getElementById('texto').classList.add('texto-error');
        setTimeout(() => {
            document.getElementById('error__dato').style.display = 'none';
            document.getElementById('texto').classList.remove('texto-error');
        }, 2500);
    }
}


function CalcularSueldo(){
    var meses_empresa = document.formulario.formulario__antiguedad_valor.value;
    var sueldo_valor = document.formulario.formulario__sueldo_valor.value;

    if(meses_empresa > 0 && sueldo_valor > 0){
    
    document.getElementById('total').style.display = 'block';
    document.getElementById('formulario__sueldo').style.display = 'none';

    if(meses_empresa < 12){
        var sueldo5 = sueldo_valor * 0.05;
        document.formulario.totalpaga.value =  sueldo5;
    }else if(meses_empresa >= 12 && meses_empresa < 24){
        var sueldo7 = sueldo_valor * 0.07;
        document.formulario.totalpaga.value =  sueldo7;
    }else if(meses_empresa >= 24 && meses_empresa < 60){
        var sueldo10 = sueldo_valor * 0.1;
        document.formulario.totalpaga.value =  sueldo10;
    }else if(meses_empresa >= 60 && meses_empresa < 120){
        var sueldo15 = sueldo_valor * 0.15;
        document.formulario.totalpaga.value = sueldo15;
    }else if(meses_empresa >= 120){
        var sueldo20 = sueldo_valor * 0.2;
        document.formulario.totalpaga.value =  sueldo20;
    }
    }else if(sueldo_valor <= '0'){
        formulario.formulario__sueldo_valor.focus();
        document.getElementById('error__dato2').style.display = 'block';
        document.getElementById('texto2').classList.add('texto-error');
        setTimeout(() => {
            document.getElementById('error__dato2').style.display = 'none';
            document.getElementById('texto2').classList.remove('texto-error');
        }, 2500);
    }
    
}

function RegresarMeses(){
    
        document.getElementById('formulario__antiguedad').style.display = 'block';
        document.getElementById('formulario__sueldo').style.display = 'none';
        formulario.formulario__sueldo_valor.focus();
}
function RegresarSueldo(){
    
        document.getElementById('total').style.display = 'none';
        document.getElementById('formulario__sueldo').style.display = 'block';
        formulario.formulario__sueldo_valor.focus();
}

function BorrarMeses(){   
    formulario.formulario__antiguedad_valor.focus();
    var meses_empresa = document.formulario.formulario__antiguedad_valor.value; 
    if(meses_empresa < '0'){
        
        document.getElementById('error__borrar_dato').style.display = 'block';
        document.getElementById('texto').classList.add('texto-error');
        setTimeout(() => {
            document.getElementById('error__borrar_dato').style.display = 'none';
            document.getElementById('texto').classList.remove('texto-error');
        }, 2000);
    }else{
    document.formulario.formulario__antiguedad_valor.value = '';
    }
    
}
function BorrarSueldo(){    
    var sueldo_valor = document.formulario.formulario__sueldo_valor.value;
    
    if(sueldo_valor < '0'){
        document.getElementById('error__borrar_dato2').style.display = 'block';
        setTimeout(() => {
            document.getElementById('error__borrar_dato2').style.display = 'none';
        }, 2000);
    }else{
        document.formulario.formulario__sueldo_valor.value = '';
    }
    
}
function BorrarTodo(){
     document.formulario.formulario__antiguedad_valor.value = '';
     document.formulario.formulario__sueldo_valor.value = '';
     document.formulario.totalpaga.value = '';
     document.getElementById('total').style.display = 'none';
    document.getElementById('formulario__antiguedad').style.display = 'block';
}