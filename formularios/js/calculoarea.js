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