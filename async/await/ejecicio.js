const needle = require('needle')
let url = 'https://pokeapi.co/api/v2/type'

const f = async () =>{
    try {
        let response = await needle('get', url)
        response.body.results.forEach((element) => {
            console.log(`Tipo ${element.name}`)
        console.log(`°°°°°°`)
        });
    } catch (error) {
        console.error(error)
    }}
f()