/*Toneladas de cereales*/ 
const toneladasCeralAnual = [1,6,2,6,8,9,8,3,6,2,9,4];

//Funciones auxiliares
const sumaElementos = (acum, elem) => acum + elem; 
const promedioAnual = arreglo => arreglo.reduce(sumaElementos) / arreglo.length;
const mayorAlPromedio = (prom, arreglo) => {
    let numElementos = 0;

    for(let i = 0;i < arreglo.length;i++){
        if(arreglo[i] > prom) numElementos++;
    }

    return numElementos;
}; 
const menorAlPromedio = (prom, arreglo) => {
    let numElementos = 0;

    for(let i = 0;i < arreglo.length;i++){
        if(arreglo[i] < prom) numElementos++;
    }

    return numElementos;
}

//Obtenemos los resultados
const promedioAnualCereal = promedioAnual(toneladasCeralAnual);
const mayoresAlPromedio = mayorAlPromedio(promedioAnualCereal, toneladasCeralAnual);
const menoresAlPromedio = menorAlPromedio(promedioAnualCereal, toneladasCeralAnual);

//Impresion de los resultados
console.log(`Promedio anual de cereal: ${promedioAnualCereal}`);
console.log(`Numero de meses mayores al promedio: ${mayoresAlPromedio}`);
console.log(`Numero de meses menores al promedio: ${menoresAlPromedio}`);