const express = require ('express');
const router = express.Router();    

const MeController  = require('../app/controllers/MeController');

router.get('/stored/toys', MeController.storedToys);



module.exports = router;