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
    //[GET]
    create(req, res, next){         
        res.render('toys/create');
     }

     //[POST]
     store(req, res, next){         

        const toy = new Toy(req.body);
        toy.save()
            .then(() => res.redirect('/'))
            .catch(error =>{

            });
     }
}

module.exports = new ToyController();