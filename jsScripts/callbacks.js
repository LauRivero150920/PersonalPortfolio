//Ejemplo 1
// function saludar(algo){
//     alert(algo);
// }

// saludar([1,2,3,4])
// saludar({hola:"Hola"});

//Ejemplo 2
// function principal(callback){ //funcion que de parametro recibe otra funcion
//     console.log("Se ejecuto principal");
//     callback("Se ejecuto call back");
// }
// principal(function(value){
//     console.log(value);
// });

//Ejemplo 3
// function principal(callback1, callback2, callback3){
//     console.log("Se ejecuto principal");
//     callback1();
//     callback2();
//     callback3();
// }
// principal(
//     function(){
//         console.log("Callback 1");
//     },
//     function(){
//         console.log("Callback 2");
//     },
//     function(){
//         console.log("Callback 3");
//     }
// );

//Calculadora
//1.- mandar llamar el evento click del boton
//2.- Obtener valor de los inputs #numUno #numDos
//3.- Funcion principal
//4.- Pasar los numeros a cada callback
//5.- Realizar la operacion en cada callback
function calculadora(suma, resta, multiplicar, dividir){
    $('#calcular').click(function(){
        let numUno = $('#numUno').val();
        let numDos = $('#numDos').val();
        suma(numUno, numDos);
        resta(numUno, numDos);
        multiplicar(numUno, numDos);
        dividir(numUno, numDos);
     });
}
calculadora(
    function(a,b){
        let s = parseInt(a) + parseInt(b);
        $('#suma').html("Resultado suma: " + s);
    },
    function(a,b){
        let r = a - b;
        $('#resta').html("Resultado resta: " + r);
    },
    function(a,b){
        let m = a * b;
        $('#multi').html("Resultado multiplicación: " + m);
    },
    function(a,b){
        let d = a / b;
        $('#div').html("Resultado división: " + d.toFixed(2));
    },
);

calculadora();

