const Toy = require('../models/Toy');
const { MongooseToObject, multipleMongooseToObject } = require('../../util/mongoose')

class MeController {

    //[GET]
    storedToys(req, res, next){ 
        Toy.find({})
        .then(toys =>res.render('me/storedToys', {
            toys: multipleMongooseToObject(toys)
        }))
        .catch(next);
               
    }
}

module.exports = new MeController();