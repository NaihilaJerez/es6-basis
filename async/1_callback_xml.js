let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

let endpoint='https://pokeapi.co/api/v2/type'
function exito(response){
    console.log(JSON.parse(response))
}
function fallo(status){
    console.log(status)
}
function get_data(endpoint, exito, fallo){
    //OBJETO de conexion a API
    let http= new XMLHttpRequest()
    //abrir conexion a API
    http.open('get', endpoint )
    //enviar solucitud (request) a la API
    http.send()
    //hacer el tratamienyo de la response 
    http.onload= function(){
        if(http.status === 200){
            exito(http.responseText)
        }else{
            fallo(http.status)
        }
       
    }
}
//invocar la funcion get ¿_data 
get_data(endpoint, exito, fallo)