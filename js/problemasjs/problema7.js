
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
function Borrar1(){
    var vnum = document.formulario.num1.value;
    formulario.num1.focus();
    if(vnum > '0'){
        document.formulario.num1.value = "";
    }else{
        document.getElementById('error__borrar_dato').style.display = 'block';
        document.getElementById('numero_1').classList.add('texto-error');
        setTimeout(() => {
            document.getElementById('error__borrar_dato').style.display = 'none';
            document.getElementById('numero_1').classList.remove('texto-error');
            
        }, 2000); 
    }
}
function Regresar(){
    document.getElementById('numero1').style.display = 'block';
    document.getElementById('numero2').style.display = 'none';
    formulario.num1.focus();
}
function continuarf(){
    var vnum = document.formulario.num1.value;
    var vnum2 = document.formulario.num2.value;
    if (vnum > '0' && vnum2 > '0'){
    document.getElementById('numero2').style.display = 'none';
    document.getElementById('total').style.display = 'block';   

   
    var vnum = parseFloat(vnum);
    var vnum2 = parseFloat(vnum2);  
    
    var iguales = vnum * vnum2;
    var suma = vnum + vnum2;
    var resta = vnum - vnum2;
    
   
    if(vnum == vnum2){        
       document.formulario.total.value = iguales;
    }else if(vnum > vnum2){       
        document.formulario.total.value = resta;
     }else if(vnum < vnum2){
           document.formulario.total.value = suma;  
         }
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
function Borrar2(){
    var vnum = document.formulario.num2.value;
    formulario.num2.focus();
    if(vnum > '0'){
        document.formulario.num2.value = "";
    }else{
        document.getElementById('error__borrar_dato2').style.display = 'block';
        document.getElementById('numero_2').classList.add('texto-error');
        setTimeout(() => {
            document.getElementById('error__borrar_dato2').style.display = 'none';
            document.getElementById('numero_2').classList.remove('texto-error');
            
        }, 2000); 
    }
}

function BorrarTodo(){
    document.formulario.num1.value = "";
    document.formulario.num2.value = "";
    document.formulario.total.value = "";
   
    document.getElementById('numero1').style.display = 'block';
    document.getElementById('total').style.display = 'none';
}
