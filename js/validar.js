function validar(formulario){
    /*
    Queremos validar que se escriban mas de 5 caracteres 
    en el campo nombre
    */ 

    if(formulario.nombre.value.length < 1){
        alert("Por favor escribe mas de 5 caracteres en el campo 'nombre'");
        formulario.nombre.focus();
    return false;
    }

/*
    Queremos validar solo acepte letras
    */ 

    var checkOk = "QWERTYUIOOPASDFGHJKLÑZXCVBNNM" +
    "qwertyuiopasdfghjklñzxcvbnm";

    var checkStr = formulario.nombre.value;

    var allValid = true;

    for(var i  = 0; i < checkStr.length; i++) {
        var ch = checkStr.charAt(i);
        for(var j = 0;  j < checkOk.length; j++)
        if(ch == checkOk.charAt(j))    
                break;
        
       if(j == checkOk.length){
           allValid = false;
           break;
       } 
    }

    if(!allValid){
        alert("escribe solo letras en el campo nombre");
        formulario.nombre.focus();
        return false;
    }
     
    
    var checkOk = "0123456789";

    var checkStr = formulario.edad.value;

    var allValid = true;

    for(var i  = 0; i < checkStr.length; i++) {
        var ch = checkStr.charAt(i);
        for(var j = 0;  j < checkOk.length; j++)
        if(ch == checkOk.charAt(j))    
                break;
        
       if(j == checkOk.length){
           allValid = false;
           break;
       } 
    }

    if(!allValid){
        alert("escribe solo numeros en el campo edad");
        formulario.edad.focus();
        return false;
    }


var txt = formulario.email.value;

//expresion regular

var b = /^[^@\s]+@[^@\.\s]+(\.[^@\.\s]+)+$/;

alert("Email" + (b.test(txt)?"":" no") + " valido");

formulario.email.focus();

}
