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