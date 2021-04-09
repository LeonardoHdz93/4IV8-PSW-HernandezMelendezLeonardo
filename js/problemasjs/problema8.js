


function validarn(e){
    var teclado = (document.all)?e.keyCode:e.which;
    if(teclado == 8)return true;

    var patron = /[1-9\d\.]/;

    var prueba = String.fromCharCode(teclado);
    return patron.test(prueba);
}

function Siguientenumero(){
    var vnum = document.formulario.num1.value;
    if(vnum > '0' && vnum <= 9999){
    document.getElementById('numero1').style.display = 'none';    
    document.getElementById('numero2').style.display = 'block';
    formulario.num2.focus();
    }else{
        formulario.num1.focus();
        document.getElementById('error__dato').style.display = 'block';
        document.getElementById('numero_1').classList.add('texto-error');
        setTimeout(() => {
            document.getElementById('error__dato').style.display = 'none';
            document.getElementById('numero_1').classList.remove('texto-error');
            
        }, 2000);             
    }  
}
function Siguientenumero2(){
    var vnum = document.formulario.num2.value;
    if(vnum > '0' && vnum <= 9999){
    document.getElementById('numero2').style.display = 'none';    
    document.getElementById('numero3').style.display = 'block';
    formulario.num3.focus();
    }else{
        formulario.num2.focus();
        document.getElementById('error__dato2').style.display = 'block';
        document.getElementById('numero_2').classList.add('texto-error');
        setTimeout(() => {
            document.getElementById('error__dato2').style.display = 'none';
            document.getElementById('numero_2').classList.remove('texto-error');
            
        }, 2000);             
    } 
      
}
function continuarf(){
    var vnum = document.formulario.num1.value;
    var vnum2 = document.formulario.num2.value;
    var vnum3 = document.formulario.num3.value;
    if(vnum3 > '0' && vnum3 <= 9999){
    document.getElementById('numero3').style.display = 'none';
    document.getElementById('total').style.display = 'block';
    
    var a = parseFloat(vnum);
    var b = parseFloat(vnum2);
    var c = parseFloat(vnum3);
    
    if(c>=b && c>=a){
        document.formulario.total.value = "El numero mas grande es " + c
    }else if(b>=a && b>=c){
        document.formulario.total.value = "El numero mas grande es " + b
    }else if(a>=b && a>=c){
        document.formulario.total.value = "El numero mas grande es " + a
    }
}else{
    formulario.num2.focus();
        document.getElementById('error__dato3').style.display = 'block';
        document.getElementById('numero_3').classList.add('texto-error');
        setTimeout(() => {
            document.getElementById('error__dato3').style.display = 'none';
            document.getElementById('numero_3').classList.remove('texto-error');
            
        }, 2000);     
    }
}
function Regresar1(){
    document.getElementById('numero1').style.display = 'block';
    document.getElementById('numero2').style.display = 'none';
    formulario.num1.focus();
}
function Regresar2(){
    document.getElementById('numero2').style.display = 'block';
    document.getElementById('numero3').style.display = 'none';
    formulario.num2.focus();
}
function Regresar3(){
    document.getElementById('numero3').style.display = 'block';
    document.getElementById('total').style.display = 'none';
    formulario.num3.focus();
}
function Borrar1(){
    var vnum = document.formulario.num1.value;
    if(vnum > '0' && vnum <= 9999){
        document.formulario.num1.value = '';
        formulario.num1.focus();
        }else{
            formulario.num1.focus();
            document.getElementById('error__borrar_dato').style.display = 'block';
            document.getElementById('numero_1').classList.add('texto-error');
            setTimeout(() => {
                document.getElementById('error__borrar_dato').style.display = 'none';
                document.getElementById('numero_1').classList.remove('texto-error');
                
            }, 2000);   
    }
}
function Borrar2(){
    var vnum = document.formulario.num2.value;
    if(vnum > '0' && vnum <= 9999){
        document.formulario.num2.value = '';
        formulario.num2.focus();
        }else{
            formulario.num2.focus();
            document.getElementById('error__borrar_dato2').style.display = 'block';
            document.getElementById('numero_2').classList.add('texto-error');
            setTimeout(() => {
                document.getElementById('error__borrar_dato2').style.display = 'none';
                document.getElementById('numero_2').classList.remove('texto-error');
                
            }, 2000);   
    }
}
function Borrar3(){
    var vnum = document.formulario.num3.value;
    if(vnum > '0' && vnum <= 9999){
        document.formulario.num3.value = '';
        formulario.num3.focus();
        }else{
            formulario.num3.focus();
            document.getElementById('error__borrar_dato3').style.display = 'block';
            document.getElementById('numero_3').classList.add('texto-error');
            setTimeout(() => {
                document.getElementById('error__borrar_dato3').style.display = 'none';
                document.getElementById('numero_3').classList.remove('texto-error');
                
            }, 2000);   
    }
}
function BorrarTodo(){
    document.formulario.num1.value = "";
    document.formulario.num2.value = "";
    document.formulario.num3.value = "";
    document.formulario.total.value = "";
   
   
    document.getElementById('numero1').style.display = 'block';
    document.getElementById('total').style.display = 'none';
    formulario.num1.focus();
}

