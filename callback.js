function llamarAlumno(alumno, callback){
    let  llamarAlumno= `llamando a alumno: ${alumno}`
    //ejecutar la funcion callback
    callback(llamarAlumno)
}
//definir funvion callback 
const imprimir=(texto)=>{
    console.log(texto)
}
//invocar la funcion principal de llamar alumno 
llamarAlumno("Naihila", imprimir)