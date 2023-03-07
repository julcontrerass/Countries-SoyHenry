const { getCountriesApi , getDetailCountries ,searchCountriesByName} = require('../Services/countries.service')

const getCountries = async function (req, res, next) {
    if(!req.params.id && !req.query.name) {
        try{
            const api = await getCountriesApi();
            
            res.status(200).send(api)
        } catch(e) {
            next(e)
        }
    } else {
        next()
    }
    
}

const getCountriesById = async function(req, res, next) {
    if(req.params.id && !req.query.name){
        try{
            const detail = await getDetailCountries(req.params.id);
            // const detailActivity = await 
            res.status(200).send(detail)
        } catch(e) {
            next(e)
        }
    } else {
        next()
    }
    
}

const getCountriesByName = async function(req, res, next){
    try{
        if(!req.params.id && req.query.name) {
            const search = await searchCountriesByName(req.query.name)
            res.status(200).send(search)
        }
    } catch(e){
        next(e)
    }
}

module.exports = {
    getCountries,
    getCountriesById,
    getCountriesByName
}