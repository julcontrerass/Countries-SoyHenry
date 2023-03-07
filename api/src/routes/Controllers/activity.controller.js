const { createActivity } = require('../Services/activity.services')

const create = async function(req, res, next) {
    try{
        const dataBody = await createActivity(req.body)
        res.status(200).send(dataBody)
    } catch(e) {
        next(e)
    }
    
}

module.exports = {
    create
}