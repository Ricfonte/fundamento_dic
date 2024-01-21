/*function ricardo () {
    for (var num=0; num <=5; num +2){
        console.log(num);
    }
    
}
ricardo()

function name_function() {
    for( var num=4; num<=6; num ++) {
        console.log(num);
    }
    
}
name_function();*/


/*function nombres_funcion() {
    for (var num = 90; num >=80; num --){
        console.log(num);
    }
}
nombres_funcion();

var ojo = "definido"
console.log(ojo);

function nombre_funcion(comienzo) {
    for (var num = comienzo; num >=80; num --){
        console.log(num);
    }
}
nombre_funcion(90);*/

function crearArreglo(num) {        
        var nuevoArreglo = [];       
        for (var i = 0; i <= num; i++) {                
            nuevoArreglo.push(i);        
        }
    crearArreglo(5);
    }
   
    //El nuevoArreglo solo existe dentro de la función.  ¡Acá afuera ya no existe!
    