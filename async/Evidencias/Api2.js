const axios = require('axios')

let config={
    method:'get', 
    url:'https://hp-api.herokuapp.com/api/characters/students'
}

const f = async () =>{
    try {
        let response = await axios(config)
        response.data.forEach(element => {
            console.log(`Tipo ${element.name}`)
        console.log(`°°°°°°°°`)
        });
    } catch (error) {
        console.error(error)
    }}
f()