

alert("Introduce valores entre 0 y 9999");
            formulario.num1.focus();
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
function Siguientenumero2(){
    var vnum2 = document.formulario.num2.value;
    if(vnum2 >= 0, vnum2 <= 9999){
    document.getElementById('numero2').style.display = 'none';    
    document.getElementById('numero3').style.display = 'block';
    formulario.num3.focus();
    }else{
        if(vnum2 < 0){
            alert("Pon un valor entre 0 y 9999");
            formulario.num2.focus();
        }             
    } 
      
}

function continuarf(){
    /* DESPLEGAMOS EL LUGAR DONDE VA A IR EL RESULTADO  */
    document.getElementById('numero3').style.display = 'none';
    document.getElementById('total').style.display = 'block';

    // OBTENEMOS VALORES PARA LAS OPERACIONES
    var vnum = document.formulario.num1.value;
    var vnum2 = document.formulario.num2.value;
    var vnum3 = document.formulario.num3.value;
    

    // VERIFICAMOS QUE SE COMPLETEN LOS CAMPOS CON DAROS FUNCIONALES  
   
        //PASAMOS A VALORES INT PARA PODER HACER LAS OPERACIONES 
    var a = parseInt(vnum);
    var b = parseInt(vnum2);
    var c = parseInt(vnum3);
    
    // HACEMOS LAS OPERACIONES
    if(c>=b && c>=a){
        document.formulario.total.value = c
    }else if(b>=a && b>=c){
        document.formulario.total.value = b
    }else if(a>=b && a>=c){
        document.formulario.total.value = a
    }
}


function borrar1(){
    document.formulario.num1.value = "";
    document.formulario.num2.value = "";
    document.formulario.num3.value = "";
    document.formulario.total.value = "";
   
   
    document.getElementById('numero1').style.display = 'block';
    document.getElementById('total').style.display = 'none';
    formulario.num1.focus();
}

