let factura = {
    nombreEmisor: 'Mario Hugo',
    rfcEmisor: 'MGCHUBBY1415',
    nombreReceptro: "Lau",
    rfcReceptor: "LAURIVLOP1509",
    concepto: [
        {nombre: 'azul', cantidad: '1', costoUnitario: 14, sku: "987"},
        {nombre: 'verde', cantidad: '2', costoUnitario: 23, sku: "123"},
        {nombre: 'rojo', cantidad: '2', costoUnitario: 32, sku: "456"},
        {nombre: 'morado', cantidad: '3', costoUnitario: 41, sku: "109"}
    ],
    iva: 16
};
let subtotal = 0;
console.log("Emisor: " + factura.nombreEmisor);
/*for(let i = 0; i < factura.concepto.length; i++){
    console.log(factura.concepto[i].nombre);
}*/
factura.concepto.forEach(element => {
    subtotal += (element.cantidad * element.costoUnitario); 
});
let totalIVA = (subtotal * (factura.iva/100)) + subtotal;
console.log("Total sin iva: " , subtotal);
console.log("Total con iva: " , totalIVA);

/*----------------------------------------*/
let numeros = [7,8,9,3,10,2,1,0];
console.log(numeros);
//numeros[0]=8;
//console.log(numeros);
let numeroUno = numeros[0];
let numeroDos = numeros[1];

if(numeroUno > numeroDos){
    console.log("El ", numeroUno, " es mayor que el ", numeroDos);
}
else{
    console.log("El ", numeroUno, " es menor que el ", numeroDos)
}
/*Reto del dia uwu*/
let aux;
for(let i = 0; i < numeros.length; i++){
    for(let x = (numeros.length - 1); x >= i; x++){
        if(numeros[x-1] > numeros[x]){
            aux = numeros[x -1];
            numeros[x-1] = numeros[x];
            numeros[x] = aux;
        }
    }
}
console.log(numeros);