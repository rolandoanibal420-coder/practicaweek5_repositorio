let btnCalcularIMC = document.getElementById("btnCalcularIMC");

let txtPeso = document.getElementById("txtPeso");
let txtEstatura = document.getElementById("txtEstatura");


let parrafoResultado = document.querySelector("#sctResultadoIMC p");

function calcularIMC(peso, estatura){
    //               (estatura*estatura)
    let imc = peso / Math.pow(estatura, 2);
    console.log("El IMC es: " + imc.toFixed(2)); // Definir la cantidad de decimales con toFixed()
}

calcularIMC(80, 1.7);
calcularIMC(60, 1.8);

// Función con datos de salida (valor de retorno)
function calcularIMCRetorno(){
    let peso = txtPeso.value;
    let estatura = txtEstatura.value;


    //               (estatura*estatura)
    let imc = peso / Math.pow(estatura, 2);
parrafoResultado.innerText = imc.toFixed(2);
    
if (validarCamposVacios() === false){
    parrafoResultado.innerText = imc.toFixed(2);
}
else{
    Swal.fire({
        title: "no se puede calcular el IMC",
        text: "porfavor revise los campos resltados",
        icon: "warning",
        confirmButtonText: "aceptar"
    });
}

}


function validarCamposVacios() {
    let error = false; //asumir que no existen errores por defecto
    if (txtPeso.value === ""){
        txtPeso.classList.add("input-error");
        error = true;
    }
    else{
        txtEstatura.classList.remove("input-error");
    }
        if (txtEstatura.value === ""){
        txtEstatura.classList.add("input-error");
        error = true;
    }
    else{
        txtEstatura.classList.remove("input-error")
    }
    return error;
}













// escuchar eventos
btnCalcularIMC.addEventListener("click", calcularIMCRetorno);