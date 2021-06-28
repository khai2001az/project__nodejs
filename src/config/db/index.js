const mongoose = require ('mongoose');
async function connect(){

    try{
        await mongoose.createConnection('mongodb://localhost:8.8.8.8/marvel_toy_dev', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        console.log('Connect OKE')
    }
    catch(error){
        console.log('Connect Not OKE')
    }
    
}

module.exports = { connect };