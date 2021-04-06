
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
        alert("Introduce un valor valido")
        formulario.año_n.focus();
    }
}
function BorrarAnoCumpleaños(){
    document.formulario.año_n.value = "";
    formulario.año_n.focus();
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
        alert("Introduce un valor entre 01 y 12 con formato 00");
        formulario.mes_n.focus();
    }
}
function RegresarAñoCumpleaños(){
    document.getElementById('mes_nacimiento').style.display = 'none';
    document.getElementById('ano_nacimiento').style.display = 'block';
    formulario.año_n.focus();
}
function BorrarMesCumpleaños(){
    document.formulario.mes_n.value = "";
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
    alert("Introduce un dato valido en formato ")
}
}
function RegresarMesCumpleaños(){
    document.getElementById('dia_nacimiento').style.display = 'none';
    document.getElementById('mes_nacimiento').style.display = 'block';
    formulario.mes_n.focus();
}
function BorrarDiaCumpleaños(){
    document.formulario.dia_n.value = "";
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
        alert("Introduce un valor correcto")
        formulario.año_a.focus();
    }
}
function RegresarDiaCumpleaños(){
    document.getElementById('ano_actual').style.display = 'none';
    document.getElementById('dia_nacimiento').style.display = 'block';
    formulario.dia_n.focus();
}
function BorrarAnoActual(){
    document.formulario.año_a.value = "";
}

// mes actual 
function SiguienteDiaActual(){
    var mesa = document.formulario.mes_a.value;
    if(mesa > 0 && mesa <= '12'){
        document.getElementById('mes_actual').style.display = 'none';
        document.getElementById('dia_actual').style.display = 'block';
        formulario.dia_a.focus();
    }else{
        alert("Introduce un valor entre 01 y 12 con formato 00")
        formulario.mes_a.focus();
    }
}
function BorrarMesActual(){
    document.formulario.mes_n.value = "";
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

    document.getElementById('dia_actual').style.display = 'none';
    document.getElementById('total').style.display = 'block';

    if(mesa >= mesn){
        if(diaa >= dian){
            document.formulario.edad.value = edadporanos;
        }else{
            var edadpordia = edadporanos - 1;
            document.formulario.edad.value = edadpordia;
        }
    }else if(mesa < mesn){
        var edadpormes = edadporanos -1;
        document.formulario.edad.value = edadpormes;
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

