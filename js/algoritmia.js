function Problema1(){
    var p1_input = document.querySelector('#p1-input').value;
    //identificar como dividir el texto por espacios 
    var p1_array = p1_input.split(' ').reverse();

    //construir cadena invertida
    var p1_res = '';
    p1_array.forEach(function (palabra,i){
        if(i != 0 || i != p1_array.length) p1 += ' ';
        p1_res += palabra;
    });
    document.querySelector('#p1-output').textContent  = p1_res;
}
