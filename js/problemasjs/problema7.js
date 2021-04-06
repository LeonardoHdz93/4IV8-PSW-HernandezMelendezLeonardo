
function validarn(e){
    var teclado = (document.all)?e.keyCode:e.which;
    if(teclado == 8)return true;

    var patron = /[1-9\d\.]/;

    var prueba = String.fromCharCode(teclado);
    return patron.test(prueba);
}

function Siguientenumero(){
    var vnum = document.formulario.num1.value;
    if(vnum >= 0, vnum <= 9999){
    document.getElementById('numero1').style.display = 'none';    
    document.getElementById('numero2').style.display = 'block';
    formulario.num2.focus();
    }else{
        if(vnum < 0){
            alert("Pon un valor entre 0 y 9999");
            formulario.num1.focus();
        }             
    } 
      
}

function continuarf(){
    /* DESPLEGAMOS EL LUGAR DONDE VA A IR EL RESULTADO  */
    document.getElementById('numero2').style.display = 'none';
    document.getElementById('total').style.display = 'block';

    // OBTENEMOS VALORES PARA LAS OPERACIONES
    var vnum = document.formulario.num1.value;
    var vnum2 = document.formulario.num2.value;
    

    // VERIFICAMOS QUE SE COMPLETEN LOS CAMPOS CON DAROS FUNCIONALES  
   
        //PASAMOS A VALORES INT PARA PODER HACER LAS OPERACIONES 
    var vnum = parseInt(vnum);
    var vnum2 = parseInt(vnum2);
    
    // HACEMOS LAS OPERACIONES
    
    var iguales = vnum * vnum2;
    var suma = vnum + vnum2;
    var resta = vnum - vnum2;
    
   
    if(vnum == vnum2){
        
       document.formulario.total.value = iguales
    }else{
    if(vnum > vnum2){
       
        document.formulario.total.value = resta
     }else{
    if(vnum < vnum2){
           document.formulario.total.value = suma
         }
     }
     
    
}
}


function borrar1(){
    document.formulario.num1.value = "";
    document.formulario.num2.value = "";
   
    document.getElementById('numero1').style.display = 'block';
    document.getElementById('total').style.display = 'none';
}
