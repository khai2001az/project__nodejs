const Toy = require('../models/Toy');

class NewsController {

    //[GET]
    index(req, res, next){         
        Toy.find({})
        .then(toys => res.render('home',{
            toys: toys
        }))
        .catch(next);

        // ;
    }
}

module.exports = new NewsController;