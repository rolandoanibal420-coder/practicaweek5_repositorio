/*
comentario multilinea
*/


console.log("mensaje en la consola");
console.log("otro mensaje");

// constante: valor que NO cambia durante la ejecucion del codigo
const PI = 3.14;
console.log(PI);

const TIPO_USUARIO = "Visitante;"
console.log(TIPO_USUARIO);

// variable: valor que cambia durante la ejecucion del codigo

// Función: Bloque de código reutilizable que realiza una tarea específica.

/* Crear una función para calcular el IMC con la siguiente fórmula:
IMC = peso / estatura^2
Mostrar en la consola un mensaje que diga "El IMC es: --"
Datos de prueba en kg       m       IMC
                    80      1.7     27.7
                    60      1.8     18.5
*/

function calcularIMC(peso, estatura){
    //               (estatura*estatura)
    let imc = peso / Math.pow(estatura, 2);
    console.log("El IMC es: " + imc.toFixed(2)); // Definir la cantidad de decimales con toFixed()
}

calcularIMC(80, 1.7);
calcularIMC(60, 1.8);

// Función con datos de salida (valor de retorno)
function calcularIMCRetorno(peso, estatura){
    //               (estatura*estatura)
    let imc = peso / Math.pow(estatura, 2);
    return imc.toFixed(2);
}

console.log("El IMC es: " + calcularIMCRetorno(80, 1.7));
console.log("El IMC es: " + calcularIMCRetorno(60, 1.8));

/*
== : comparar el valor 
Python: 
    5 == 5:  Verdadero
    "5" == 5: Falso
JavaScript
    5 == 5:  Verdadero
    "5" == 5: Verdadero porque JS compara solo el valor 

    5 === 5: Verdadero (JS primero compara el tipo de dato y luego compara el valor)
    "5" === 5: Falso (JS compara el tipo de dato y el valor)

    "5" !== 5 : Verdadero
*/

console.log("5" == 5); // Se compara solo el valor 
console.log("5" === 5); // Se compara el tipo de dato y el valor 
console.log("10" != 10); // Se compara solo el valor
console.log("10" !== 10); // Se compara el tipo de dato y el valor
console.log("El área del rectángulo es: " + areaRectangulo(5, 3));
console.log("El área del rectángulo es: " + areaRectangulo(5));
console.log(areaRectangulo("5"));
console.log(areaRectangulo(0, 2));
/* Crear una función para calcular el área de un rectángulo
Datos de prueba:    base    altura      área
                    5       3           15
                    4                   16 
                    ""      2           Error
                    0       2           Error
*/
function areaRectangulo(base, altura){
    // Condicional para asignar altura = base si solo hay un dato de entrada
    if (altura === undefined){ 
        altura = base; 
    }

    if (typeof base !== "number" || typeof altura !== "number" || base <= 0 || altura <= 0){
        return "Error: Los datos deben ser números positivos";
    }

    return base * altura;
}

// || : or
// && : and

/*
conversión de temperatura  = (temperatura - 32) * 5 / 9; // Fahrenheit a Celsius  
conversión de temperatura  = (temperatura * 9 / 5) + 32; // Celsius a Fahrenheit
Ejercicio: Crear una función para convertir temperaturas entre Celsius y Fahrenheit.

Diseñar una función llamada convertirTemperatura que convierta una temperatura entre grados Celsius (°C) y Fahrenheit (°F) según la unidad solicitada. 
Datos de entrada: Temperatura y escala a la cual se debe de convertir la temperatura
Datos de prueba:    Temperatura    Escala  a convertir     Resultado esperado
                    25              F                           77
                    32              C                           0
                    "100"           C                         Error
                    0               a                          Error
*/

function convertirTemperatura (temperatura, conversión) {
      if (typeof temperatura !== 'number') {
        return 'Error';

    }     

    if (conversión === 'F' || conversión === 'f'){
        return ( temperatura * 9 / 5) + 32;
    }

    if (conversión === 'C' || conversión === 'c') {
        return (temperatura - 32) * 5 / 9;
    }
    
    return 'Error';
    }

        console.log("conversion 1 (25 grados celcius a F):", convertirTemperatura(25,'F'));
        console.log("conversion 2 (32 grados F  a celcius):", convertirTemperatura(32,'C'));

