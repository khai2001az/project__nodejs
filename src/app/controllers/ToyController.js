const Toy = require('../models/Toy');
const { MongooseToObject } = require('../../util/mongoose')

class ToyController {

    //[GET]
    show(req, res, next){         
       Toy.findOne({ slug: req.params.slug })
       .then(toys=>
        {
            res.render('toys/show', { toys: MongooseToObject(toys)});
        })
        .catch(next);
    }
}

module.exports = new ToyController();