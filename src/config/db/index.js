const mongoose = require ('mongoose');
// async function connect(){

    // try{
    //     await mongoose.connect('mongodb://localhost:27017/marvel_toy_dev', {
    //         useNewUrlParser: true,
    //         useUnifiedTopology: true
    //     });

    //     console.log('Connect OKE')
    // }
    // catch(error){
    //     console.log('Connect Not OKE')
    // }
    mongoose.connect('mongodb://localhost:27017/marvel_toy_dev').catch(err);
    
// }

module.exports = { connect };