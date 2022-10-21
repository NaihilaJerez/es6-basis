let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var xhr = new XMLHttpRequest(); 
xhr.onload = exito; 
xhr.onerror = error;  
xhr.open('GET', 'https://api.github.com/users/manishmshiva/followers'); 

xhr.send(); 
function exito() {
    var datos = JSON.parse(this.responseText); 
    datos.forEach((datos) => {
        console.log(`login ${datos.login}`)
        console.log(`Id ${datos.id}`)
        console.log(`-----------`)
    });
}

function error(err) {
    console.log('Solicitud fallida', err); 
}

