const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const Toy = new Schema({
    img: { type: String, maxLength: 255 },
    name: { type: String, maxLength: 50 },
    description: { type: String, maxLength: 600 },
    cost: { type: Number, maxLength: 10 },
    createAt: { type: Date, default: Date.now },
    updateAt: { type: Date, default: Date.now },

});

module.exports = mongoose.model('Toy', Toy);