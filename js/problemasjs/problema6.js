
const fecha = new Date();
var mesactualvalidacion = fecha.getDay();

function validarn(e){
var teclado = (document.all)?e.keyCode:e.which;
if(teclado == 8)return true;

var patron = /[1-9\d]/;

var prueba = String.fromCharCode(teclado);
return patron.test(prueba);
}

// ano_nacimiento
function SiguienteMesCumpleaños(){
    const añoactualvalidacion = fecha.getFullYear()    
    var anon = document.formulario.año_n.value;
    if(anon > 0 && anon <= añoactualvalidacion){
        document.getElementById('ano_nacimiento').style.display = 'none';
        document.getElementById('mes_nacimiento').style.display = 'block';
        formulario.mes_n.focus();
    }else{
        formulario.año_n.focus();
        document.getElementById('error__dato').style.display = 'block';
        document.getElementById('año_nacimiento_texto').classList.add('texto-error');
        setTimeout(() => {
            document.getElementById('error__dato').style.display = 'none';
            document.getElementById('año_nacimiento_texto').classList.remove('texto-error');
            
        }, 2000);
    }
}
function BorrarAnoCumpleaños(){
    var anocumple = document.formulario.año_n.value;
    formulario.año_n.focus();
    if (anocumple > '0'){
        document.formulario.año_n.value = "";
    }else{
        formulario.año_n.focus();
        document.getElementById('error__borrar_dato').style.display = 'block';
        document.getElementById('año_nacimiento_texto').classList.add('texto-error');
        setTimeout(() => {
            document.getElementById('error__borrar_dato').style.display = 'none';
            document.getElementById('año_nacimiento_texto').classList.remove('texto-error');
            
        }, 2000);
    }
    
    
}
// mes_nacimiento
function SiguienteDiaCumpleaños(){
    var mesn = document.formulario.mes_n.value;
    if(mesn > '0' && mesn <= '12'){
        document.getElementById('mes_nacimiento').style.display = 'none';
        document.getElementById('dia_nacimiento').style.display = 'block';
        formulario.dia_n.focus();
    }
    else{
        formulario.mes_n.focus();
        document.getElementById('error__dato2').style.display = 'block';
        document.getElementById('mes_nacimiento_texto').classList.add('texto-error');
        setTimeout(() => {
            document.getElementById('error__dato2').style.display = 'none';
            document.getElementById('mes_nacimiento_texto').classList.remove('texto-error');
            
        }, 2000);
    }
}
function RegresarAñoCumpleaños(){
    document.getElementById('mes_nacimiento').style.display = 'none';
    document.getElementById('ano_nacimiento').style.display = 'block';
    formulario.año_n.focus();
}
function BorrarMesCumpleaños(){
    var mescumple = document.formulario.mes_n.value;
    formulario.mes_n.focus();
    if (mescumple > '0'){
        document.formulario.mes_n.value = "";
    }else{
        document.getElementById('error__borrar_dato2').style.display = 'block';
        document.getElementById('mes_nacimiento_texto').classList.add('texto-error');
        setTimeout(() => {
            document.getElementById('error__borrar_dato2').style.display = 'none';
            document.getElementById('mes_nacimiento_texto').classList.remove('texto-error');
            
        }, 2000);
    }
}
// dia_nacimiento
function SiguienteAñoActual(){
    var mesn = document.formulario.mes_n.value;
    var dian = document.formulario.dia_n.value;
    //validacion de dias de los meses 
    if(dian > '0'){
    if(mesn == 1 && dian > '31' && dian < 0){
        alert("Introduce un valor entre 1 y 31 para el mes de enero")
    }else if(mesn == 2 && dian > '29' && dian < ''){
        alert("Introduce un valor entre 1 y 29 para el mes de febrero")
    }else if(mesn == 3 && dian > '31' && dian < ''){
        alert("Introduce un valor entre 1 y 31 para el mes de marzo")
    }else if(mesn == 4 && dian > '30' && dian < ''){
        alert("Introduce un valor entre 1 y 30 para el mes de abril")
    }else if(mesn == 5 && dian > '31' && dian < ''){
        alert("Introduce un valor entre 1 y 31 para el mes de mayo")
    }else if(mesn == 6 && dian > '30' && dian < ''){
        alert("Introduce un valor entre 1 y 30 para el mes de junio")
    }else if(mesn == 7 && dian > '31' && dian < ''){
        alert("Introduce un valor entre 1 y 31 para el mes de julio")
    }else if(mesn == 8 && dian > '31' && dian < ''){
        alert("Introduce un valor entre 1 y 31 para el mes de agosto")
    }else if(mesn == 9 && dian > '30' && dian < ''){
        alert("Introduce un valor entre 1 y 30 para el mes de septiembre")
    }else if(mesn == 10 && dian > '31' && dian < ''){
        alert("Introduce un valor entre 1 y 31 para el mes de octubre")
    }else if(mesn == 11 && dian > '30' && dian < ''){
        alert("Introduce un valor entre 1 y 30 para el mes de noviembre")
    }else if(mesn == 12 && dian > '31' && dian < ''){
        alert("Introduce un valor entre 1 y 31 para el mes de diciembre")
    }
    document.getElementById('dia_nacimiento').style.display = 'none';
        document.getElementById('ano_actual').style.display = 'block';
        formulario.año_a.focus();
}else{
    formulario.mes_n.focus();
    document.getElementById('error__dato3').style.display = 'block';
    document.getElementById('dia_nacimiento_texto').classList.add('texto-error');
    setTimeout(() => {
        document.getElementById('error__dato3').style.display = 'none';
        document.getElementById('dia_nacimiento_texto').classList.remove('texto-error');
        
    }, 2000);
}
}
function RegresarMesCumpleaños(){
    document.getElementById('dia_nacimiento').style.display = 'none';
    document.getElementById('mes_nacimiento').style.display = 'block';
    formulario.mes_n.focus();
}
function BorrarDiaCumpleaños(){
    var diacumple = document.formulario.dia_n.value;
    formulario.dia_n.focus();
    if (diacumple > '0'){
        document.formulario.dia_n.value = "";
    }else{
        document.getElementById('error__borrar_dato3').style.display = 'block';
        document.getElementById('dia_nacimiento_texto').classList.add('texto-error');
        setTimeout(() => {
            document.getElementById('error__borrar_dato3').style.display = 'none';
            document.getElementById('dia_nacimiento_texto').classList.remove('texto-error');
            
        }, 2000);
    }
    
}

// año actual 
function SiguienteMesActual(){
    var anoa = document.formulario.año_a.value;
    const añoactualvalidacion = fecha.getFullYear()
    if(anoa == añoactualvalidacion){
        document.getElementById('ano_actual').style.display = 'none';
        document.getElementById('mes_actual').style.display = 'block';
        formulario.mes_a.focus();
    }else{        
        document.getElementById('error__dato4').style.display = 'block';
        document.getElementById('año_actual_texto').classList.add('texto-error');
        setTimeout(() => {
            document.getElementById('error__dato4').style.display = 'none';
            document.getElementById('año_actual_texto').classList.remove('texto-error');
            
        }, 2000);
        formulario.año_a.focus();
    }
}
function RegresarDiaCumpleaños(){
    document.getElementById('ano_actual').style.display = 'none';
    document.getElementById('dia_nacimiento').style.display = 'block';
    formulario.dia_n.focus();
}
function BorrarAnoActual(){
    var diacumple = document.formulario.año_a.value;
    formulario.año_a.focus();
    if (diacumple > '0'){
        document.formulario.año_a.value = "";
    }else{
        document.getElementById('error__borrar_dato4').style.display = 'block';
        document.getElementById('año_actual_texto').classList.add('texto-error');
        setTimeout(() => {
            document.getElementById('error__borrar_dato4').style.display = 'none';
            document.getElementById('año_actual_texto').classList.remove('texto-error');
            
        }, 2000);
    }
    
}

// mes actual 
function SiguienteDiaActual(){
    var mesa = document.formulario.mes_a.value;
    var mesn = document.formulario.mes_n.value;
    if(mesa > '0'){
        document.getElementById('mes_actual').style.display = 'none';
        document.getElementById('dia_actual').style.display = 'block';
        formulario.dia_a.focus();
    }else{
        document.getElementById('error__borrar_dato5').style.display = 'block';
        document.getElementById('mes_actual_texto').classList.add('texto-error');
        setTimeout(() => {
            document.getElementById('error__borrar_dato5').style.display = 'none';
            document.getElementById('mes_actual_texto').classList.remove('texto-error');
            
        }, 2000);
        formulario.mes_a.focus();
    }
}
function BorrarMesActual(){
    var diacumple = document.formulario.mes_n.value;
    formulario.año_a.focus();
    if (diacumple > '0'){
        document.formulario.mes_n.value = "";
    }else{
        document.getElementById('error__borrar_dato5').style.display = 'block';
        document.getElementById('mes_actual_texto').classList.add('texto-error');
        setTimeout(() => {
            document.getElementById('error__borrar_dato5').style.display = 'none';
            document.getElementById('mes_actual_texto').classList.remove('texto-error');
            
        }, 2000);
    }
   
}
function RegresarAñoActual(){
    document.getElementById('mes_actual').style.display = 'none';
    document.getElementById('ano_actual').style.display = 'block';
    formulario.año_a.focus();
}

// dia actual 
function CalcularEdad (){
    var anon = document.formulario.año_n.value;
    var mesn = document.formulario.mes_n.value;
    var dian = document.formulario.dia_n.value;
    var anoa = document.formulario.año_a.value;
    var mesa = document.formulario.mes_a.value;
    var diaa = document.formulario.dia_a.value;
    var edadporanos = anoa - anon;
    if(diaa >'0'){
    if(mesn == 1 && diaa > '31' && diaa < 0){
        alert("Introduce un valor entre 1 y 31 para el mes de enero")
    }else if(mesn == 2 && diaa > '29' && diaa < ''){
        alert("Introduce un valor entre 1 y 29 para el mes de febrero")
    }else if(mesn == 3 && diaa > '31' && diaa < ''){
        alert("Introduce un valor entre 1 y 31 para el mes de marzo")
    }else if(mesn == 4 && diaa > '30' && diaa < ''){
        alert("Introduce un valor entre 1 y 30 para el mes de abril")
    }else if(mesn == 5 && diaa > '31' && diaa < ''){
        alert("Introduce un valor entre 1 y 31 para el mes de mayo")
    }else if(mesn == 6 && diaa > '30' && diaa < ''){
        alert("Introduce un valor entre 1 y 30 para el mes de junio")
    }else if(mesn == 7 && diaa > '31' && diaa < ''){
        alert("Introduce un valor entre 1 y 31 para el mes de julio")
    }else if(mesn == 8 && diaa > '31' && diaa < ''){
        alert("Introduce un valor entre 1 y 31 para el mes de agosto")
    }else if(mesn == 9 && diaa > '30' && diaa < ''){
        alert("Introduce un valor entre 1 y 30 para el mes de septiembre")
    }else if(mesn == 10 && diaa > '31' && diaa < ''){
        alert("Introduce un valor entre 1 y 31 para el mes de octubre")
    }else if(mesn == 11 && diaa > '30' && diaa < ''){
        alert("Introduce un valor entre 1 y 30 para el mes de noviembre")
    }else if(mesn == 12 && diaa > '31' && diaa < ''){
        alert("Introduce un valor entre 1 y 31 para el mes de diciembre")
    }
    document.getElementById('dia_actual').style.display = 'none';
    document.getElementById('total').style.display = 'block';

    if(mesa >= mesn){
        if(diaa >= dian){
            document.formulario.edad.value = edadporanos + 'años';
        }else{
            var edadpordia = edadporanos - 1;
            document.formulario.edad.value = edadpordia + 'años';
        }
    }else if(mesa < mesn){
        var edadpormes = edadporanos -1;
        document.formulario.edad.value = edadpormes + 'años';
    }
}else if(diaa >='0'){
    document.getElementById('error__borrar_dato6').style.display = 'block';
        document.getElementById('dia_actual_texto').classList.add('texto-error');
        setTimeout(() => {
            document.getElementById('error__borrar_dato6').style.display = 'none';
            document.getElementById('dia_actual_texto').classList.remove('texto-error');
            
        }, 2000);
        formulario.mes_a.focus();
}
}
function BorrarTodo(){
    document.formulario.año_n.value = "";
    document.formulario.mes_n.value = "";
    document.formulario.dia_n.value = "";
    document.formulario.año_a.value = "";
    document.formulario.mes_a.value = "";
    document.formulario.dia_a.value = "";
    document.formulario.edad.value = "";

    document.getElementById('ano_nacimiento').style.display = 'block';
    document.getElementById('total').style.display = 'none';
    formulario.año_n.focus();
}

