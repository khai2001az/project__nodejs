const express = require ('express');
const router = express.Router();    

const ToyController  = require('../app/controllers/ToyController');

router.get('/:slug', ToyController.show);


module.exports = router;