const request = require('request')

const url='https://pokeapi.co/api/v2/type'
const r = request(url, {json:true}, function(error, response, data){
    data.results.forEach(element => {
        console.log(`Tipo: ${element.name}`)
        console.log(`url: ${element.url}`)
        console.log('***********')
    });
    console.log(data)
})
