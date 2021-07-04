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
/**
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 */
/*Calificaciones finales*/
const calificaciones = [1,5,7,3,8,5,8,3,5,7,8,6,10];
const califAprob = 6;

//Funciones auxiliares
const sumaCalificaciones = (acum, elem) => acum + elem;
const promCalificaciones = arreglo => arreglo.reduce(sumaCalificaciones) / arreglo.length;
const numAlumnosAprobados = (arreglo, califAprob) => {
    let aprobados = 0, 
        reprobados = 0;

    for(let i = 0;i < arreglo.length;i++){
        if(arreglo[i] >= califAprob) aprobados++;
        else reprobados++;
    }

    console.log(`Numero de alumnos aprobados: ${aprobados}`);
    console.log(`Numero de alumnos reprobados: ${reprobados}`);
};
const porcenAlumnosAprobados = (arreglo, califAprob) => {
    let aprobados = 0, 
        reprobados = 0;

    for(let i = 0;i < arreglo.length;i++){
        if(arreglo[i] >= califAprob) aprobados++;
        else reprobados++;
    }

    aprobados *= 100 / arreglo.length;
    reprobados *= 100 / arreglo.length;

    console.log(`Numero de alumnos aprobados: ${aprobados}`);
    console.log(`Numero de alumnos reprobados: ${reprobados}`);
};
const califMayorOcho = arreglo => {
    let numAlumnos = 0;

    for(let i = 0;i < arreglo.length;i++){
        if(arreglo[i] >= 8) numAlumnos++;
    }

    return numAlumnos;
};

//Obtenemos los resultados
const promedioGeneral = promCalificaciones(calificaciones);
const alumnosMayor8 = califMayorOcho(calificaciones);

//Impresion de los resultados
console.log(`Promedio general de los alumnos: ${promedioGeneral}`);
numAlumnosAprobados(calificaciones, califAprob);
porcenAlumnosAprobados(calificaciones, califAprob);
console.log(`Alumnos con calificacion mayor a 8: ${alumnosMayor8}`);