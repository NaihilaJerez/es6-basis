const needle = require ('needle')
const url = 'https://pokeapi.co/api/v2/type'
needle('get', url)
        .then((data)=>{
            data.forEach(element => {
            console.log(`Tipo ${element.name}`)
        console.log(`-----------`)
            }
        }).cath((error)=>{
            console.log(error)
        })