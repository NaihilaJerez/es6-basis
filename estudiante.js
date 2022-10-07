let colors = require('colors');


const E1 =[
    "laura" ,
     "carlos", 
     "ana", 
     "jorge"
]
const E2 =[
    "ENRIQUE" ,
     "jairo", 
     "valeria", 
     "jorge"
]
const E3=[
    ...E1, 
    "DIANA",
    ...E2, 
    "DUVAN"
]
const estudiante={
    id: 1, 
    nombre: 'Naihilisss', 
    apellido: 'Jerez',
    identificacion: 1013102996, 
    amigos: E3
}

//desestructuracion EL ARREGLO de estudiamte 
console.log(estudiante)