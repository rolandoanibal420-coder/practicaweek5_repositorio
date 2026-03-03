let btnCalcularIMC = document.getElementById("btnCalcularIMC");


function calcularIMC(peso, estatura){
    //               (estatura*estatura)
    let imc = peso / Math.pow(estatura, 2);
    console.log("El IMC es: " + imc.toFixed(2)); // Definir la cantidad de decimales con toFixed()
}

calcularIMC(80, 1.7);
calcularIMC(60, 1.8);

// Función con datos de salida (valor de retorno)
function calcularIMCRetorno(){
    console.log(" evento de clic");
    //               (estatura*estatura)
   /* let imc = peso / Math.pow(estatura, 2);
    return imc.toFixed(2);
    */

}


// escuchar eventos
btnCalcularIMC.addEventListener("click", calcularIMCRetorno);