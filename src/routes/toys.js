const express = require ('express');
const router = express.Router();    

const ToyController  = require('../app/controllers/ToyController');

router.get('/create', ToyController.create);
router.post('/store', ToyController.store);
router.delete('/:id', ToyController.destroy); 
router.get('/:slug', ToyController.show);


module.exports = router;