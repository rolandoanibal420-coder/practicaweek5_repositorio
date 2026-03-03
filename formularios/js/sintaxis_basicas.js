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
// || : or
// && : and
