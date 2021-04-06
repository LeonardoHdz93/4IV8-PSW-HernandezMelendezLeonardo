

function validarn(e){
    var teclado = (document.all)?e.keyCode:e.which;
    if(teclado == 8)return true;
    
    var patron = /[1-9\d]/;
    
    var prueba = String.fromCharCode(teclado);
    return patron.test(prueba);
    }

function Siguiente1(){
    var horas_normales = document.formulario.horas_normalesdato.value;
    if(horas_normales > '0'){
        document.getElementById('cantidad_de_horas').style.display = 'none';
        document.getElementById('pago_por_horas').style.display = 'block';
        formulario.hora_paga.focus();   
    }
}
function CalcularSueldo(){



    var horas_normales = document.formulario.horas_normalesdato.value;
    var paga_por_hora = document.formulario.hora_paga.value;

    if(horas_normales > '0'){

        document.getElementById('pago_por_horas').style.display = 'none';
        document.getElementById('total').style.display = 'block';
       
        if(horas_normales <= 40){            
            var horas_normales_paga = horas_normales * paga_por_hora; 
            alert(horas_normales_paga) 
            document.formulario.totalpaga.value = horas_normales_paga;


        }else if(horas_normales > 40){

            var horas_extras = horas_normales - 40;
            


            if(horas_extras > 8){

                var horas_extras_extras = horas_extras - 8;                
                var horas_simples = horas_normales - horas_extras ;
                var horas_por2 = horas_extras - horas_extras_extras;


               
                var horas_normales_paga = horas_simples * paga_por_hora;
                var horas_dobles = horas_por2 * paga_por_hora * 2;
                var horas_triples = horas_extras_extras * paga_por_hora * 3;
               

               var total_paga_triple= horas_normales_paga + horas_dobles + horas_triples;
               document.formulario.totalpaga.value = total_paga_triple;
            }









            

            


        } 
            
        }
    
    }



function BorrarHoras(){    
    document.formulario.horas_normales.value = '';
    
}
function BorrarPaga(){    
    document.formulario.hora_paga.value = '';
    
}
function BorrarTodo(){
     document.formulario.horas_normalesdato.value = '';
     document.formulario.hora_paga.value = '';
     document.formulario.totalpaga.value = '';
     document.getElementById('total').style.display = 'none';
    document.getElementById('cantidad_de_horas').style.display = 'block';
}