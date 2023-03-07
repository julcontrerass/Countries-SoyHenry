const axios = require('axios')
const { Country , Activity} = require('../../db')
const { Sequelize } = require('sequelize');

const countries = async function() {
    try{

        const api = await axios('https://restcountries.com/v3/all') //llamo al endpont  de la api 
        const apiData = api.data?.map( async element => {
            await Country.findOrCreate({ //await, porque no se sabe cuento tarda a la respuesta entonces tengo que avisar
                where:{
                    id: element.cca3,
                    name: element.name['common'],
                    flags: element.flags[0],
                    continents: element.continents[0],
                    capital: element.capital !== undefined ? element.capital[0] : 'No esta definido Capital',
                    subregion: element.subregion !== undefined ? element.subregion : 'No esta definido Subregion',
                    area: element.area,
                    population: element.population,
                },
                row: false
            })
            await Promise.all(apiData)
            return apiData
        })
    } catch(error){
        console.log(error)
    }
    
}

const getCountriesApi = async function() {
    
    try{
        const countriesData = await countries()
        const getCountries = await Country.findAll({ //llamo los componentes que tengo en mi base de datos 
            attributes: ['id', 'name', 'flags', 'continents', "population"],
            include: {
                model: Activity,
                attributes: ["name", "difficulty", "duration", "season"],
                through: {
                    attributes: [],
                }
            }
        })
        return getCountries
    } catch(error){
        console.log(error)
    }
}


const getDetailCountries = async function(id) {
    try{
          const countriesData = await countries()
     const iD = id.toUpperCase() // convierte en mayusculas
     const detailCountrie = await Country.findOne({
         where:{
             id: iD
         },
         include: {
                model: Activity,
                attributes: ["name", "difficulty", "duration", "season"],
                through: {
                    attributes: [],
                }
            },
     });
    
    return detailCountrie
    } catch(error) {
        console.log(error)
    }
  
}

const searchCountriesByName = async function(name) {
    try{
        const countrie = await Country.findAll({
            where: 
                { name: Sequelize.where( Sequelize.fn('LOWER', Sequelize.col('name')), 'LIKE', '%' + name + '%')
                },
            
            raw: true
        })
       
        Promise.all(countrie)
        if(countrie.length > 0){
            return countrie
        } return 'No se encontro el pais'
    } catch(error) {
        console.log(error)
    }

}

module.exports = {
    getCountriesApi,
    getDetailCountries,
    searchCountriesByName,
    countries
}