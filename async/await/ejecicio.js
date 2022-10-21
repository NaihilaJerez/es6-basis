const needle = require('needle')
let url = 'https://api.chucknorris.io/jokes/random'

const f = async () =>{
    try {
        let response = await needle('get', url)
        response.body.results.forEach((element) => {
            console.log(`Tipo ${element.categories}`)
        console.log(`°°°°°°`)
        });
    } catch (error) {
        console.error(error)
    }}
f()