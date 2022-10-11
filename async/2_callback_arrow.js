let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

let endpoint='https://pokeapi.co/api/v2/type'
const exito=(response)=>{
    const tipos = JSON.parse(response).results
    tipos.forEach((tipo) => {
        console.log(`Tipo ${tipo.name}`)
        console.log(`-----------`)
    });
    //console.log(JSON.parse(response))
}
const fallo=(status)=>{
    console.log(status)
}
const get_data=(endpoint, exito, fallo)=>{
    //OBJETO de conexion a API
    let http= new XMLHttpRequest()
    //abrir conexion a API
    http.open('get', endpoint )
    //enviar solucitud (request) a la API
    http.send()
    //hacer el tratamienyo de la response 
    http.onload= ()=>{
        if(http.status === 200){
            exito(http.responseText)
        }else{
            fallo(http.status)
        }
       
    }
}
//invocar la funcion get ¿_data 
get_data(endpoint, exito, fallo)