
alert("Completa todos los campos con un digito entre 0 y 10");
function validarn(e){
    var teclado = (document.all)?e.keyCode:e.which;
    if(teclado == 8)return true;

    var patron = /[1-9\d\.]/;

    var prueba = String.fromCharCode(teclado);
    return patron.test(prueba);
}

function SiguienteParcial2(){
    var cparcial1 = document.formulario.calificacion1.value;
    if(cparcial1 >= 0, cparcial1 <= 10.0){
    document.getElementById('parcial1').style.display = 'none';    
    document.getElementById('parcial2').style.display = 'block';
    formulario.calificacion2.focus();
    }else{
        if(cparcial1 > 10.0, cparcial1 = 'null'){
            alert("Pon un valor entre 0 y 10");
            formulario.calificacion1.focus();
        }             
    } 
      
}
function SiguienteParcial3(){   
    var cparcial2 = document.formulario.calificacion2.value;
    if(cparcial2 > 0, cparcial2 <= 10.0){
    document.getElementById('parcial2').style.display = 'none';
    document.getElementById('parcial3').style.display = 'block';
    formulario.calificacion3.focus();
    }else{
        if(cparcial2 > 10.0, cparcial1 = 'null'){
            alert("Pon un valor entre 0 y 10");
            formulario.calificacion2.focus();
        }             
    }    
}
function SiguienteExamen(){
    var cparcial3 = document.formulario.calificacion3.value;
    if(cparcial3 > 0, cparcial3 <= 10.0){
    document.getElementById('parcial3').style.display = 'none';
    document.getElementById('examen').style.display = 'block';
    formulario.examen.focus();
    }else{
        if(cparcial3 > 10.0, cparcial1 = 'null'){
            alert("Pon un valor entre 0 y 10");
            formulario.calificacion3.focus();
        }             
    }    
}
function SiguienteTrabajo(){
    var cexamen = document.formulario.examen.value;
    if(cexamen > 0, cexamen <= 10.0){ 
    document.getElementById('examen').style.display = 'none';
    document.getElementById('trabajo').style.display = 'block';
    formulario.trabajo.focus();
    }else{
        if(cexamen > 10.0, cparcial1 = 'null'){
            alert("Pon un valor entre 0 y 10");
            formulario.calificacion1.focus();
        }             
    }    
}
function ftotal(){
    /* DESPLEGAMOS EL LUGAR DONDE VA A IR EL RESULTADO  */
    document.getElementById('trabajo').style.display = 'none';
    document.getElementById('total').style.display = 'block';

    // OBTENEMOS VALORES PARA LAS OPERACIONES
    var cparcial1 = document.formulario.calificacion1.value;
    var cparcial2 = document.formulario.calificacion2.value;
    var cparcial3 = document.formulario.calificacion3.value;
    var cexamen = document.formulario.examen.value;
    var ctrabajo = document.formulario.trabajo.value;

    // VERIFICAMOS QUE SE COMPLETEN LOS CAMPOS CON DAROS FUNCIONALES  
   
        //PASAMOS A VALORES INT PARA PODER HACER LAS OPERACIONES 
    var calificacionparcial1 = parseInt(cparcial1);
    var calificacionparcial2 = parseInt(cparcial2);
    var calificacionparcial3 = parseInt(cparcial3);
    var calificacionexamen = parseInt(cexamen);
    var calificaciontrabajo = parseInt(ctrabajo);
    // HACEMOS LAS OPERACIONES
    var promedioparcial = (calificacionparcial1 + calificacionparcial2 + calificacionparcial3)/3;
    var examen = calificacionexamen;
    var trabajo = calificaciontrabajo;
    var promediofinal = (promedioparcial* 5.5 / 10) + (examen * 3.0 / 10) + (trabajo * 1.5 / 10);
    // DESPLEGAMOS RESULTADO 
    if(promediofinal <= 0){
        document.formulario.total.value = "0";    
    } else{
    document.formulario.total.value = promediofinal;
    }    
}


function borrar1(){
    document.formulario.calificacion1.value = "";
    document.formulario.calificacion2.value = "";
    document.formulario.calificacion3.value = "";
    document.formulario.examen.value = "";
    document.formulario.trabajo.value = "";
    document.getElementById('parcial1').style.display = 'block';
    document.getElementById('total').style.display = 'none';
    
    

}
