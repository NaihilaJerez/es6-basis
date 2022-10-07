import { materias } from "./materias.js";
import pkg from 'colors'
//metodos de los objeto arreglo 
//foreach: recorre un arreglo 
materias.forEach((materia)=>{
    if (materia.tipo === 'tecnica') {
        console.log(`materia: ${materia.nombre}`.green)
        console.log(`materia: ${materia.instructor}`.magenta)
    }

})

//map: construye un arrreglo en base a otro 
const profesores = materias.map((materia)=>{
    return materia.instructor
})

console.log(profesores)

//find: encontrar la primera ocurrencias (elemento) que cumpla con el criterio dado
const php = materias.filter ((materia)=>{
    return materia.instructor === "Cristian Buitrago"
})
console.log

//push: agrega un elemto 
materias.push({
    id: 5, 
        nombre: "diseño",
        instructor: "adriana ",
        tipo: "tecnica", 
        notas:[
            4.5,
            5.0,
            
        ]
})
// console.log(materias)
//splice: delete 
materias.splice(0,2)
//  console.log(materias)
//actualizar: findIndex 
const eIndex = materias.findIndex((obj => obj.id === 4));
console.log("Before update: ", materias[eIndex]);
materias[eIndex].instructor = "hiii";
console.log("After update: ", materias[eIndex]);

