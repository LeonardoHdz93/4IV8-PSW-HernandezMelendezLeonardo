

function validarn(e){
    var teclado = (document.all)?e.keyCode:e.which;
    if(teclado == 8)return true;

    var patron = /[1-9\d ]/;

    var prueba = String.fromCharCode(teclado);
    return patron.test(prueba);
}

function BorrarArticulos(){
    var articulos = document.formulario.articulos_valor.value;
    formulario.articulos_valor.focus();
    if(articulos < '0'){

        document.getElementById('error__borrar_dato').style.display = 'block';
        document.getElementById('texto1').classList.add('texto-error');
        setTimeout(() => {
            document.getElementById('error__borrar_dato').style.display = 'none';
            document.getElementById('texto1').classList.remove('texto-error');
        }, 2000);
    }else{
        document.formulario.articulos_valor.value = "";
    }
    
}
function Calcular(){
    
    var articulos = document.formulario.articulos_valor.value;
    if(articulos > 0 ){
    
    document.getElementById('div_productos').style.display = 'none';
    document.getElementById('div_resultado').style.display = 'block';
        
    var result = parseInt(articulos);    
    var subtotal = result*50;

    var total = subtotal-(subtotal*0.15);

    
    document.formulario.resultado_valor.value = total;
    }else{
        formulario.articulos_valor.focus();
        document.getElementById('error__dato').style.display = 'block';
        document.getElementById('texto1').classList.add('texto-error');
        setTimeout(() => {
            document.getElementById('error__dato').style.display = 'none';
            document.getElementById('texto1').classList.remove('texto-error');
        }, 2000);
    }
}

function borrar1(){
    document.getElementById('div_productos').style.display = 'block';
    document.getElementById('div_resultado').style.display = 'none';

    document.formulario.articulos_valor.value = "";
    document.formulario.resultado_valor.value = "";

    formulario.articulos_valor.focus();
}
