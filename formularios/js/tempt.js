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
{
    let btnCalcularTEMP = document.getElementById("btnCalcularTEMP");
    let txtTemp = document.getElementById("txtTemp");
    let txtConversion = document.getElementById("txtConversion");
    let parrafoResultado = document.querySelector("#sctResultadoTEMP p");

    function convertirTemperatura() {
        let temperatura = txtTemp.value;
        let conversión = txtConversion.value;
        if (conversión === 'F' || conversión === 'f') {
            let resultado = (temperatura * 9 / 5) + 32;
            parrafoResultado.innerText = resultado;
        } 

        if (conversión === 'C' || conversión === 'c') {
            let resultado = (temperatura - 32) * 5 / 9;
            parrafoResultado.innerText = resultado;
        }
        if (temperatura === "" || (conversión !== 'C' && conversión !== 'F' && conversión !== 'c' && conversión !== 'f')) {
            parrafoResultado.innerText = "Error";
        }
    }

    btnCalcularTEMP.addEventListener("click", function(event) {
        event.preventDefault(); 
        convertirTemperatura(); 
    });
}