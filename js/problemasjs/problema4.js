

function validarn(e){
    var teclado = (document.all)?e.keyCode:e.which;
    if(teclado == 8)return true;

    var patron = /[1-9\d\.]/;

    var prueba = String.fromCharCode(teclado);
    return patron.test(prueba);
}
//Funciones Regresar
function ParcialAnterior1(){
    document.getElementById('parcial2').style.display = 'none';
    document.getElementById('parcial1').style.display = 'block';
    formulario.calificacion1.focus();
}
function ParcialAnterior2(){
    document.getElementById('parcial3').style.display = 'none';
    document.getElementById('parcial2').style.display = 'block';
    formulario.calificacion2.focus();
}
function ParcialAnterior3(){
    document.getElementById('examen').style.display = 'none';
    document.getElementById('parcial3').style.display = 'block';
    formulario.calificacion3.focus();
}
function ExamenAnterior(){
    document.getElementById('trabajo').style.display = 'none';
    document.getElementById('examen').style.display = 'block';
    formulario.calificacion_examen.focus();
}
function TrabajoAnterior(){
    document.getElementById('trabajo').style.display = 'none';
    document.getElementById('total').style.display = 'block';
    formulario.calificacion_trabajo.focus();
}
// Botones Siguiente
function SiguienteParcial1(){
    var calificacion_parcial_1 = document.formulario.calificacion1.value;
    if(calificacion_parcial_1 >= '0' && calificacion_parcial_1 <= 10.0){
    document.getElementById('parcial1').style.display = 'none';
    document.getElementById('parcial2').style.display = 'block';
    formulario.calificacion2.focus();
    }else{
        formulario.calificacion1.focus();
        document.getElementById('error__borrar_dato').style.display = 'block';
        document.getElementById('texto1').classList.add('texto-error');
        setTimeout(() => {
            document.getElementById('error__borrar_dato').style.display = 'none';
            document.getElementById('texto1').classList.remove('texto-error');
        }, 2000);
    }
}
function SiguienteParcial2(){
    var calificacion_parcial_2 = document.formulario.calificacion2.value;
    if(calificacion_parcial_2 >= '0' && calificacion_parcial_2 <= 10.0){
    document.getElementById('parcial2').style.display = 'none';    
    document.getElementById('parcial3').style.display = 'block';
    formulario.calificacion3.focus();
    }else{
        formulario.calificacion2.focus();
        document.getElementById('error__borrar_dato2').style.display = 'block';
        document.getElementById('texto2').classList.add('texto-error');
        setTimeout(() => {
            document.getElementById('error__borrar_dato2').style.display = 'none';
            document.getElementById('texto2').classList.remove('texto-error');
        }, 2000);       
    } 
      
}
function SiguienteParcial3(){   
    var calificacion_parcial_3 = document.formulario.calificacion3.value;
    if(calificacion_parcial_3 > '0' && calificacion_parcial_3 <= 10.0){
    document.getElementById('parcial3').style.display = 'none';
    document.getElementById('examen').style.display = 'block';
    formulario.calificacion_examen.focus();
    }else{
        formulario.calificacion3.focus();
        document.getElementById('error__borrar_dato3').style.display = 'block';
        document.getElementById('texto3').classList.add('texto-error');
        setTimeout(() => {
            document.getElementById('error__borrar_dato3').style.display = 'none';
            document.getElementById('texto3').classList.remove('texto-error');
        }, 2000);         
    }    
}
function SiguienteExamen(){
    var calificacion_examen1 = document.formulario.calificacion_examen.value;
    if(calificacion_examen1 >= '0' && calificacion_examen1 <= 10.0){
    document.getElementById('trabajo').style.display = 'block';
    document.getElementById('examen').style.display = 'none';
    formulario.calificacion_trabajo.focus();
    }else{
        formulario.calificacion_examen.focus();
        document.getElementById('error__borrar_dato4').style.display = 'block';
        document.getElementById('texto4').classList.add('texto-error');
        setTimeout(() => {
            document.getElementById('error__borrar_dato4').style.display = 'none';
            document.getElementById('texto4').classList.remove('texto-error');
        }, 2000);     
    }    
}
// funcion Calcular 
function CalcularCalificacion(){
    var ctrabajo = document.formulario.calificacion_trabajo.value;
    if(ctrabajo >= '0' && ctrabajo <= 10.0){
    document.getElementById('trabajo').style.display = 'none';
    document.getElementById('total').style.display = 'block';

    
    var cparcial1 = document.formulario.calificacion1.value;
    var cparcial2 = document.formulario.calificacion2.value;
    var cparcial3 = document.formulario.calificacion3.value;
    var cexamen = document.formulario.calificacion_examen.value;
    var ctrabajo = document.formulario.calificacion_trabajo.value;

    var calificacionparcial1 = parseFloat(cparcial1);
    var calificacionparcial2 = parseFloat(cparcial2);
    var calificacionparcial3 = parseFloat(cparcial3);
    var calificacionexamen = parseFloat(cexamen);
    var calificaciontrabajo = parseFloat(ctrabajo);
    
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
    }else{
        formulario.calificacion_trabajo.focus();
        document.getElementById('error__borrar_dato5').style.display = 'block';
        document.getElementById('texto5').classList.add('texto-error');
        setTimeout(() => {
            document.getElementById('error__borrar_dato5').style.display = 'none';
            document.getElementById('texto5').classList.remove('texto-error');
        }, 2000);  
    }
}
//Funciones borrar
function BorrarParcial1(){
    var calificacion_parcial_1 = document.formulario.calificacion1.value;
    formulario.calificacion1.focus();
    if(calificacion_parcial_1 < '0'){

        document.getElementById('error__borrar_dato').style.display = 'block';
        document.getElementById('texto1').classList.add('texto-error');
        setTimeout(() => {
            document.getElementById('error__borrar_dato').style.display = 'none';
            document.getElementById('texto1').classList.remove('texto-error');
        }, 2000);
    }else{
        
        document.formulario.calificacion1.value = "";
    }
    
}
function BorrarParcial2(){
    var calificacion_parcial_1 = document.formulario.calificacion2.value;
    formulario.calificacion2.focus();

    if(calificacion_parcial_1 < '0'){
        document.getElementById('error__borrar_dato2').style.display = 'block';
        document.getElementById('texto2').classList.add('texto-error');
        setTimeout(() => {
            document.getElementById('error__borrar_dato2').style.display = 'none';
            document.getElementById('texto2').classList.remove('texto-error');
        }, 2000);
    }else{
        document.formulario.calificacion2.value = "";
    }
    
}
function BorrarParcial3(){
    var calificacion_parcial_3 = document.formulario.calificacion3.value;
    formulario.calificacion3.focus();

    if(calificacion_parcial_3 < '0'){
        document.getElementById('error__borrar_dato3').style.display = 'block';
        document.getElementById('texto3').classList.add('texto-error');
        setTimeout(() => {
            document.getElementById('error__borrar_dato3').style.display = 'none';
            document.getElementById('texto3').classList.remove('texto-error');
        }, 2000);
    }else{
        document.formulario.calificacion3.value = "";
    }
    
    
}
function BorrarExamen(){
    var calificacion_examen1 = document.formulario.calificacion_examen.value;
    formulario.calificacion_examen.focus();
    if(calificacion_examen1 < '0'){

        document.getElementById('error__borrar_dato4').style.display = 'block';
        document.getElementById('texto4').classList.add('texto-error');
        setTimeout(() => {
            document.getElementById('error__borrar_dato4').style.display = 'none';
            document.getElementById('texto4').classList.remove('texto-error');
        }, 2000);
    }else{
        document.formulario.calificacion_examen.value = "";
    }    
}
function BorrarTrabajo(){
    var calificacion_trabajo1 = document.formulario.calificacion_trabajo.value;
    formulario.calificacion_trabajo.focus();
    if(calificacion_trabajo1 < '0'){

        document.getElementById('error__borrar_dato5').style.display = 'block';
        document.getElementById('texto5').classList.add('texto-error');
        setTimeout(() => {
            document.getElementById('error__borrar_dato5').style.display = 'none';
            document.getElementById('texto5').classList.remove('texto-error');
        }, 2000);
    }else{
        document.formulario.calificacion_trabajo.value = "";
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
